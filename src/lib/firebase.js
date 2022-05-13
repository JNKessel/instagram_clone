import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

//Here i want to import the seed file
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBWfYNLjC4MD40Qcg4fTsazTsh4hDUsf1M",
  authDomain: "instagram-yt-14c7d.firebaseapp.com",
  projectId: "instagram-yt-14c7d",
  storageBucket: "instagram-yt-14c7d.appspot.com",
  messagingSenderId: "1065063314172",
  appId: "1:1065063314172:web:9be0e974934ccbd429dd79",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// Here is where i Want to call the Seed file (only Once!!!)
// seedDatabase(firebase);

export { firebase, FieldValue };
