import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        })

        return () => unsubscribed;
    }, []);

    const logout = () => {
        signOut(auth)
            .then(() => {

            })
            .catch(error => {
                setError(error.message);
            })
    };

    return {
        user,
        error,
        signInWithGoogle,
        logout
    }
};

export default useFirebase;