import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAa-nQykCcRtPuZxnnnl4BtSROr2GGbK-M",
  authDomain: "footballapp-1609d.firebaseapp.com",
  projectId: "footballapp-1609d",
  storageBucket: "footballapp-1609d.appspot.com",
  messagingSenderId: "514759773307",
  appId: "1:514759773307:web:b88fcfe617be968e3726de",
  measurementId: "G-RXL2YPVX69",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
