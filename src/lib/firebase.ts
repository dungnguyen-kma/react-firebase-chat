import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDVkJMFwUE4i_13yAt_U8VUfhe_9tEqW8s",
  authDomain: "reactchat-89164.firebaseapp.com",
  projectId: "reactchat-89164",
  storageBucket: "reactchat-89164.appspot.com",
  messagingSenderId: "850720529669",
  appId: "1:850720529669:web:d30edf49183286a207ab6c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
