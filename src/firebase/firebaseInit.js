import firebase from "firebase/app";
import "firebase/firestore";

//import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi_zjVDe4wqtOd5RK0SzSZjYwESbFEPX0",
  authDomain: "invoice-mcoria-app.firebaseapp.com",
  projectId: "invoice-mcoria-app",
  storageBucket: "invoice-mcoria-app.appspot.com",
  messagingSenderId: "699185486566",
  appId: "1:699185486566:web:fba125d9b73601e28f7927",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
