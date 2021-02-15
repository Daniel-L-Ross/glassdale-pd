import { criminalList } from './criminals/CriminalList.js'
import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { OfficerSelect } from './officers/OfficerSelect.js'
import { NoteForm } from './notes/NoteForm.js'
import { ToggleNotesButton  } from './notes/ShowNotesButton.js'
import './notes/NoteList.js'
import './alibi/AlibiDisplay.js'
import './witnesses/WitnessList.js'
import './facility/DisplayFacilitiesButton.js'

NoteForm()
criminalList()
ConvictionSelect()
OfficerSelect()
ToggleNotesButton()
