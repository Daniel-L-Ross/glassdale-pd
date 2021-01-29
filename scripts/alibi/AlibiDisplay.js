import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'

const eventHub = document.querySelector('.container')


const criminalKnownAssociates = (criminalId) => {
    let knownAssociates = []
    getCriminals()
    .then(() => {
        const criminalArray = useCriminals()


    })

    return knownAssociates
}

eventHub.addEventListener('alibiClicked', alibiClickEvent => {
    const criminalId = alibiClickEvent.detail.criminalSelected

    const newVariableName = criminalKnownAssociates(criminalId)
    console.log(newVariableName)
})