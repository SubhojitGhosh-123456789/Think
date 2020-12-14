import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCk2D6R4iEmfs9IusQh_XwXwamkbBlB4gU",
  authDomain: "think-2ff30.firebaseapp.com",
  projectId: "think-2ff30",
  storageBucket: "think-2ff30.appspot.com",
  messagingSenderId: "909551991516",
  appId: "1:909551991516:web:82e4da4d112bcdb6fa5219",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
