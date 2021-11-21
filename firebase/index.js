import { initializeApp } from 'firebase/app';

import firebaseConfig from "./firebaseconfig";

const firebase = initializeApp(firebaseConfig);

export default firebase