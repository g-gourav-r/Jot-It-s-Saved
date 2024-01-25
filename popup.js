// popup.js

const notes = [];

document.getElementById('addNoteButton').addEventListener('click', function () {
    const noteContent = document.getElementById('noteTextarea').value;
    addNoteAndAlert(noteContent);
    document.getElementById('noteTextarea').value = ""
});

document.getElementById('viewNotesButton').addEventListener('click', function () {
    viewNotes();
});

function addNoteAndAlert(noteContent) {
    if (noteContent.trim() !== '') {
        notes.push(noteContent);
        showToast('Note saved');
        viewNotes();
    } else {
        showToast('Please enter a non-empty note.');
    }
}

function viewNotes() {
    const messagesBox = document.getElementById('messagesBox');

    // Clear existing content in the messages box
    messagesBox.innerHTML = '';

    if (notes.length === 0) {
        // Handle empty array
        const emptyMessage = document.createElement('div');
        emptyMessage.classList.add('message');
        emptyMessage.textContent = 'No notes available.';
        messagesBox.appendChild(emptyMessage);
    } else {
        // Loop through the array and create a new div for each set of comma-separated values
        notes.forEach(function (note) {
            // Split the current note into an array using ","
            const valuesArray = note.split(',');

            // Create a new div element
            const div = document.createElement('div');
            div.classList.add('message');

            // Set the content of the div to the values from the current note
            div.textContent = valuesArray.join(', '); // Join the values with ", " for better readability

            // Append the new div to the messages box
            messagesBox.appendChild(div);
        });
    }
}
function showToast(msg) {
    var toast = document.getElementById('toastMessage');
    toast.innerHTML = '<p>' + msg + '</p>';
    toast.classList.add('show');
    setTimeout(function(){
        toast.classList.remove('show');
    }, 3000);
}