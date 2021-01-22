import { getCriminals, useCriminals } from './CriminalProvider.js'
import { criminal } from './Criminal.js'

export const criminalList = () => {
    getCriminals()
        .then(() => {
            const criminals = useCriminals()
            const contentElement = document.querySelector('.criminalsContainer')
            let criminalHTMLRep = ""
            for (const convict of criminals) {
                criminalHTMLRep += criminal(convict)
            }
            contentElement.innerHTML +=`
            <h3>Glassdale Criminals</h3>
            <section class="criminalList">
            ${criminalHTMLRep}
            </section>
            ` 
        })
}