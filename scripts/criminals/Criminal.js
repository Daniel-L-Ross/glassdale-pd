export const criminal = (convict) => {
    // The const "options" is an object that can passed as an argument to toLocaleDateString. I use it here to make all days/months 2 digits.
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
    
    return `
        <div class="criminal__card">
            <div class="criminal__name">${convict.name}</div>
            <div class="crimnal__age">Age: ${convict.age}</div>
            <div class="criminal__conviction">Crime: ${convict.conviction}</div>
            <div class="criminal__term">Term start: ${new Date(convict.incarceration.start).toLocaleDateString('en-US', options)}</div>
            <div class="criminal__term">Term end: ${new Date(convict.incarceration.end).toLocaleDateString('en-US', options)}</div>
        </div>
    `
}