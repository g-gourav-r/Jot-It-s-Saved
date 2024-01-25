# Jot, it's saved! - Developer Documentation

## Overview

**Jot, it's saved!** is a browser extension designed to provide users with a quick and efficient way to save and manage notes directly from their browser. This documentation serves as a guide for developers interested in understanding the codebase, contributing to the project, or extending its functionality.

## Architecture

The extension follows a straightforward architecture:

- **Popup Interface:** The main interface allows users to input and save notes, download notes, and view existing notes.

- **LocalStorage:** Notes are stored locally using `localStorage` as a simple data persistence mechanism.

- **Toast Messages:** Visual feedback is provided through toast messages for actions such as note saving or deletion.

## Technologies Used

- **HTML/CSS:** The popup interface is built using HTML and styled with CSS.

- **JavaScript (ES6+):** The functionality of the extension, note handling, and DOM manipulation are implemented in JavaScript.

- **Bootstrap (v5.3.2):** Utilized for styling components in the popup interface.

- **Font Awesome (v6.0.0):** Icons from Font Awesome are used for visual elements.

## Project Structure

- manifest.json # Extension metadata and settings
- popup.html # Main popup interface
- popup.js # JavaScript logic for the popup
- style.css # Styling for the popup
- LICENSE # License information


## Setup for Development

1. Clone the repository: `git clone [repository_url]`
2. Open your browser and navigate to `chrome://extensions/` or `about:addons`.
3. Enable "Developer mode."
4. Click "Load unpacked" and select the extension directory.


## Issues

For any questions, issues, or support, please create an issue.
