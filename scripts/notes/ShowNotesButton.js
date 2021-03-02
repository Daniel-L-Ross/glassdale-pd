const contentTarget = document.querySelector(".noteListButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNotes") {
        const showButtonClicked = new CustomEvent("showNotesClicked")
        eventHub.dispatchEvent(showButtonClicked)
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "hideNotes") {
        const hideButtonClicked = new CustomEvent("hideNotesClicked")
        eventHub.dispatchEvent(hideButtonClicked)
    }
})

export const ToggleNotesButton = () => {
    contentTarget.innerHTML = `<button id='showNotes' class="containerRight__button">Show Notes</button><button id='hideNotes' class="containerRight__button">Hide Notes</button>`
}
