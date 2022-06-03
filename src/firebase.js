import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore, doc, collection, addDoc, updateDoc, query, where, getDocs } from 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
})

export const auth = app.auth()
export default app
const firestore = getFirestore();

export const createUser = async (email, username) => {
    const createdUser = await addDoc(collection(firestore, "users"), {
        email: email,
        username: username,
        tokens: 30,
        notifications: {},
        // generate a 6 character unique id
        referralCode: Math.random().toString(36).substring(2, 7),
        refferedBy: ""
    });
    const createdUserId = createdUser.id
    editUser(createdUserId, {
        id: createdUserId,
    });
    return createdUserId
}


export const editUser = async (id, updatedData) => {
    const user = doc(firestore, "users", id);
    await updateDoc(user, updatedData);
}

export const getUserID = async (email) => {
    const users = collection(firestore, "users");
    const result = query(users, where("email", "==", email));

    const querySnapshot = await getDocs(result);
    let userID = ""
    querySnapshot.forEach((doc) => {
        userID = doc.id
    });
    return userID
}

export const getUserData = async (id) => {
    const users = collection(firestore, "users");
    const result = query(users, where("id", "==", id));

    const querySnapshot = await getDocs(result);
    let data = {};
    querySnapshot.forEach((doc) => {
        data = (doc.data())
    });
    return data
}

export const checkIfUsernameExists = async (username) => {
    const users = collection(firestore, "users");
    const result = query(users, where("username", "==", username));

    const querySnapshot = await getDocs(result);
    let usernameExists = false
    querySnapshot.forEach((doc) => {
        if (doc.data().username) {
            usernameExists = true
        } else {
            usernameExists = false
        }
    });
    return usernameExists
}


export const checkIfUserExists = async (email) => {
    const users = collection(firestore, "users");
    const result = query(users, where("email", "==", email));

    const querySnapshot = await getDocs(result);
    let userExists = false
    querySnapshot.forEach((doc) => {
        console.log(doc.data())
        if (doc.data().email) {
            userExists = true
        } else {
            userExists = false
        }
    });
    return userExists
} 
