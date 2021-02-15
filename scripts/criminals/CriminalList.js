import { getCriminals, useCriminals } from './CriminalProvider.js'
import { criminal } from './Criminal.js'
import { useConvictions } from '../convictions/ConvictionProvider.js'
import { showWitnessesButton } from '../witnesses/ShowWitnessButton.js'
import { getFacilities, useFacilites } from '../facility/FacilityProvider.js'
import { getCriminalFacilities, useCriminalFacilities } from '../facility/CriminalFacilityProvider.js'

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector('.containerLeft__content')

eventHub.addEventListener("crimeChosen", crimeChosenEvent => { 
    if (crimeChosenEvent.detail.crimeThatWasChosen !== "0") {
        const convictionsArray = useConvictions()
        
        const chosenConvictionObject = convictionsArray.find(convictionObj => {
            console.log("function is checking", convictionObj)
            return convictionObj.id === parseInt(crimeChosenEvent.detail.crimeThatWasChosen)
        })

        console.log(chosenConvictionObject)
        const criminalsArray = useCriminals()
        const stateFacilities = useFacilites()
        const stateCriminalFacilities = useCriminalFacilities()
        const filteredCriminalsArray = criminalsArray.filter(criminalObj => criminalObj.conviction === chosenConvictionObject.name)
        render(filteredCriminalsArray, stateFacilities, stateCriminalFacilities)
    }
})

// event listener to sort criminals by arresting officer and populate the dom
eventHub.addEventListener("officerChosen", officerChosenEvent => { 
    console.log("An officer selection was heard")
    if (officerChosenEvent.detail.officerThatWasChosen !== "0") {
        const criminalsArray = useCriminals()
        const stateFacilities = useFacilites()
        const stateCriminalFacilities = useCriminalFacilities()
        const criminalsByOfficerArray = criminalsArray.filter(criminalObj => criminalObj.arrestingOfficer === officerChosenEvent.detail.officerThatWasChosen)
        render(criminalsByOfficerArray, stateFacilities, stateCriminalFacilities)
    }
})


const render = (criminals, allFacilities, allRelationships) => {
    // first, iterate over all criminals
    const convertedCriminals = criminals.map(criminalObject => {
        // second, filter all relationships by this criminal
        const relatedFacilties = allRelationships.filter(cf => cf.criminalId === criminalObject.id)
        
        // third, take the relatedFacilities for this criminal and map then filter for correct facilities
        const facilities = relatedFacilties.map(cf => {
            const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
            return matchingFacilityObject
        })

        return criminal(criminalObject, facilities)
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
    .then(getFacilities)
    .then(getCriminalFacilities)
    .then(() => {
        const appStateCriminals = useCriminals()
        const appStateFacilities = useFacilites()
        const appStateCriminalFacilities = useCriminalFacilities()
            render(appStateCriminals, appStateFacilities, appStateCriminalFacilities)
        })
}