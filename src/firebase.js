import firebase from "firebase";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAxkKnHnWaO-Ef_FqBlsVlkeRz4G1xrrHE",
  authDomain: "twitterclone-12859.firebaseapp.com",
  projectId: "twitterclone-12859",
  storageBucket: "twitterclone-12859.appspot.com",
  messagingSenderId: "256585519556",
  appId: "1:256585519556:web:c561232192516abc82d491",
  measurementId: "G-YBC0QK591T",
};

firebase.initializeApp(config);

export default firebase;
