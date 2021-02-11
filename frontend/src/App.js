import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import registration from "./registration/registration";
import AuthState from "../src/auth/AuthState";
import AlertState from "./alert/AlertState";
import Alerts from "./alerts component/Alerts";

import Fields from "./Components/Fields";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/index";
import Additional from "./Components/Additional";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import BookingWrap from "./Components/BookingWrap";
import BookingConfirmation from "./Components/BookingConfirmation";
//import Dashboard from "./Components/Dashboard";
import Dashboard from "./dashboard/dashboard";


const App = () => {
  return (
    <AuthState>
      <AlertState>
        <BrowserRouter>
          <Fragment>
            <div>
              {/* <Alerts className="alerts" /> */}
              <Switch>
                <Route
                  path="/registration"
                  exact
                  component={registration}
                ></Route>
                <Route path="/Home" component={Home} exact />
                <Route path="/booking/" component={BookingWrap} exact />
                <Route
                  path="/booking/confirm"
                  component={BookingConfirmation}
                  exact
                ></Route>
                <Route path="/dashboard" component={Dashboard} exact></Route>
              </Switch>
            </div>
          </Fragment>
        </BrowserRouter>
      </AlertState>
    </AuthState>
  );
};

export default App;
