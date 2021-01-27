import { useConvictions, getConvictions } from "./ConvictionProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "crimeSelect") { 
        console.log("you selected a crime:", event.target.value)
        const crimeSelected = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: changeEvent.target.value
            }
        })

        eventHub.dispatchEvent(crimeSelected)
    }
})

const render = (convictionsCollection) => {
    // debugger
    contentTarget.innerHTML = `
    <select class="dropdown" id ="crimeSelect">
    <option value="0">Please select a crime...</option>
    ${convictionsCollection.map(convictionObject => `<option value="${convictionObject.id}">${convictionObject.name}</option>`).join("")}
    </select>
    `
}

export const ConvictionSelect = () => {
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)
        })
}
