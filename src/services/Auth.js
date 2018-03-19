import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyDmErD0AeLAniv7rk7lJXA8s6upN0Vc-8Q",
    authDomain: "authentication-react-506ae.firebaseapp.com",
    databaseURL: "https://authentication-react-506ae.firebaseio.com",
    projectId: "authentication-react-506ae",
    storageBucket: "authentication-react-506ae.appspot.com",
    messagingSenderId: "706240772129"
};


if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {auth}

/*

export const authentication = (username, password) => {
    return Firebase.auth().signInWithEmailAndPassword(username, password).then(response => {
        localStorage.setItem('jwt_token', response.uid);
        return Promise.resolve(response);
    }).catch(error => {
        return Promise.reject(error);
    });
};


export const verifyAuthentication = () => {
    return new Promise(function (resolve, reject) {
        Firebase.auth().onAuthStateChanged(function (response) {
            if (response) {
                resolve(response);
            }
        });
    });

};

export const signOutUser = () => {
    return Firebase.auth().signOut()
        .then(() => {
            localStorage.removeItem('jwt_token');
            return Promise.resolve();
        }, (error) => {
            return Promise.reject(error);
        });
};*/
