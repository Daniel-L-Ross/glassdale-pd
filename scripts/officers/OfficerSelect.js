import { getOfficers, useOfficers } from './OfficerProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__officer")

export const OfficerSelect = () => {
    getOfficers()
    .then(() => {
        const officers = useOfficers()
        render(officers)
    })
}

const render = (officerArray) => {
    contentTarget.innerHTML = `
    <select class="dropdown" id ="officerSelect">
    <option value="0">Please select an officer...</option>
    ${officerArray.map(officerObject => `<option value="${officerObject.name}">${officerObject.name}</option>`).join("")}
    </select>
    `
}

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        console.log("You selected officer:", changeEvent.target.value)
    }
})