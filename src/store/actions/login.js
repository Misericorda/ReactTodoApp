import {LOGOUT, LOGIN} from "./actionTypes";
import firebase, {githubProvider} from "../../api/firebase";

export let login = (uid, email) => {
  return {
    type: LOGIN,
    uid,
    email
  };
};

export let logout = () => {
  return {
    type: LOGOUT
  };
};

export let startLogin = () => {
  return () => {
    firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log("Auth worked", result);
    }, (error) => {
      console.log("Unable to auth", error);
    });
  };
};

export let startLogout = () => {
  return () => {
    return firebase.auth().signOut().then(() => {
      console.log("Logged out!");
    });
  };
};