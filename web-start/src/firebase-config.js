/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyCc3-2zobet3r5GAE87TDqA5lZb_UnraGA",
  authDomain: "fir-tutorial-405f9.firebaseapp.com",
  projectId: "fir-tutorial-405f9",
  storageBucket: "fir-tutorial-405f9.appspot.com",
  messagingSenderId: "179709207047",
  appId: "1:179709207047:web:16a6235c00693ffbb1c0a2"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}