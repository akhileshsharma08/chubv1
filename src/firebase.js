import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage,ref,uploadBytes } from "firebase/storage"


// const auth = getAuth();


const firebaseConfig = {
  apiKey: "AIzaSyCb1TP7Bui1iCwnhRUxNTUgKzsZqBk6e_c",
  authDomain: "chub-e7386.firebaseapp.com",
  projectId: "chub-e7386",
  storageBucket: "chub-e7386.appspot.com",
  messagingSenderId: "431787974609",
  appId: "1:431787974609:web:f38bb7394bcf3c5bdc8af0",
  measurementId: "G-0BGJPK7PEX",
  // storageBucket:"chub-e7386.appspot.com/files"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db = getFirestore(app)
export const storage=getStorage(app)
// const analytics = getAnalytics(app);
export default app