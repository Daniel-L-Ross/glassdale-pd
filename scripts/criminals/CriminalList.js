import { getCriminals, useCriminals } from './CriminalProvider.js'
import { criminal } from './Criminal.js'

const eventHub = document.querySelector(".container")

eventHub.addEventListener("crimeChosen", event => { 
    console.log("A crime selection was heard")
    if (event.detail.crimeThatWasChosen !== "0") {
        const appStateCriminals = useCriminals()
        const matchingCriminals = appStateCriminals.filter(currentConvict => {
            return currentConvict.conviction === event.detail.crimeThatWasChosen
        })
        render(matchingCriminals)
    }
})

const contentElement = document.querySelector('.criminalsContainer')

const render = (criminalsToDisplay) => {
    const convertedCriminals = criminalsToDisplay.map(convictObject => {
        const criminalHTML = criminal(convictObject)
        return criminalHTML
    })

    // console.log(convertedCriminals, Array.isArray(convertedCriminals))

    const combinedCriminalHTML = convertedCriminals.join("");
    // debugger
    contentElement.innerHTML = `
    <h3>Glassdale Criminals</h3>
    <section class="criminalList">
    ${combinedCriminalHTML}
    </section>
    `
}

export const criminalList = () => {
    // debugger
    getCriminals()
    .then(() => {
        const appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
}