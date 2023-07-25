// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// export const firebaseConfig = {
//   apiKey: "AIzaSyAI3-9nzwop8bOkI5W_PZO1rAungw2agms",
//   authDomain: "alarma-f0cb6.firebaseapp.com",
//   projectId: "alarma-f0cb6",
//   storageBucket: "alarma-f0cb6.appspot.com",
//   messagingSenderId: "802058121072",
//   appId: "1:802058121072:web:963f9588e890cec9d8e9b5"
// };


// import Constants from 'expo-constants';
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

// export const firebaseConfig = {
//   // apiKey: "AIzaSyAI3-9nzwop8bOkI5W_PZO1rAungw2agms"
//   apiKey: "yN3bBHfbNdopVkFsSpj1nRNhbgAGyHBZ4E9bZzeg",
//   authDomain: "alarma-f0cb6.firebaseapp.com",
//   projectId: "alarma-f0cb6",
//   storageBucket: "alarma-f0cb6.appspot.com",
//   messagingSenderId: "802058121072",
//   appId: "1:802058121072:web:963f9588e890cec9d8e9b5"
// };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const basealarma = getFirestore(app);

// export default app;

// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

// export const firebaseConfig = {
//   apiKey: "AIzaSyAI3-9nzwop8bOkI5W_PZO1rAungw2agms",
//     authDomain: "alarma-f0cb6.firebaseapp.com",
//     projectId: "alarma-f0cb6",
//     storageBucket: "alarma-f0cb6.appspot.com",
//     messagingSenderId: "802058121072",
//     appId: "1:802058121072:web:963f9588e890cec9d8e9b5"
// };

// // Inicializa Firebase
// const app = initializeApp(firebaseConfig);
// export const basealarma = getFirestore(app);

// export default app;



// Importa los módulos necesarios de Firebase
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Define la configuración para Firebase Realtime Database con las credenciales proporcionadas
export const firebaseConfig = {
  apiKey: "AIzaSyAI3-9nzwop8bOkI5W_PZO1rAungw2agms",
  authDomain: "alarma-f0cb6.firebaseapp.com",
  databaseURL: "https://alarma-f0cb6.firebaseio.com",
  projectId: "alarma-f0cb6",
  storageBucket: "alarma-f0cb6.appspot.com",
  messagingSenderId: "802058121072",
  appId: "1:802058121072:web:963f9588e890cec9d8e9b5"
};

// Inicializa Firebase con la nueva configuración
const app = initializeApp(firebaseConfig);

// Obtiene la referencia a la base de datos de Firebase Realtime Database
export const basealarma = getDatabase(app);

// Exporta la instancia de Firebase (opcional, si la necesitas en otros lugares)
export default app;