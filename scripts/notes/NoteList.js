import { getNotes, useNotes } from "./NoteProvider.js"
import { NoteHTMLConverter } from "./Note.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector('.noteList')
const eventHub = document.querySelector('.container')

eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})

eventHub.addEventListener("hideNotesClicked", customEvent => {
    contentTarget.innerHTML = ""
})

export const NoteList = () => {
    getNotes()
    .then(getCriminals)
    .then(() => {
        const allNotes = useNotes()
        const criminals = useCriminals()
        render(allNotes, criminals)
    })
}

const render = (notesArray, criminalsArray) => {
    const convertedNotes = notesArray.map(noteObject => {
        const noteHTML = NoteHTMLConverter(noteObject, criminalsArray)
        return noteHTML
    })
    const combinedNoteHTML = convertedNotes.join("")
    contentTarget.innerHTML = `${combinedNoteHTML}`
}



// this event listener updates the notelist with the note that
// was just added, but only if the notes are already displayed
eventHub.addEventListener("noteStateChanged", event => {
    if (contentTarget.innerHTML !== "") {
        NoteList()
    }
}) 