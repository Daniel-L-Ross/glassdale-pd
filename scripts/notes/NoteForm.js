import { saveNote } from './NoteProvider.js'

const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".noteFormContainer")

const renderNote = () => {
    contentTarget.innerHTML = `

    <form action="">
    <fieldset>
        <label for="noteDate">Date of Entry</label>
        <input type="date" name="noteDate" id="noteDate" class="formOption">
    </fieldset>
    <fieldset>
        <label for="noteSuspect">Suspect Name</label>
        <input type="text" name="noteSuspect" id="noteSuspect" class="formOption">
    </fieldset>
    <fieldset>
        <label for="noteText">Case Note Entry</label>
        <textarea type="textarea" name="noteText" id="noteText" class="formOption"></textarea>
    </fieldset>
    <button id="saveNote">Save Note</button>
    </form>
    `
}

export const NoteForm = () => {
    renderNote()
}

eventHub.addEventListener("click", clickEvent => {
    clickEvent.preventDefault()
    if (clickEvent.target.id === "saveNote") {
        const newNote = {
            date: document.getElementById("noteDate").value,
            suspect: document.getElementById("noteSuspect").value,
            text: document.getElementById("noteText").value
        }
        saveNote(newNote)
    }
})