import { generateId } from "../utils/GenerateId.js";

export class Note {
    constructor(data) {
        this.id = generateId()
        this.title = data.title
        this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date()
        this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : new Date()
        this.content = data.content ? data.content : 'Jot something down... ✒'
        this.color = data.color
    }

    get activeTemplate() {
        return `
        <section class="row note-container">
            <div class="col-3 note-info py-5">
                <div class='note-header'>
                    <div class='color-indicator' style="background: ${this.color}"></div>
                    <h2>${this.title}</h2>
                </div>
                <p>Created at: ${this.createdAt.toLocaleString()}</p>
                <p>Updated at: ${this.updatedAt.toLocaleString()}</p>
                <p>${this.contentMeasurements}</p>
            </div>

            <div class="col-8 note-writing">
                <textarea onblur="app.NoteController.saveActiveNote()" id='note-content'>${this.content}</textarea>
            </div>

            <div class="col-1 py-5">
                <button class='delete-button' onclick="app.NoteController.deleteNote()"><i class="mdi mdi-delete"></i></button>
            </div>
        </section>
        `
    }

    get listTemplate() {
        return `
        <li class='rounded selectable' onclick="app.NoteController.setActiveNote('${this.id}')">
            <div class='list-container'>
                <div class='color-indicator' style="background: ${this.color}"></div> 
                <h4>${this.title}</h4>
            </div>
        </li>
        `
    }

    get contentMeasurements() {
        const wordCount = this.content.split(' ').length
        const charCount = this.content.length
        return `${wordCount} Words, ${charCount} Characters.`
    }


}