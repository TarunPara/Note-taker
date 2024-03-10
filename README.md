# Note Taker Application

## Overview
The Note Taker application is designed to help users write, save, and organize their notes efficiently. With a user-friendly interface, the application serves as an essential tool for small business owners or anyone who needs to keep track of their tasks and thoughts. This application leverages an Express.js backend to manage note data and interact with a JSON file for persistent storage.

## Installation

1. Clone the starter code repository provided in the challenge instructions.
2. Create your own repository and copy the starter code into it. (Do not fork the starter code repository!)
3. Navigate to the root directory of the project in your terminal and run `npm install` to install the necessary dependencies.

## Usage

To start the application, run the following command in your terminal:

node server.js


Once the server is running, you can access the application in your browser at `http://localhost:3001`.

## Application Functionality

- **Landing Page:** Upon opening the Note Taker, users are greeted with a landing page that contains a link to the notes page.
- **Notes Page:** The notes page displays existing notes in the left-hand column and provides empty fields on the right-hand side for entering a new note's title and text.
- **Saving Notes:** Users can save their notes by entering a title and text, then clicking the "Save Note" button. Saved notes appear in the left-hand column.
- **Viewing Notes:** Clicking on an existing note displays its content, allowing users to read or edit the note.
- **Adding New Notes:** The "New Note" button enables users to create new notes with fresh content.

## Backend Details

- **Data Storage:** Notes are stored in a `db.json` file on the server, providing persistent storage.
- **API Endpoints:**
  - `GET /api/notes` reads the `db.json` file and returns all saved notes as JSON.
  - `POST /api/notes` receives a new note to save, assigns it a unique ID, and appends it to the `db.json` file.

## Deployment

The application is intended to be deployed on Heroku. However, due to some unforeseen issues with the Heroku deployment, this feature is currently under review. We have reached out to Heroku support for assistance and are working to resolve the deployment challenges. Updates on deployment status will be provided as soon as they are available.

## Support

For any issues or questions regarding the application, please open an issue in the repository or reach out to the project maintainers.

Thank you for using the Note Taker application!
