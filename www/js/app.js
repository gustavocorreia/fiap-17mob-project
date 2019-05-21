// Required for side-effects
//require("firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCVPUdC5qCv1-gd_fzn672kXtu648XvadY",
    authDomain: "fiap-17mob-project.firebaseapp.com",
    databaseURL: "https://fiap-17mob-project.firebaseio.com",
    projectId: "fiap-17mob-project",
    storageBucket: "fiap-17mob-project.appspot.com",
    messagingSenderId: "743540642688",
    appId: "1:743540642688:web:089e871a0dcf3f86"
};

// Initialize Firebase
var appFirebase = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore(appFirebase);
var storage = firebase.storage();
