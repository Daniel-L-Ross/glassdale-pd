const contentTarget = document.querySelector(".buttonBar")
const eventHub = document.querySelector(".container")

const showFacilitiesButton = () => {
    return `<button id="showFacilities" class="containerLeft__button">Show Facilities</button>`
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showFacilities"){
        const showFacilitiesClicked = new CustomEvent("facilitiesButtonClicked")
        eventHub.dispatchEvent(showFacilitiesClicked)
    }
})

contentTarget.innerHTML += showFacilitiesButton()