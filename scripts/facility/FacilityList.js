import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'
import { getFacilities, useFacilites } from './FacilityProvider.js'
import { getCriminalFacilities, useCriminalFacilities } from './CriminalFacilityProvider.js'

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector('.containerLeft__content')


eventHub.addEventListener("facilitiesButtonClicked", facilityEvent => {
        facilityList()
})


const render = (allCriminals, facilitiesArray, allRelationships) => {
// first iterate over all facilities with .map
const convertedFacilities = facilitiesArray.map(facilityObject => {
    //second filter all facility relationhips by this facility
    const relatedCriminals = allRelationships.filter(currentRelationship => currentRelationship.facilityId === facilityObject.id) 

    //third, take the array of relationships and map, then filter/find related criminals
    const criminals = relatedCriminals.map(currentRelationship => {
        const matchingCriminalObject = allCriminals.find(criminal => criminal.id === currentRelationship.criminalId)
        return matchingCriminalObject
    })

    const criminalHTML = `<div class="containerLeft__card" id="facilityId--${facilityObject.id}">
    <div class="facility__name">${facilityObject.facilityName}</div>
    <h2>Criminals</h2>
    <ul>
    ${criminals.map(c => `<li>${c.name}</li>`).join("")}

    </ul>
    </div>`
    return criminalHTML
})
debugger
const combinedFacilityHTML = convertedFacilities.join("")


contentElement.innerHTML = `
<h3>Detention Facilities</h3>
    <section class="containerLeft__list">
${combinedFacilityHTML}
<section>
`
}

const facilityList = () => {
    getFacilities()
    .then(getCriminalFacilities)
    .then(getCriminals)
    .then(() => {
        const appStateCriminals = useCriminals()
        const appStateFacilities = useFacilites()
        const appStateCriminalFacilities = useCriminalFacilities()
            render(appStateCriminals, appStateFacilities, appStateCriminalFacilities)
    })
    
    console.log("facility list ran")
}