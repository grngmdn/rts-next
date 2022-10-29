import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyChnRdalkyXbF0hM6faacgbP4V9sHXEfjU',
  authDomain: 'rts-website-dad0a.firebaseapp.com',
  projectId: 'rts-website-dad0a',
  storageBucket: 'rts-website-dad0a.appspot.com',
  messagingSenderId: '481518483357',
  appId: '1:481518483357:web:979b910dce1eb6b204e174',
  measurementId: 'G-H6B22S1252',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
