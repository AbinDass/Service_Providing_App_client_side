
import { initializeApp ,getApp, getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_8ixTrfpFgh-YPYpZYHQ73G7P6VdjioA",
    authDomain: "service-app-9031f.firebaseapp.com",
    projectId: "service-app-9031f",
    storageBucket: "service-app-9031f.appspot.com",
    messagingSenderId: "9797367157",
    appId: "1:9797367157:web:af325ae83c4a07ae758f3c",
    measurementId: "G-PC0682QVCD",
};

const app =getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
export const Auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();

export default app;
