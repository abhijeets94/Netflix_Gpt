// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDz-5gONmfE3ONA2hXlOTrfQL8adnxrlIc",
  authDomain: "netflix-gpt-479ce.firebaseapp.com",
  projectId: "netflix-gpt-479ce",
  storageBucket: "netflix-gpt-479ce.appspot.com",
  messagingSenderId: "836724278457",
  appId: "1:836724278457:web:568fb725704d5adc184768",
  measurementId: "G-J0T6QXHQ9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.info(analytics);

 export const auth = getAuth()