import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import jwt_decode from "jwt-decode";
import { firebaseConfig } from "../../firebaseConfig/firebaseConfig";

export const initializeLoginFramework = () => {
    !firebase.apps.length && firebase.initializeApp(firebaseConfig);
}

// export const handleGoogleSignIn = () => {
//     const googleProvider = new firebase.auth.GoogleAuthProvider();
//     return firebase
//         .auth()
//         .signInWithPopup(googleProvider)
//         .then(res => handleResponse(res))
// }

// export const handleResponse = (res) => {  
//     fetchProfile(res.user)
//     const { displayName, photoURL, email } = res.user;
//     const signedInUser = {
//         name: displayName,
//         email: email,
//         photo: photoURL || "https://i.ibb.co/7CzR0Dg/users.jpg"
//     }
//     return signedInUser;  
// }

// export const signInWithEmailAndPassword = (email, password) => {
//     return firebase
//         .auth()
//         .signInWithEmailAndPassword(email, password)
//         .then(res => {
//             const url = 'https://toprak-real.herokuapp.com/profile?email=' + res.user.email
//             fetch(url)
//                 .then(res => res.json())
//                 .then(data => handleResponse(data))
//         })
// }

// export const setJWTToken = () => {
//     return firebase
//         .auth().currentUser
//         .getIdToken(true)
//         .then(idToken => {
//             localStorage.setItem('token', idToken)
//         })
// }
export const setUserInfo = (props) => {
    return localStorage.setItem('user_token', props)
}

export const getDecodedUser = () => {
    const token = localStorage.getItem('user_token');
    const jwt_decoder = jwt_decode(token)
    const userData = jwt_decoder.user
    if (!token) {
        return {};
    }
    return userData;
}


export const handleSignOut = () => { 
    if(localStorage.removeItem('user_token')){
        return{}
    }
}

// export const fetchProfile = (props) => {
//     const { displayName, photoURL, email } = props;

//     const profileData = {
//         name: displayName || props.name,
//         email: email || props.email,
//         password: props.password || '',
//         photo: photoURL || props.photo
//     }
//     const loading = toast.loading('Adding...Please wait!');
//     const url = 'https://toprak-real.herokuapp.com/profile-data'
    
//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'Application/json'
//         },
//         body: JSON.stringify(profileData)
//     })
//     .then(res => {
//         return true
//     })
//     return true
//         // .then(res => {
//         //     if (res) {
//         //         toast.dismiss(loading);
//         //         // reset();
//         //         return swal(`Successfully ${res.success || res.insertOne ? 'Login' : 'Sign Up!'}`, ` Welcome`);
//         //     }
//         //     swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
//         // })
// }