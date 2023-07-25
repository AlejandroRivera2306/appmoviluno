// import firebase from 'firebase/app';
// import firebase from 'firebase';
// import 'firebase/firestore';



// const firebaseConfig = {
//     apiKey: "AIzaSyDlpB4101_pFArdY6hNPaRmqbCyppvvsJc",
//     authDomain: "alarma-f0cb6.firebaseapp.com",
//     projectId: "alarma-f0cb6",
//     storageBucket: "alarma-f0cb6.appspot.com",
//     messagingSenderId: "802058121072",
//     appId: "1:802058121072:web:e7cffad86337496ad8e9b5"
//   };
  
//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
// // firebase.initializeApp(firebaseConfig);

//   const db = firebase.firestore()

//   export default {
//     firebase,
//     app, 
//     db
//   }


import firebase from 'firebase/app';
import  Constants  from 'expo-constants';
import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: "AIzaSyDlpB4101_pFArdY6hNPaRmqbCyppvvsJc",
//   authDomain: "alarma-f0cb6.firebaseapp.com",
//   projectId: "alarma-f0cb6",
//   storageBucket: "alarma-f0cb6.appspot.com",
//   messagingSenderId: "802058121072",
//   appId: "1:802058121072:web:e7cffad86337496ad8e9b5"
// };


// const firebaseConfig = {
//     apiKey: Constants.manifest.extra.apiKey,
//     authDomain: Constants.manifest.extra.authDomain,
//     projectId: Constants.manifest.extra.projectId,
//     storageBucket: Constants.manifest.extra.storageBucket,
//     messagingSenderId: Constants.manifest.extra.messagingSenderId,
//     appId: Constants.manifest.extra.appId
//   };

// // Initialize Firebase
// initializeApp(firebaseConfig);

// export const basealarma = getFirestore();
