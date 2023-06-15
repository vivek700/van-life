// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, getDocs,getDoc, query, where} from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnPVIrUL05mUfps5P7Jvxv4YsxYwVedEE",
  authDomain: "van-life-36b42.firebaseapp.com",
  projectId: "van-life-36b42",
  storageBucket: "van-life-36b42.appspot.com",
  messagingSenderId: "338219022515",
  appId: "1:338219022515:web:eebc317f49161d53eb98c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export async function getVans() {

    const querySnapshot = await getDocs(collection(db, "vans"))
    const vansArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vansArr

}

export async function getVan(id) {

    const vanSnapshot = await getDoc(doc(db, "vans", id))
   
    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }

}

export async function getHostVans() {

    const q = query(collection(db, "vans"), where("hostId", "==", "123"))
    const querySnapshot = await getDocs(q)
    const vansArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vansArr

}


export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}