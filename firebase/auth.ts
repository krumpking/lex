import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "./firebaseConfig";

export const signUpWithEmail = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      return user;
    })
    .catch((error) => {
      console.error(error);
      console.error(error?.message);
      var errorCode = error?.code;
      switch (errorCode) {
        case "auth/email-already-in-use":
          toast.error("An account with this email already exists");
          break;
        case "auth/invalid-email":
          toast.error("Please enter a valid email address");
          break;
        case "auth/operation-not-allowed":
          toast.error("Error please contact support on help@lexaniaai.com");
          break;
        case "auth/weak-password":
          toast.error("Password is too weak - please use a stronger password");
          break;
        default:
          toast.error(
            error?.message || "Registration failed. Please try again.",
          );
      }
    });
};

export const signInWithEmail = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      return user;
    })
    .catch((error) => {
      console.error(error);
      const errorCode = error?.code;
      switch (errorCode) {
        case "auth/invalid-credential":
          toast.error("The email or password is incorrect");
          break;
        case "auth/wrong-password":
          toast.error("Incorrect password");
          break;
        case "auth/invalid-email":
          toast.error("Please enter a valid email address");
          break;
        case "auth/user-disabled":
          toast.error("This account has been disabled");
          break;
        case "auth/too-many-requests":
          toast.error("Too many failed attempts. Please try again later");
          break;
        default:
          toast.error("Login failed. Please try again");
      }
    });
};
