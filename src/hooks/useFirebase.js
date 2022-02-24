import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isHere, setIsHere] = useState(true);

  /************** GOOGLE SIGN UP BELOW  ***************/
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = (navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
      })
      .finally(() => {
        setIsLoading(false); // in tutorial it is used in 'finally()' while removing the 'catch()' below
      });
  };
  /************** GOOGLE SIGN UP ABOVE  ***************/

  /******** EMAIL & PASSWORD SIGN UP BELOW  ********/
  const signUpWithEmail = (email, password, displayName, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        setUser(user);
        navigate("/");
        // PROFILE UPDATE
        updateProfile(auth.currentUser, {
          displayName: displayName,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage, "Try Again");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  /******** EMAIL & PASSWORD SIGN UP ABOVE  ********/

  /********* EMAIL & PASSWORD SIGN IN ****************/
  const signInWithEmail = (email, password, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode, error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  /********* EMAIL & PASSWORD SIGN IN ****************/

  /********* SIGNOUT  *********/
  const signOutHandler = (navigate) => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        navigate("/signup");
        setIsLoading(false);
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  /********* SIGNOUT  *********/

  /************ USER STATE OBSERVER ***********/
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser({});
      setIsLoading(false);
    });
    return () => unSubscribed;
  }, []);
  /************ USER STATE OBSERVER ***********/
  return {
    signInWithGoogle,
    signUpWithEmail,
    signInWithEmail,
    signOutHandler,
    user,
    isLoading,
    setIsHere,
    isHere,
  };
};

export default useFirebase;
