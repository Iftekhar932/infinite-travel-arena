import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
  const auth = getAuth();

  /* GOOGLE SIGN IN START */
  const googleProvider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(result.user);
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
  /* GOOGLE SIGN IN END */

  /* STATE OBSERVER START */
  const unSubscribed = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
      } else {
      }
    });
    return () => unSubscribed;
  };
  /* STATE OBSERVER END */
};

export default useFirebase;
