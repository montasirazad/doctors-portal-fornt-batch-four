import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword,GoogleAuthProvider } from "firebase/auth";
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


    const registerUser = (email, password) => {
        setIsLoading(true);
       
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setAuthError('');
               

                //navigate('/login');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setAuthError(errorMessage)
            })
            .finally(() => setIsLoading(false))
    }

    const logInUser = (email, password,location) => {
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


    const signInwithGoogle =()=>{

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
            // Sign-out successful.
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
        isLoading,
        authError
    }
}

export default useFirebase;