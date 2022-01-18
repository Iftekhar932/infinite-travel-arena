import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  /************** GOOGLE SIGN UP  ***************/
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
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
      });
  };
  /************** GOOGLE SIGN UP  ***************/

  /******** EMAIL & PASSWORD SIGN UP  ********/
  const signUpWithEmail = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        setUser(user);
        // PROFILE UPDATE
        updateProfile(auth.currentUser, {
          displayName: "Jane Q. User",
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
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  /******** EMAIL & PASSWORD SIGN UP  ********/

  /********* EMAIL & PASSWORD SIGN IN ****************/
  const signInWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  /********* EMAIL & PASSWORD SIGN IN ****************/

  /************ OBSERVER ***********/
  useEffect(() => {
    const unSubscribed = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          setUser(user);
          // ...
        } else {
          // User is signed out
          // ...
          setUser({});
        }
      });
    };
  }, []);
  /************ OBSERVER ***********/
  return { signInWithGoogle, signUpWithEmail, signInWithEmail };
};

export default useFirebase;
