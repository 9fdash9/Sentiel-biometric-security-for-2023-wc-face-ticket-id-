// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_DlH_rd6i1MAL7eBbyQCZaAO715V5i2U",
  authDomain: "sentinel-fef8b.firebaseapp.com",
  projectId: "sentinel-fef8b",
  storageBucket: "sentinel-fef8b.firebasestorage.app",
  messagingSenderId: "231808284272",
  appId: "1:231808284272:web:0509627383a15d2a5ca6b5",
  measurementId: "G-3HXGT1VRLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
