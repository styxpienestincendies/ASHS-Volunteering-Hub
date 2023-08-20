// // Initalise Firebase
// var firebaseConfig = {
//     apiKey: "AIzaSyAEd3ut9QFt3VOYrxL81QcDXXk38POzmJE",
//     authDomain: "contact-form-86ebf-default-rtdb.firebaseio.com",
//     projectId: "contact-form-86ebf",
//     storageBucket: "contact-form-86ebf.appspot.com",
//     messagingSenderId: "371250661774",
//     appId: "1:371250661774:web:62d7559b8ccf9914867cdf"
// }

// firebase.initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEd3ut9QFt3VOYrxL81QcDXXk38POzmJE",
    authDomain: "contact-form-86ebf.firebaseapp.com",
    databaseURL: "https://contact-form-86ebf-default-rtdb.firebaseio.com",
    projectId: "contact-form-86ebf",
    storageBucket: "contact-form-86ebf.appspot.com",
    messagingSenderId: "371250661774",
    appId: "1:371250661774:web:62d7559b8ccf9914867cdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Reference message collection
var messagesRef = firebase.database().ref('messages');

// Checks to see if for is submitting 
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submitting Form
function submitForm(e) {
    e.preventDefault();

    // Getting the values from the form using id
    var firstname = getInputVal('firstname');
    var lastname = getInputVal('lastname');
    var email = getInputVal('email');
    var phonenumber = getInputVal('phonenumber');
    var message = getInputVal('message');

    // Save Message
    saveMessage(firstname, lastname, email, phonenumber, message);
}

//Creating a function to retrieve form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Function to save the message to Firebase
function saveMessage(firstname, lastname, email, phonenumber, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        firstname: firstname,
        lastname: lastname,
        email: email,
        phonenumber: phonenumber,
        message: message

    })
}
