// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAII-xQqGPxrXAT47gg8W0Emzjnj9wpdIc",
    authDomain: "whatsapp-clone-f4820.firebaseapp.com",
    projectId: "whatsapp-clone-f4820",
    storageBucket: "whatsapp-clone-f4820.appspot.com",
    messagingSenderId: "932995639500",
    appId: "1:932995639500:web:9f723876a5b1943a273a69",
    measurementId: "G-VTV5GF0QNV"
  };

  const firebaseApp = firebase.initalizeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;