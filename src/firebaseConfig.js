import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCkyuEyiNo8dhPpnDO_j-H_CKO39_vZxpo",
    authDomain: "react-firebase-chat-99450.firebaseapp.com",
    projectId: "react-firebase-chat-99450",
    storageBucket: "react-firebase-chat-99450.appspot.com",
    messagingSenderId: "754395187028",
    appId: "1:754395187028:web:9cf6c98bf46f4710f2eac1"
  };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};
export default firebaseApp;