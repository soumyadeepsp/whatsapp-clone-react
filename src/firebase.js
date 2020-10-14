import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDk4VYCGUuZ0anjYtHmGo-7Ui8Ow99UZsE",
    authDomain: "whatsapp-clone-7d66d.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-7d66d.firebaseio.com",
    projectId: "whatsapp-clone-7d66d",
    storageBucket: "whatsapp-clone-7d66d.appspot.com",
    messagingSenderId: "172561050240",
    appId: "1:172561050240:web:7a2093f457f36f2dbed465"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};

export default db;