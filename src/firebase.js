import firebase from 'firebase'
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBXhrmhqTD1-2Gt0NLWnJ_AxQy5fKgr24Y",
    authDomain: "discord-clone-feb5b.firebaseapp.com",
    databaseURL: "https://discord-clone-feb5b.firebaseio.com",
    projectId: "discord-clone-feb5b",
    storageBucket: "discord-clone-feb5b.appspot.com",
    messagingSenderId: "79990113419",
    appId: "1:79990113419:web:dad42149672e7ebeed408e"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db