import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB2Z1Oha8vwiViI-ehFdjSuJ3NK38NBMDw',
  authDomain: 'chat-with-m.firebaseapp.com',
  databaseURL:
    'https://chat-with-m-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-with-m',
  storageBucket: 'chat-with-m.appspot.com',
  messagingSenderId: '510159836795',
  appId: '1:510159836795:web:c03a39f9b6e55993f1b4de',
  measurementId: 'G-57XJ0XNVZK'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
