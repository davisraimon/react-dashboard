import firebase from 'firebase' 
const config = {
    apiKey: "AIzaSyDD2Il9qqYItdFd8-uDaM0XjRcMwnK5L_w",
    authDomain: "taskmanager-54ea8.firebaseapp.com",
    databaseURL: "https://taskmanager-54ea8.firebaseio.com",
    projectId: "taskmanager-54ea8",
    storageBucket: "taskmanager-54ea8.appspot.com",
    messagingSenderId: "132270154549",
    appId: "1:132270154549:web:ebfcac36646c74079f627c",
    measurementId: "G-YL8K40WMXZ"
};
class Firebase {
  constructor() {
    var fire = firebase.initializeApp(config);
  }
}
export default Firebase;