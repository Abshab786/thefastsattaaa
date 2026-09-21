// Firebase Configuration for THEFASTSATTA
const firebaseConfig = {
  apiKey: "AIzaSyBx3RF9vWG36vnGPuBqYqlrAlrNBfzLwQQ",
  authDomain: "thefastsatta.firebaseapp.com",
  databaseURL: "https://thefastsatta-default-rtdb.firebaseio.com",
  projectId: "thefastsatta",
  storageBucket: "thefastsatta.firebasestorage.app",
  messagingSenderId: "292186061617",
  appId: "1:292186061617:web:ca531f69c6396fab904e10",
  measurementId: "G-S5DRYZGXXZ"
};

// Initialize Firebase (using compat SDK for compatibility with existing scripts)
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
