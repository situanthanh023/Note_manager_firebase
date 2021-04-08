// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase';
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCggQP_FPKBwx2lybkPpKHjeCf1RwGFu2U",
    authDomain: "note-manager-cae94.firebaseapp.com",
    databaseURL: "https://note-manager-cae94-default-rtdb.firebaseio.com",
    projectId: "note-manager-cae94",
    storageBucket: "note-manager-cae94.appspot.com",
    messagingSenderId: "701660487757",
    appId: "1:701660487757:web:92022c619c3dd6102ebc04",
    measurementId: "G-WHMHCQE9CZ"
  };
  firebase.initializeApp(firebaseConfig);
  export const nodeData = firebase.database().ref('/dataForNote')

  // var data = firebase.database().ref('dataForNote/note3');
  //     data.set({
  //       id:3,
  //       title:"Ngày 2-4-2021 : Rất quan trọng",
  //       noteContent:"Tạm thời chưa nghĩ ra"
  //     })
  //     data.once('value').then(function(snapshot){
  //       console.log(snapshot.val());
  //     });