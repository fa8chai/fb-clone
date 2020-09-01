import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCcyJ9mUNXrYCZn3TfHBwfNM8FB1HeVxPo",
    authDomain: "facebook-clone-76a67.firebaseapp.com",
    databaseURL: "https://facebook-clone-76a67.firebaseio.com",
    projectId: "facebook-clone-76a67",
    storageBucket: "facebook-clone-76a67.appspot.com",
    messagingSenderId: "612442811718",
    appId: "1:612442811718:web:42072503efd584219b4947",
    measurementId: "G-TCBJ7707JW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
