import { useConvictions, getConvictions } from "./ConvictionProvider.js"

const contentTarget = document.querySelector(".filters__crime")

export const ConvictionSelect = () => {
    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)
        })
}

const render = convictionsCollection => {
    const convictionItems = {

    } 
}