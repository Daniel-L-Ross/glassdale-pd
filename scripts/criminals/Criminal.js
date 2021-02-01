export const criminal = (convict) => {
    // The const "options" is an object that can passed as an argument to toLocaleDateString. I use it here to make all days/months 2 digits.
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
    
    return `
        <div class="containerLeft__card">
            <div class="criminal__name">${convict.name}</div>
            <div class="crimnal__age">Age: ${convict.age}</div>
            <div class="criminal__conviction">Crime: ${convict.conviction}</div>
            <div class="criminal__term">Term start: ${new Date(convict.incarceration.start).toLocaleDateString('en-US', options)}</div>
            <div class="criminal__term">Term end: ${new Date(convict.incarceration.end).toLocaleDateString('en-US', options)}</div>
            <button id="associates--${convict.id}">Associate Alibis</button>
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