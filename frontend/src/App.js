import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages'
import SigninupPage from "./pages/signInUp";
// import Navbar from "./components/Navbar/Navbar";
// import Sidebar from "./components/Sidebar"

function App() {
  return (
  <Router>
    {/* <Navbar /> */}
    {/* <Sidebar /> funktioniert nicht */}
    <Switch>

      <Route path="/" component={Home} exact />
      <Route path="/signInUp" component={SigninupPage} exact />

    </Switch>
  </Router>
  );
}

export default App;
