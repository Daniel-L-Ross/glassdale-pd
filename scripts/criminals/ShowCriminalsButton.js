const eventHub = document.querySelector(".container")

export const showCriminalsButton = () => {
    return `<button id="showCriminals" class="containerLeft__button">Show Criminals</button>`
}

eventHub.addEventListener("click" , clickEvent => {
    if (clickEvent.target.id === "showCriminals") {
        const criminalsButtonClicked = new CustomEvent("showCriminalsClicked")
        eventHub.dispatchEvent(criminalsButtonClicked)
    }
})