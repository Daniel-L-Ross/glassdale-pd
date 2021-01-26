import { getCriminals, useCriminals } from './CriminalProvider.js'
import { criminal } from './Criminal.js'

const eventHub = document.querySelector(".container")

eventHub.addEventListener('crimeSelected', event => {
    if (event.detail.crimeThatWasChosen !== "0") {
        const matchingCriminals = appStateCriminals.filter(currentConvict => {
            return currentConvict.conviction === event.detail.crimeThatWasChosen
        })
        render(matchingCriminals)
    }
})

const contentElement = document.querySelector('.criminalsContainer')
const render = (criminalsToDisplay) => {
    debugger
    contentElement.innerHtML = `
    <h3>Glassdale Criminals</h3>
    <section class="criminalList">
    ${
        criminalsToDisplay.map(convictObject => criminal(convictObject)).join("")
    }
    </section>
    `
}



export const criminalList = () => {
    getCriminals()
    .then(() => {
        const appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
}