import React from "react";
import {Route, Redirect, Switch, Router} from "react-router-dom";
import TodoApp from "../components/TodoApp";
import Login from "../components/Login";
import history from "./history";
import firebase from "../api/firebase";

const isAuthenticated = () => {
  return firebase.auth().currentUser;
};

const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/todos" render={
          () => isAuthenticated()
            ? <TodoApp/>
            : <Redirect to="/" />
        }/>
        <Route excat path="/" render={
          () => !isAuthenticated()
            ? <Login/>
            : <Redirect to="/todos" />
        }/>
      </Switch>
    </Router>
  );
};
export default AppRouter;
