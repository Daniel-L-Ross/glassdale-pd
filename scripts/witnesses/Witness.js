export const witness = (witnessObj) => {

    return `
        <div class="containerLeft__card" id="witnessID--${witnessObj.id}">
            <div class="witness__name">${witnessObj.name}</div>
            <div class="witness__statement">${witnessObj.statements}</div>
        </div>
        `
}