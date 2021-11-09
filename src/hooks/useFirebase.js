import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setAuthError('');
            })
            .catch(error => {
                setAuthError(error.message);
            })
    };

    const registerUser = (email, password) => {
        setLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setAuthError('');
            })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    };

    const loginUser = (email, password) => {
        setLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setAuthError('');
            })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => {
                setLoading(false);
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
            setLoading(false);
        })

        return () => unsubscribed;
    }, [auth]);

    const logout = () => {
        setLoading(true);

        signOut(auth)
            .then(() => {
                setAuthError('');
            })
            .catch(error => {
                setAuthError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    };

    return {
        user,
        authError,
        loading,
        signInWithGoogle,
        registerUser,
        loginUser,
        logout
    }
};

export default useFirebase;