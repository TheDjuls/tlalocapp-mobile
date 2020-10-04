import * as firebase from "firebase/app";
import "firebase/firestore"


var firebaseConfig = {
    apiKey: "AIzaSyBdoyGLNqbAe_J6jiuFKoojSUc-OBx7z3E",
    authDomain: "tlaloc-ff2d0.firebaseapp.com",
    databaseURL: "https://tlaloc-ff2d0.firebaseio.com",
    projectId: "tlaloc-ff2d0",
    storageBucket: "tlaloc-ff2d0.appspot.com",
    messagingSenderId: "627564242366",
    appId: "1:627564242366:web:9b355b6b9cad7708df05ef",
    measurementId: "G-6FESXFPYV2"
  };

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

export { db, firebase };