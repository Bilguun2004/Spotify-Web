import firebase from 'firebase/compat/app';
import { useState,useEffect } from 'react';
import 'firebase/compat/auth';
import 'fierbase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDOjNVXQqFoGvgfksCfLp48_Daen-eG_t0",
    authDomain: "spotify-a7a5c.firebaseapp.com",
    projectId: "spotify-a7a5c",
    storageBucket: "spotify-a7a5c.appspot.com",
    messagingSenderId: "898133222383",
    appId: "1:898133222383:web:6e09e6d36b5c5e67d5cc1a"
  };

  export const useFirebase = () =>{
      const[state,setstate]=useState({firebase});
      useEffect(()=>{
          const app = firebase.initializeApp(firebaseConfig);
          const auth = firebase.auth(app);
          const firestore = firebase.firestore(app);
          setstate({auth,firestore,app,firebase})
      },[])
      return state;
  }