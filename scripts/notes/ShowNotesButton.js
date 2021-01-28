const contentTarget = document.querySelector(".noteListButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    clickEvent.preventDefault()
    if (clickEvent.target.id === "showNotes") {
        console.log("Show notes button clicked")
        const showButtonClicked = new CustomEvent("showNotesClicked")
        eventHub.dispatchEvent(showButtonClicked)
    }
})

eventHub.addEventListener("click", clickEvent => {
    clickEvent.preventDefault()
    if (clickEvent.target.id === "hideNotes") {
        console.log("Hide notes button clicked")
        const hideButtonClicked = new CustomEvent("hideNotesClicked")
        eventHub.dispatchEvent(hideButtonClicked)
    }
})

export const ToggleNotesButton = () => {
    contentTarget.innerHTML = "<button id='showNotes'>Show Notes</button><button id='hideNotes'>Hide Notes</button>"
}
