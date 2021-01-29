import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'

const eventHub = document.querySelector('.container')


const criminalKnownAssociates = (criminalId) => {
    let criminalArray = useCriminals()

    const chosenCriminal = criminalArray.find(criminalObject => {
        console.log(criminalObject)
        return criminalObject.id === criminalId
    })

    debugger
    return chosenCriminal
}

eventHub.addEventListener('alibiClicked', alibiClickEvent => {
    const criminalId = parseInt(alibiClickEvent.detail.criminalSelected)

    const getCorrectCriminal = criminalKnownAssociates(criminalId)
    console.log('getCorrectCriminal: ', getCorrectCriminal);
})