import firebase from 'firebase/app'
import 'firebase/firestore';
const firebaseApp= {
    apiKey: "AIzaSyDgChjXY6F7wyQCYsou94aruaCMNxGTA9g",
    authDomain: "todoist-tutorial-4e032.firebaseapp.com",
    projectId: "todoist-tutorial-4e032",
    storageBucket: "todoist-tutorial-4e032.appspot.com",
    messagingSenderId: "993231047356",
    appId: "1:993231047356:web:42243201b57de5b12a1eb9"
};

const firebaseConfig = firebase.initializeApp(firebaseApp)
export{ firebaseConfig as firebase};