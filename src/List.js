class List {
  constructor() {
    this._allNotes = [];
  }

  createNote = text => {
    let note = new Note(text);
    this._allNotes.push(note)
    console.log('inside createNote')
    console.log(text)
    return note
  }

  showNotes = () => this._allNotes

  newestNote = () => this._allNotes[this._allNotes.length - 1]
}
