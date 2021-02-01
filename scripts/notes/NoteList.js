import { getNotes, useNotes } from "./NoteProvider.js"
import { NoteHTMLConverter } from "./Note.js"

const contentTarget = document.querySelector('.noteList')
const eventHub = document.querySelector('.container')

eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})

eventHub.addEventListener("hideNotesClicked", customEvent => {
    contentTarget.innerHTML = ""
})

const render = (notesArray) => {
    const convertedNotes = notesArray.map(noteObject => {
        const noteHTML = NoteHTMLConverter(noteObject)
        return noteHTML
    })
    const combinedNoteHTML = convertedNotes.join("")
    contentTarget.innerHTML = `

    ${combinedNoteHTML}`
}


export const NoteList = () => {
    getNotes()
    .then(() => {
        const allNotes = useNotes()
        render(allNotes)
    })
}

// this event listener updates the notelist with the note that
// was just added, but only if the notes are already displayed
eventHub.addEventListener("noteStateChanged", event => {
    if (contentTarget.innerHTML !== "") {
        NoteList()
    }
}) 