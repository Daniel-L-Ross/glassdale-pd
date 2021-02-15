import { witness } from './Witness.js'
import { getWitnesses, useWitnesses } from './WitnessProvider.js'
import { showCriminalsButton } from '../criminals/ShowCriminalsButton.js'
const eventHub = document.querySelector(".container")
const contentElement = document.querySelector('.containerLeft__content')

const render = (witnessArray) => {
    const convertedWitnesses = witnessArray.map(witnessObject => {
        const witnessHTML = witness(witnessObject)
        return witnessHTML
    }).join("")
    contentElement.innerHTML = `
    ${showCriminalsButton()}
    <h3>Witnesses</h3>
    <section class="containerLeft__list">
    ${convertedWitnesses}
    </section>
    `
}

const witnessList = () => {
    getWitnesses()
    .then(() => {
        const witnessData = useWitnesses()
        render(witnessData)
    })
}

eventHub.addEventListener("showWitnessesClicked", showWitnessEvent => {
    witnessList()
})