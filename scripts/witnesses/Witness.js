export const witness = (witnessObj) => {

    return `
        <div class="containerLeft__card" id="witnessID--${witnessObj.id}">
            <h4>${witnessObj.name}</h4>
            <div class="witness__statement">${witnessObj.statements}</div>
        </div>
        `
}