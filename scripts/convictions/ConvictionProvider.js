let convictions = []

export const useConvictions = () => convictions.slice()

export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(
            parsedConvictions => {
                // debugger
                console.table(parsedConvictions)
                convictions = parsedConvictions
            }
        )
}