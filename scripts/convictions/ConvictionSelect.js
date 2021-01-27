import { useConvictions, getConvictions } from "./ConvictionProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

eventHub.addEventListener("change", event => {
    if (event.target.id === "crimeSelect") { console.log("you selected a crime:", event.target.value)
        const crimeSelected = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
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
    ${convictionsCollection.map(convictionObject => `<option value="${convictionObject.name}">${convictionObject.name}</option>`).join("")}
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
