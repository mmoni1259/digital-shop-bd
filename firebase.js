// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx9M7ndG4oMajZu8tvpFW453Ut04_yccc",
  authDomain: "digital-shop-bd-c780d.firebaseapp.com",
  projectId: "digital-shop-bd-c780d",
  storageBucket: "digital-shop-bd-c780d.firebasestorage.app",
  messagingSenderId: "214382616216",
  appId: "1:214382616216:web:02959d935a16261c9cbaed",
  measurementId: "G-4J1PL9T6BP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
