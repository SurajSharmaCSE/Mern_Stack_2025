// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6tHeC9Sxwv-0xNp7jN2blz1hefPDfD0Q",
  authDomain: "yt-demo-93ab0.firebaseapp.com",
  projectId: "yt-demo-93ab0",
  storageBucket: "yt-demo-93ab0.firebasestorage.app",
  messagingSenderId: "1015240766756",
  appId: "1:1015240766756:web:4a939945f4c32f4480efb1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
  users:firestore.collection('users')
}

export const storage = firebase.storage()

