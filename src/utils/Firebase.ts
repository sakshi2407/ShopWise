import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB3PrnSnQtarOGIPtLOhp7tysNUwq_7FhA",
  authDomain: "e-commerce-dfe5f.firebaseapp.com",
  projectId: "e-commerce-dfe5f",
  storageBucket: "e-commerce-dfe5f.appspot.com",
  messagingSenderId: "208690258666",
  appId: "1:208690258666:web:53c7a52234391d020b2d93",
  measurementId: "G-J52KXN4HE7"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app , "gs://e-commerce-dfe5f.appspot.com");
