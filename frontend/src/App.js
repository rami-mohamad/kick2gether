import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import registration from "./registration/registration";
import AuthState from "../src/auth/AuthState";
import AlertState from "./alert/AlertState";
import Alerts from "./alerts component/Alerts";
import './App.css';
import Fields from "./Components/Fields";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages';
import SigninupPage from "./pages/signInUp";
import Additional from "./Components/Additional";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import BookingWrap from "./Components/BookingWrap";
import BookingConfirmation from "./Components/BookingConfirmation";

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <BrowserRouter>
         
            <div>
              <Alerts className="alerts" />
              <Switch>
                <Route
                  path="/registration"
                  exact
                  component={registration}
                ></Route>
                 <Route path="/" component={Home} exact />
                 <Route path="/signInUp" component={SigninupPage} exact />
                <Route path="/Home" component={Home} exact />
                <Route path="/booking/" component={BookingWrap} exact />
                <Route
                  path="/booking/confirm"
                  component={BookingConfirmation}
                  exact
                ></Route>
              </Switch>
            </div>
          
        </BrowserRouter>
      </AlertState>
    </AuthState>
  );
};


export default App;
