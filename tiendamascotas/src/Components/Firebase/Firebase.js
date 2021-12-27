import {initializeApp}from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAUTKnRrIC9paLnsqYTAP2PTJRnsFOv8es",
    authDomain: "canhijos-efpp.firebaseapp.com",
    projectId: "canhijos-efpp",
    storageBucket: "canhijos-efpp.appspot.com",
    messagingSenderId: "117945373736",
    appId: "1:117945373736:web:5f4b102a2a94389626111d",
    measurementId: "G-NK9CJW8KPB"
  };

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)