import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCE8Hpu5CfEK2_1vt2mdcMSM1Fq5J350fw",
  authDomain: "fir-auth-1132-17b32.firebaseapp.com",
  projectId: "fir-auth-1132-17b32",
  storageBucket: "fir-auth-1132-17b32.appspot.com",
  messagingSenderId: "926001285223",
  appId: "1:926001285223:web:33c9919f660917fbc82cc2",
  // mesurementId: "926001285223:web:
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
