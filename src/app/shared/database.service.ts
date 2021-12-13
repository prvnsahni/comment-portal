import { Injectable } from '@angular/core';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo89JSEkxuEEQdMEXxcMfwc4uu3TZWcg8",
  authDomain: "comment-portal-fafc2.firebaseapp.com",
  databaseURL: "https://comment-portal-fafc2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "comment-portal-fafc2",
  storageBucket: "comment-portal-fafc2.appspot.com",
  messagingSenderId: "242321392110",
  appId: "1:242321392110:web:3d6da935d129426d66ceff",
  measurementId: "G-H0GRF2EZQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }
}
