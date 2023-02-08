import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyApzB03kO79iyOB0uYUClKU-FB7zwCAHR0",
    authDomain: "netflix-e8d59.firebaseapp.com",
    projectId: "netflix-e8d59",
    storageBucket: "netflix-e8d59.appspot.com",
    messagingSenderId: "250718186277",
    appId: "1:250718186277:web:27c55e89bfaa8daffa48cc",
    measurementId: "G-YTQ39LK1DY"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;