export const criminal = (convict, facilities) => {
    // The const "options" is an object that can passed as an argument to toLocaleDateString. I use it here to make all days/months 2 digits.
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
    
    return `
    <div class="containerLeft__card">
    <h4>${convict.name}</h4>
    <div class="criminal__details">
        <p>Convicted For: ${convict.conviction}</p>
        <p>Incarcerated between:
            ${new Date(convict.incarceration.start).toLocaleDateString('en-US', options)} and
            ${new Date(convict.incarceration.end).toLocaleDateString('en-US', options)}
        </p>
        <p>Age: ${convict.age}</p>
    <div class="criminal__facilities">
    <h2>Facilities</h2>
        <ul>
            ${facilities.map(f => `<li> ${f.facilityName}</li>`).join("")}
        </ul>
    </div>
    <button id="associates--${convict.id}">Associate Alibis</button>
    </div>
</div>
    `
}

const eventHub = document.querySelector('.container')

// even listener for Alibi button
eventHub.addEventListener("click", clickEvent => {
    const idCheck = clickEvent.target.id.split('--')
    if (idCheck[0] === "associates") {
        const criminalAlibiClicked = new CustomEvent("alibiClicked", {
            detail: {
                criminalSelected: idCheck[1]
            }
        })
        eventHub.dispatchEvent(criminalAlibiClicked)
    }
})