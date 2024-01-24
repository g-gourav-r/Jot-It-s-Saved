document.addEventListener('DOMContentLoaded', function () {
    var noteInput = document.getElementById('noteInput');
    var addNoteButton = document.getElementById('addNoteButton');
    var viewNotesButton = document.getElementById('viewNotesButton');
  
    addNoteButton.addEventListener('click', function () {
      var noteText = noteInput.value;
      if (noteText.trim() !== '') {
        chrome.storage.local.get({ notes: [] }, function (result) {
          var notes = result.notes;
          notes.push(noteText);
          chrome.storage.local.set({ notes: notes }, function () {
            noteInput.value = '';
            alert('Note added successfully!');
          });
        });
      } else {
        alert('Please enter a note before adding.');
      }
    });
  
    viewNotesButton.addEventListener('click', function () {
      chrome.storage.local.get({ notes: [] }, function (result) {
        var notes = result.notes;
        if (notes.length > 0) {
          alert('Your Notes:\n\n' + notes.join('\n\n'));
        } else {
          alert('No notes to display.');
        }
      });
    });
  });
  