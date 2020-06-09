import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyCg54pVDO6O0-6tu6UjOKVeRyD3WtTF8fA",
    authDomain: "financas-fb35b.firebaseapp.com",
    databaseURL: "https://financas-fb35b.firebaseio.com",
    projectId: "financas-fb35b",
    storageBucket: "financas-fb35b.appspot.com",
    messagingSenderId: "725050266310",
    appId: "1:725050266310:web:2876cefe393f962fdb7dc7",
    measurementId: "G-N554DE762B"
};
if (!firebase.apps.length) {

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

}
export default firebase;