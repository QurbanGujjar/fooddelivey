// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBDbYjGBMLaWeNnf99pW0J51imDHNkAY18",
    authDomain: "food-order-app-8b532.firebaseapp.com",
    projectId: "food-order-app-8b532",
    storageBucket: "food-order-app-8b532.appspot.com",
    messagingSenderId: "357657693368",
    appId: "1:357657693368:web:94dfe1e6a75315f16c784d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };