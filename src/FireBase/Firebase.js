import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const myApp=firebase.initializeApp({
    apiKey: "AIzaSyAEKHDsMxPyK7P3bpr7iKezb9g4BlVBgPQ",
    authDomain: "dashboard-app-a0efe.firebaseapp.com",
    projectId: "dashboard-app-a0efe",
    storageBucket: "dashboard-app-a0efe.appspot.com",
    messagingSenderId: "712950478533",
    appId: "1:712950478533:web:79d056e099471af7bbe2ac"
})

export const auth=firebase.auth()
const googleProvider=new firebase.auth.GoogleAuthProvider()

export const signInWithGoogle= ()=> {
    auth.signInWithPopup(googleProvider).then((res)=>{
        console.log(res.user)
    }).catch((error)=>{
        console.log(error.message);
    })
}