# Jot! It's Saved

## Overview

The Note Keeper browser extension allows users to seamlessly save and manage notes directly within their browser. This documentation provides a comprehensive understanding of the extension's HTML and JavaScript code structure, explaining key functionalities and how the code is organized.

## HTML Structure (popup.html)
The HTML file (popup.html) defines the structure of the extension's popup interface. It includes the following components:

### Input Box and Buttons

- Textarea for Note Entry:


<textarea class="form-control" id="noteTextarea" rows="5" placeholder="Enter your note..."></textarea>

- Save and Download Buttons:


<button class="btn btn-sm text-center" id="addNoteButton">Save note</button>
<button class="btn btn-sm text-center" id="downloadNotesButton">Download note</button>

Display Area for Notes

- Messages Box:


<div class="container messages" id="messagesBox"></div>

### Toast Notification

- Toast Message Window:


<div class="toast" id="toastMessage"></div>

## JavaScript Logic (popup.js)

The JavaScript file (popup.js) provides the functionality to interact with the HTML components and manage user notes. Key functions are outlined below:

### Initialization and Display

- Initialization:

document.addEventListener('DOMContentLoaded', function() {
    viewNotes();
});

Initializes the extension by calling the viewNotes function to display existing notes.

- Adding Notes

document.getElementById('addNoteButton').addEventListener('click', function() {
    const noteContent = document.getElementById('noteTextarea').value;
    addNoteAndAlert(noteContent);
    document.getElementById('noteTextarea').value = "";
});
Captures user input, adds the note to local storage, and triggers a toast notification.

- Downloading Notes


document.getElementById('downloadNotesButton').addEventListener('click', function() {
    downloadNotes();
});
Initiates the download of notes in JSON format.

### Viewing and Deleting Notes

- Viewing Notes:


function viewNotes() { /* ... */ }
Dynamically renders notes in the messages box.

- Deleting Notes:

function deleteNoteAndAlert(note) { /* ... */ }
Deletes a selected note and triggers a toast notification.

- Toast Notification


function showToast(msg) { /* ... */ }
Displays a temporary notification message at the bottom of the popup.

## Conclusion
The Note Keeper extension provides a simple yet effective way for users to manage their notes directly within their browser. The HTML and JavaScript code work together seamlessly to deliver a user-friendly experience.