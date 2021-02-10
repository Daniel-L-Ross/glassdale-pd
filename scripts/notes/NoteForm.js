import { saveNote } from './NoteProvider.js'
import { useCriminals } from '../criminals/CriminalProvider.js'

const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".noteFormContainer")

const renderNote = () => {
    const criminalArray = useCriminals()
debugger
    contentTarget.innerHTML = `
    <h3>Case Notes</h3>
    <form action="">
    <fieldset>
        <label for="noteDate">Date of Entry</label>
        <input type="date" name="noteDate" id="noteDate" class="formOption">
    </fieldset>
    <fieldset>
        <label for="noteAuthor">Author Name</label>
        <input type="text" name="noteAuthor" id="noteAuthor" class="formOption">
    </fieldset>
    <fieldset>
        <label for="noteSuspect">Suspect Name</label>
        <select id="noteForm--criminal" class="criminalSelect formOption">
        ${criminalArray.map(criminal => `<option value="${ criminal.id }">${ criminal.name }</option>`).join("")}
    </select>
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
            author: document.getElementById("noteAuthor").value,
            criminalId: document.getElementById("noteSuspect").value,
            text: document.getElementById("noteText").value
        }
        saveNote(newNote)
    }
})