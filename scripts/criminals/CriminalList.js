import { getCriminals, useCriminals } from './CriminalProvider.js'
import { criminal } from './Criminal.js'
import { useConvictions } from '../convictions/ConvictionProvider.js'
import { showWitnessesButton } from '../witnesses/ShowWitnessButton.js'

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector('.contentContainer__left')

eventHub.addEventListener("crimeChosen", crimeChosenEvent => { 
    console.log("A crime selection was heard")
    if (crimeChosenEvent.detail.crimeThatWasChosen !== "0") {
        const convictionsArray = useConvictions()
        
        const chosenConvictionObject = convictionsArray.find(convictionObj => {
            console.log("function is checking", convictionObj)
            return convictionObj.id === parseInt(crimeChosenEvent.detail.crimeThatWasChosen)
        })

        console.log(chosenConvictionObject)
        const criminalsArray = useCriminals()
        const filteredCriminalsArray = criminalsArray.filter(criminalObj => criminalObj.conviction === chosenConvictionObject.name)
        render(filteredCriminalsArray)
    }
})

// event listener to sort criminals by arresting officer and populate the dom
eventHub.addEventListener("officerChosen", officerChosenEvent => { 
    console.log("An officer selection was heard")
    if (officerChosenEvent.detail.officerThatWasChosen !== "0") {
        const criminalsArray = useCriminals()
        const criminalsByOfficerArray = criminalsArray.filter(criminalObj => criminalObj.arrestingOfficer === officerChosenEvent.detail.officerThatWasChosen)
        render(criminalsByOfficerArray)
    }
})


const render = (criminalsToDisplay) => {
    const convertedCriminals = criminalsToDisplay.map(convictObject => {
        const criminalHTML = criminal(convictObject)
        return criminalHTML
    })

    const combinedCriminalHTML = convertedCriminals.join("");

    contentElement.innerHTML = `
    ${showWitnessesButton()}
    <h3>Glassdale Criminals</h3>
    <section class="containerLeft__list">
    ${combinedCriminalHTML}
    </section>
    `
}

// this event listener renders criminals in place of the witnesses
eventHub.addEventListener("showCriminalsClicked", showCriminalsEvent => {
    criminalList()
})

export const criminalList = () => {
    getCriminals()
    .then(() => {
        const appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
}