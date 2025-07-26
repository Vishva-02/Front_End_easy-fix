import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0aPR643f0PCDEG5UwOswGhK_R6SoiBy0",
  authDomain: "easy-fix-e0e67.firebaseapp.com",
  projectId: "easy-fix-e0e67",
  storageBucket: "easy-fix-e0e67.appspot.com",
  messagingSenderId: "1002191042278",
  appId: "1:1002191042278:web:bb6686698ee7a1c11dad27",
  measurementId: "G-9V13XNMYYK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, db };
