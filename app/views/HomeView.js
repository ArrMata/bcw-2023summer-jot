export const HomeView = `
    <div class="offcanvas offcanvas-start offcanvas-notes" tabindex="-1" id="offcanvasExample"
      aria-labelledby="offcanvasNoteCount">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNoteCount">To do Populate header with note count</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul id='note-list'>
        </ul>
        <form onsubmit="app.NoteController.createNote(event)" class='d-flex align-items-end'>
            <input type='text' name='title' required minlength='3' maxlength='15' placeholder='Enter Note Title'>
            <input type='color' name='color' value='#dadada'>
            <button type="submit"><i class='mdi mdi-plus'></i></button>
        </form>
      </div>
    </div>

    <section class="row text-white">
    <div id="writing-area" class="active-area col-10 m-auto">
    </div>
    </section>
`
