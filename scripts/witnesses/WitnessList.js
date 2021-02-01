import { witness } from './Witness.js'
import { getWitnesses, useWitnesses } from './WitnessProvider.js'

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector('.criminalsContainer')

const render = (witnessArray) => {
    const convertedWitnesses = witnessArray.map(witnessObject => {
        const witnessHTML = witness(witnessObject)
        return witnessHTML
    }).join("")
    contentElement.innerHTML = `
    ${convertedWitnesses}
    `
}

export const witnessList = () => {
    getWitnesses()
    .then(() => {
        const witnessData = useWitnesses()
        render(witnessData)
    })
}