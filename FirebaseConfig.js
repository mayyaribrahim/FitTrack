import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { Firestore, getFirestore ,initializeFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8OiaIMmy1qEqfQ_dgyryUmZOzktmfe6A",
  authDomain: "fittrack-558a8.firebaseapp.com",
  projectId: "fittrack-558a8",
  storageBucket: "fittrack-558a8.appspot.com",
  messagingSenderId: "254556706942",
  appId: "1:254556706942:web:328ac992bbff0ff9f9202f"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// export const FIRESTORE_DB = getFirestore(FIREBASE_APP,) // old

const FIRESTORE_DB = initializeFirestore(FIREBASE_APP,
  { 
    merge:true, 
    useFetchStreams: false,
    experimentalAutoDetectLongPolling: true
  })
//new
export { FIREBASE_APP, FIREBASE_AUTH, FIRESTORE_DB};



 

