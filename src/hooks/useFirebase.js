import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import {
    getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged,
    signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile
} from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";


/// initialize firebase app
initializeFirebase();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();


    const registerUser = (email, password, name) => {
        setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setAuthError('');
                const newUser = { email, displayName: name }
                setUser(newUser)
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                navigate('/');

                //navigate('/login');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setAuthError(errorMessage)
            })
            .finally(() => setIsLoading(false))
    }

    const logInUser = (email, password, location) => {
        setIsLoading(true)

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setAuthError('');
                const destination = location?.state?.from || '/';
                navigate(destination)

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setAuthError(errorMessage)
            })
            .finally(() => setIsLoading(false))
    }


    const signInWithGoogle = () => {
        setIsLoading(true)
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                const destination = location?.state?.from || '/';
                navigate(destination);
                setAuthError('');

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                setAuthError(errorMessage);
                console.log(authError);

            })
            .finally(() => setIsLoading(false))
    }
    /// Observe user state
    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user)
                console.log(user);
            } else {
                setUser({})
            }
            setIsLoading(false)
        });

        return () => unSubscribe;

    }, [])

    const logOut = () => {

        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }
    return {
        user,
        registerUser,
        logOut,
        logInUser,
        signInWithGoogle,
        isLoading,
        authError
    }
}

export default useFirebase;