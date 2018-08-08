import {LOGOUT, LOGIN} from "./actionTypes"
import firebase, {githubProvider} from '../../api/firebase';

export let login = (uid, email) => {
  return {
    type: LOGIN,
    uid,
    email
  }
};

export let logout = () => {
  return {
    type: LOGOUT
  }
};

export let startLogin = (id, completed) => {
  return (dispatch, getState) => {
    firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log('Auth worked', result)
    }, (error) => {
      console.log('Unable to auth', error)
    });
  };
};

export let startLogout = (id, completed) => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('Logged out!')
    })
  };
};