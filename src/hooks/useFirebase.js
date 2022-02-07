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
  const googleProvider = new GoogleAuthProvider();
  /************** GOOGLE SIGN UP  ***************/
  const signInWithGoogle = (navigate) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
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
      });
  };
  /************** GOOGLE SIGN UP  ***************/

  /******** EMAIL & PASSWORD SIGN UP  ********/
  const signUpWithEmail = (email, password, displayName, navigate) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
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
        console.log(errorMessage);
      });
  };
  /******** EMAIL & PASSWORD SIGN UP  ********/

  /********* EMAIL & PASSWORD SIGN IN ****************/
  const signInWithEmail = (email, password, navigate) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode, error);
      });
  };
  /********* EMAIL & PASSWORD SIGN IN ****************/

  /********* SIGNOUT  *********/
  const signOutHandler = (navigate) => {
    // const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser({});
        navigate("signup");
        console.log(user);
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };
  /********* SIGNOUT  *********/

  /************ USER STATE OBSERVER ***********/
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        setUser(user);
        console.log(user);
      } else {
        setUser({});
        console.log(user);
      }
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
  };
};

export default useFirebase;
