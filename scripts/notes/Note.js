export const NoteHTMLConverter = (noteObject, criminalsArray) => {
    const relatedCriminal = criminalsArray.find(criminal => criminal.id === noteObject.criminalId)
    return `
        <section class="note">
            <div class="note__text">Case Note: ${ noteObject.text }</div>
            <div class="note__suspect">Note about: ${ relatedCriminal.name }</div>
            <div class="note__author">Author: ${ noteObject.author }</div>
            <div class="note__timestamp">Timestamp: ${ noteObject.date.toLocaleString('en-US')  }</div>
            <button id="deleteNote--${noteObject.id}">Delete</button>
        </section>`
}