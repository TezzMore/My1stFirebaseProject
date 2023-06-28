# My1stFirebaseProject
# Firebase Age Calculator

This project is a simple backend project named "ageCalculator" implemented with Firebase. It calculates and stores the present age based on the input date of birth.

## Requirements

- Node.js
- Firebase account and project

## Getting Started

1. Clone the repository:

   ```shell
   git clone https://github.com/TezzMore/My1stFirebaseProject.git
Install the dependencies:

shell
Copy code
npm install
Set up Firebase:

Create a new Firebase project on the Firebase Console.
Generate the Firebase Admin SDK service account key.
Save the service account key JSON file in the project directory.
Update the serviceAccount path:

Open index.js in the project's root directory.

Update the path to your service account key JSON file in the following line:

javascript
Copy code
const serviceAccount = require("/path/to/serviceAccountKey.json");
Deploy the Cloud Function:

shell
Copy code
firebase deploy --only functions
Usage:

Create a document in the "ageCalculator" collection with your name.
The document should have fields for "date", "month", and "year" of your birth.
The Cloud Function will automatically calculate your age and update the "results" document with fields for "days", "hours", "minutes", and "seconds" based on the current date.
License
This project is licensed under the MIT License.

css
Copy code

Feel free to customize the README file according to your needs, providing additional instructions or information about your project.
