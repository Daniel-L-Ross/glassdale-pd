// import { getCriminals, useCriminals } from './CriminalProvider.js'

const eventHub = document.querySelector('.container')

eventHub.addEventListener('alibiClicked', alibiClickEvent => {
    console.log('Alibi Click event heard', alibiClickEvent.detail.criminalSelected)
})