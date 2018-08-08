import {render} from 'react-dom'
import 'foundation-sites/dist/js/foundation.min'
import configureStore from './store/configureStore';
import {startAddTodos, login, logout} from "./store/actions"
import App from './App'
import './styles/app.scss'

import firebase from './api/firebase';
import history from './router/history';

$(document).ready(function () {
  $(document).foundation()
});


let store = configureStore();
console.log(process.env.NODE_ENV)
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid, user.email));
    store.dispatch(startAddTodos());
    history.push('/todos');
  } else {
    store.dispatch(logout());
    history.push('/');
  }
});

render(<App store={store}/>, document.getElementById('app'));
