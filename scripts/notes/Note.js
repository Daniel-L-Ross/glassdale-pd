export const NoteHTMLConverter = (noteObject, criminalsArray) => {
    const relatedCriminal = criminalsArray.find(criminal => criminal.id === parseInt(noteObject.criminalId))
    debugger
    return `
        <section class="note">
            <div class="note__text">Case Note: ${ noteObject.text }</div>
            <div class="note__suspect">Note about: ${ relatedCriminal.name }</div>
            <div class="note__author">Author: ${ noteObject.author }</div>
            <div class="note__timestamp">Timestamp: ${ new Date(noteObject.date).toLocaleString('en-US')  }</div>
        </section>`
}