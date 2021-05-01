import firebase from 'firebase';
//from 1st may
var firebaseConfig = {
    apiKey: "AIzaSyBgw6z_lKum5OgSjT_QTf5zHBUARrwZr9Y",
    authDomain: "todo-36448.firebaseapp.com",
    databaseURL: "https://todo-36448-default-rtdb.firebaseio.com",
    projectId: "todo-36448",
    storageBucket: "todo-36448.appspot.com",
    messagingSenderId: "717272925628",
    appId: "1:717272925628:web:abd8a5dfdc15b374bc57b9",
    measurementId: "G-06LGZRD0Z0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
