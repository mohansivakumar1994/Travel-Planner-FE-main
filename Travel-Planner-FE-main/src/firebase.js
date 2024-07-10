// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkn-mMmbzuhqskuzCmfVsojOZHO2W7HHg",
  authDomain: "travel-planner-50dbf.firebaseapp.com",
  projectId: "travel-planner-50dbf",
  storageBucket: "travel-planner-50dbf.appspot.com",
  messagingSenderId: "134441686816",
  appId: "1:134441686816:web:869bf28f55c153c0656945",
  measurementId: "G-ZCZEXCLGH2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
