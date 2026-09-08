// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBdpCRwQ14IdBa-gFV-Hh5d2gj_oDzdGp0",
  authDomain: "iraq-net-1980.firebaseapp.com",
  projectId: "iraq-net-1980",
  storageBucket: "iraq-net-1980.firebasestorage.app",
  messagingSenderId: "901603428041",
  appId: "1:901603428041:web:2d97f014a67566799aaf18",
  measurementId: "G-85CPBXHYCJ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
