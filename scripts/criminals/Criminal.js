export const criminal = (convict) => {
    return `
        <div class="criminal__card">
            <div class="crimnal__name">${convict.name}</div>
            <div class="crimnal__age">${convict.age}</div>
            <div class="criminal__conviction">${convict.conviction}</div>
            <div class="criminal__term">${convict.incarceration.start}</div>
            <div class="criminal__term">${convict.incarceration.end}</div>
        </div>
    `
}