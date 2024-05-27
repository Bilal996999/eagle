import { initializeApp } from "firebase/app";
import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDiYy1MItu7UABh_uLHbM92Mt9tefgG_hA",
  authDomain: "eaglecarrental-bd4de.firebaseapp.com",
  projectId: "eaglecarrental-bd4de",
  storageBucket: "eaglecarrental-bd4de.appspot.com",
  messagingSenderId: "637525981750",
  appId: "1:637525981750:web:3d83d953cdcdaaf3077697"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// services

// upload img
async function uploadImage(Image) {
    const uniqueNum = Math.floor(Math.random() * 1000000) + 1;
    const storageRef = ref(storage, `images/${Image.name}${uniqueNum}`);
    const snapshot = await uploadBytes(storageRef, Image);
    console.log(snapshot);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  }

export {app, uploadImage};