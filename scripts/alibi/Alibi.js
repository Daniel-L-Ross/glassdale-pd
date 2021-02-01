export const alibi = (associateObject) => {

    let associatesHTML = ''
    for (const associate of associateObject.known_associates) {
        associatesHTML +=`
        <div class="associateCard">
            <div class="associateName">Associate name: ${associate.name}</div>
            <div class="associateAlibi">Alibi: ${associate.alibi}</div>
        </div>
        `
    }

    return `
            <div class="alibiDisplay__title">Suspect Under Investigation:<br> ${associateObject.name}</div>
            <div class="suspectName">
                <div class="suspectAssociates__title">Known Associates:</div>
                ${associatesHTML}
            </div>`

}