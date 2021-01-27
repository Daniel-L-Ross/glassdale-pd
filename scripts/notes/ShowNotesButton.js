const contentTarget = document.querySelector(".noteListButton")
const eventHub = document.querySelector(".container")

export const ShowNoteButton = () => {
    contentTarget.innerHTML = "<button id='showNotes'>Show Notes</button>"
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNotes") {
        console.log("Show notes button clicked")
        const showButtonClicked = new CustomEvent("showNotesClicked")
        eventHub.dispatchEvent(showButtonClicked)
    }
})
