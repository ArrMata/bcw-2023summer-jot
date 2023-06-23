import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js"
import { saveState } from "../utils/Store.js"

const _saveNotes = () => {
    saveState('notes', AppState.notes)
}

class NoteService {
    setActiveNote(noteId) {
        AppState.activeNote = AppState.notes.find(note => note.id == noteId)
    }

    createNote(noteData) {
        AppState.notes = [...AppState.notes, new Note(noteData)]
        _saveNotes()
    }

    saveActiveNote(newContent) {
        AppState.activeNote.content = newContent
        AppState.activeNote.updatedAt = new Date()
        _saveNotes()
        AppState.emit('activeNote')
    }

    deleteNote() {
        let noteToRemove = AppState.activeNote

        AppState.activeNote = null
        AppState.notes = AppState.notes.filter(note => note.id != noteToRemove.id)
        _saveNotes()
    }
}

export const noteService = new NoteService()