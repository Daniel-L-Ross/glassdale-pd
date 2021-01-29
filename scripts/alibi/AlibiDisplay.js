import { getCriminals, useCriminals } from './CriminalProvider.js'

const eventHub = document.querySelector('.container')

const criminalKnownAssociates = () => {

}

eventHub.addEventListener('alibiClicked', alibiClickEvent => {
    console.log('Alibi Click event heard', alibiClickEvent.detail.criminalSelected)
})