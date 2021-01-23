export const criminal = (convict) => {
    return `
        <div class="criminal__card">
            <div class="criminal__name">${convict.name}</div>
            <div class="crimnal__age">Age: ${convict.age}</div>
            <div class="criminal__conviction">Crime: ${convict.conviction}</div>
            <div class="criminal__term">Term start: ${new Date(convict.incarceration.start).toLocaleDateString('en-US')}</div>
            <div class="criminal__term">Term end: ${new Date(convict.incarceration.end).toLocaleDateString('en-US')}</div>
        </div>
    `
}