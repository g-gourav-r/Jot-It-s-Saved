const notes = JSON.parse(localStorage.getItem('notes')) || [];

document.addEventListener('DOMContentLoaded', function() {
    // Call the 'viewNotes' function to display existing notes
    viewNotes();
});

document.getElementById('addNoteButton').addEventListener('click', function() {
    const noteContent = document.getElementById('noteTextarea').value;
    addNoteAndAlert(noteContent);
    document.getElementById('noteTextarea').value = "";
});

function addNoteAndAlert(noteContent) {
    if (noteContent.trim() !== '') {
        notes.push(noteContent);
        localStorage.setItem('notes', JSON.stringify(notes));
        showToast('Note saved');
        viewNotes();
    } else {
        showToast('Please enter a non-empty note.');
    }
}



document.getElementById('downloadNotesButton').addEventListener('click', function() {
    downloadNotes();
});

function downloadNotes() {
    if (notes.length === 0) {
        alert('Cannot download. Notes storage is empty.');
        return;
    }

    const notesData = JSON.stringify(notes);
    const blob = new Blob([notesData], {
        type: 'application/json'
    });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'notes.json';

    // Append the 'a' element to the DOM and trigger a click to start the download
    document.body.appendChild(a);
    a.click();

    // Remove the 'a' element from the DOM
    document.body.removeChild(a);
}


function viewNotes() {
    const messagesBox = document.getElementById('messagesBox');
    messagesBox.innerHTML = '';

    if (notes.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.classList.add('message');
        emptyMessage.textContent = 'Woah !! your notes are clean.';
        messagesBox.appendChild(emptyMessage);
    } else {
        notes.forEach(function(note) {
            const valuesArray = note.split(',');
            const div = document.createElement('div');
            div.classList.add('message');

            const noteContent = document.createElement('span');
            noteContent.textContent = valuesArray.join(', ');
            div.appendChild(noteContent);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
            deleteButton.classList.add('delete-button');
            deleteButton.addEventListener('click', function() {
                deleteNoteAndAlert(note);
            });

            // Appending delete button to the right
            div.appendChild(deleteButton);

            messagesBox.appendChild(div);
        });

    }
}


function deleteNoteAndAlert(note) { // Fix here: change parameter to 'note'
    const noteIndex = notes.indexOf(note);
    if (noteIndex !== -1) {
        notes.splice(noteIndex, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        showToast('Note deleted');
        viewNotes();
    }
}

function showToast(msg) {
    var toast = document.getElementById('toastMessage');
    toast.innerHTML = '<p>' + msg + '</p>';
    toast.classList.add('show');
    setTimeout(function() {
        toast.classList.remove('show');
    }, 3000);
}