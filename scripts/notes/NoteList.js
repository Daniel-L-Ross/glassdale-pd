import { getNotes, useNotes } from "./NoteProvider.js"
import { NoteHTMLConverter } from "./Note.js"

const contentTarget = document.querySelector('.noteList')
const eventHub = document.querySelector('.container')

eventHub.addEventListener("showNotesClicked", customEvent => {
    customEvent.preventDefault()
    NoteList()
})

const render = (notesArray) => {
    const convertedNotes = notesArray.map(noteObject => {
        const noteHTML = NoteHTMLConverter(noteObject)
        return noteHTML
    })
    const combinedNoteHTML = convertedNotes.join("")
    // debugger
    contentTarget.innerHTML = combinedNoteHTML
}

export const NoteList = () => {
    // debugger
    getNotes()
    .then(() => {
        const allNotes = useNotes()
        console.log(allNotes)
        render(allNotes)
    })
}