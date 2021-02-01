const eventHub = document.querySelector(".container")

export const showWitnessesButton = () => {
    return `<button id="showWitnesses">Show Witnesses</button>`
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showWitnesses") {
        const witnessesButtonClicked = new CustomEvent("showWitnessesClicked")
        eventHub.dispatchEvent(witnessesButtonClicked)
    }
})