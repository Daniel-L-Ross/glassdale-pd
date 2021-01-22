import { getCriminals, useCriminals } from './CriminalProvider.js'
import { criminal } from './Criminal.js'

export const criminalList = () => {
    getCriminals()
        .then(() => {
            const criminals = useCriminals()
            const contentElement = document.querySelector('.criminalsContainer')
            let criminalHTMLRep = "<h1>Test</h1>"
            for (const convict of criminals) {
                criminalHTMLRep += criminal(convict)
            }
            contentElement.innerHTML += criminalHTMLRep
        })
}