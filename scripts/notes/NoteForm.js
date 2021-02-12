import { saveNote } from './NoteProvider.js'
import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'

const eventHub = document.querySelector(".container")

const contentTarget = document.querySelector(".noteFormContainer")

const renderNote = (criminalArray) => {

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
        <select id="noteSuspect" class="criminalSelect formOption">
        <option value="0">Select A Criminal</option>
        ${criminalArray.map(criminal => `<option value="${criminal.id}">${criminal.name}</option>`).join("")}
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
    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()
            renderNote(criminalArray)
        })
}

eventHub.addEventListener("click", clickEvent => {
    clickEvent.preventDefault()
    if (clickEvent.target.id === "saveNote") {
        const date = document.getElementById("noteDate").value
        const author = document.getElementById("noteAuthor").value
        const criminalId = parseInt(document.getElementById("noteSuspect").value)
        const text = document.getElementById("noteText").value
        const newNote = {
            date: date,
            author: author,
            criminalId: criminalId,
            text: text
        }
        if (date === "") {
            alert("Please fill in the DATE before saving a note.")
        } else if (author === ""){
            alert("Please fill in the Author Name before saving a note.")
        } else if (criminalId === 0){
            alert("Please select a criminal before saving a note.")
        } else if (text === ""){
            alert(`Please fill in the "Case Note Entry" section before saving a note.`)
        } else {
            saveNote(newNote)
        }
    }
})