import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'
import { alibi } from './Alibi.js'

const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.alibiDisplay')

const criminalKnownAssociates = (criminalId) => {
    let criminalArray = useCriminals()

    const chosenCriminal = criminalArray.find(criminalObject => {
        return criminalObject.id === criminalId
    })
    return chosenCriminal
}

const render = (associatesArray) => {
    const alibiHTML = alibi(associatesArray)
    contentTarget.innerHTML = alibiHTML
}

eventHub.addEventListener('alibiClicked', alibiClickEvent => {
    const criminalId = parseInt(alibiClickEvent.detail.criminalSelected)

    const getCorrectCriminal = criminalKnownAssociates(criminalId)

    render(getCorrectCriminal)
})