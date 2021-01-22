import { getCriminals, useCriminals } from './CriminalProvider.js'
import { criminal } from './Criminal.js'

export const criminalList = () => {
    const contentElement = document.querySelector('.criminalsContainer')
    getCriminals()
    const criminals = useCriminals()
    let criminalHTMLRep = "<h1>Test</h1>"
    // console.log(typeof(criminals))
    debugger
    for (const convict of criminals) {
        criminalHTMLRep += criminal(convict)
    }
    console.log("this is running")
    contentElement.innerHTML += criminalHTMLRep
}