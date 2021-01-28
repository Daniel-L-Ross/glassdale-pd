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

export const ShowNoteButton = () => {
    contentTarget.innerHTML = "<button id='showNotes'>Show Notes</button>"
}