import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLI_z6OEATsdoHHsKvCS4_fFAsVroMDqc",
  authDomain: "auth-project-77c6e.firebaseapp.com",
  projectId: "auth-project-77c6e",
  storageBucket: "auth-project-77c6e.appspot.com",
  messagingSenderId: "220957748839",
  appId: "1:220957748839:web:8178534e87e5dcb157eec2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;