import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages'
import SignInUpPage from "./pages/signInUp";

function App() {
  return (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/signInUp" component={SignInUpPage} exact />

    </Switch>
  </Router>
  );
}

export default App;
