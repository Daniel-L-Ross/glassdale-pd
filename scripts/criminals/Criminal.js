export const criminal = (convict) => {
    return `
        <div class="criminal__card">
            <div class="crimnal__name">${convict.name}</div>
            <div class="crimnal__age">${convict.age}</div>
            <div class="criminal__conviction">${convict.conviction}</div>
            <div class="criminal__term">${new Date(convict.incarceration.start).toLocaleDateString('en-US')}</div>
            <div class="criminal__term">${new Date(convict.incarceration.end).toLocaleDateString('en-US')}</div>
        </div>
    `
}