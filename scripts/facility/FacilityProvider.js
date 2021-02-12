let facilities = []

export const useFacilites = () =>facilities.slice()

export const getFacilities = () => {
    return fetch("https://criminals.glassdale.us/facilities")
    .then(response => response.json())
    .then(apiData => {
        facilities = apiData
    })
}