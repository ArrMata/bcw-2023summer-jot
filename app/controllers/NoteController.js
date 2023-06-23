import { AppState } from "../AppState.js";
import { noteService } from "../services/NoteService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

const _drawNoteList = () => {
    let listTemplate = ``
    AppState.notes.forEach(note => {
        listTemplate += note.listTemplate
    })
    setHTML('offcanvasNoteCount', `Notes: ${AppState.notes.length}`)
    setHTML('note-list', listTemplate)
}

const _drawActiveNote = () => {
    if (!AppState.activeNote) {
        setHTML('writing-area', `
        <div class="img-container">
          <img class="main-img" src="/assets/img/photo-1558009250-d3d2229fdf28-removebg-preview-removebg-preview.png"
            alt="">
        </div>
        <h3 class="text-center">Select a note!</h3>
        `)
        return
    }
    setHTML('writing-area', AppState.activeNote.activeTemplate)
}

export class NoteController {
    constructor() {
        console.log('Note controller loaded');
        _drawNoteList()
        _drawActiveNote()

        AppState.on('notes', _drawNoteList)
        AppState.on('activeNote', _drawActiveNote)
    }

    setActiveNote(noteId) {
        noteService.setActiveNote(noteId)
        _drawActiveNote()
    }

    createNote(event) {
        event.preventDefault()
        const form = event.target
        const formData = getFormData(form)
        form.reset()
        noteService.createNote(formData)
    }

    saveActiveNote() {
        const newContent = document.getElementById('note-content').value
        if (newContent != AppState.activeNote.content) {
            noteService.saveActiveNote(newContent)
            Pop.success('Note has been saved!')
        }
    }

    async deleteNote() {
        const wantsToDelete = await Pop.confirm('Are you sure you want to delete this note?')
        if (wantsToDelete) {
            noteService.deleteNote()
            Pop.error('Note Deleted 👋')
        }
    }
}