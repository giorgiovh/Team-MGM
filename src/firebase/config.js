import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyAF2xzVtZWJF3WRtMTMI0L8gdyuZs9arSE",
  authDomain: "anime-city.firebaseapp.com",
  projectId: "anime-city",
  storageBucket: "anime-city.appspot.com",
  messagingSenderId: "28773432606",
  appId: "1:28773432606:web:9c970495c5e361229add0f"
};

// init firebase
firebase.initializeApp(firebaseConfig)