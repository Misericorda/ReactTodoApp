import {render} from 'react-dom'
import 'foundation-sites/dist/js/foundation.min'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faSquare, faCheckSquare} from '@fortawesome/free-regular-svg-icons'
import configureStore from './store/configureStore';
import {startAddTodos, login, logout} from "./store/actions"
import App from './App'
import './styles/app.scss'

import firebase from './api/firebase';
import history from './router/history';

// run foundation
$(() => $(document).foundation());

// add FA icons to be used
library.add(faSquare, faCheckSquare);

// create store
let store = configureStore();

// try to auth and redirect accordingly
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
