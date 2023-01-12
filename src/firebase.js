// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdT7Q2a0gj9_pF717kag9Igy_CSctbnK8",
  authDomain: "pk-petskingdom.firebaseapp.com",
  projectId: "pk-petskingdom",
  storageBucket: "pk-petskingdom.appspot.com",
  messagingSenderId: "1036861403540",
  appId: "1:1036861403540:web:c4b7de2502da5eafd1df81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)