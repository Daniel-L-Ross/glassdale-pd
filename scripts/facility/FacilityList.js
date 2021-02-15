import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'
import { getFacilities, useFacilites } from './FacilityProvider.js'
import { getCriminalFacilities, useCriminalFacilities } from './CriminalFacilityProvider.js'

const eventHub = document.querySelector(".container")


eventHub.addEventListener("facilitiesButtonClicked", facilityEvent => {
        facilityList()
})


const render = (criminalsArray, facilitiesArray, crimFacArray) => {
    console.log(criminalsArray[0], facilitiesArray[0], crimFacArray[0])
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