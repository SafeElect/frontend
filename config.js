import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBED1O3djtIKy7MmBLu0lU_LBbjhiZvhX4",
  authDomain: "safeelect-daf15.firebaseapp.com",
  projectId: "safeelect-daf15",
  storageBucket: "safeelect-daf15.appspot.com",
  messagingSenderId: "240037175303",
  appId: "1:240037175303:web:5e421f3babab935078caa2"
};

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}