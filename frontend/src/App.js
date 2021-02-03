import Fields from "./Components/Fields";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Additional from "./Components/Additional";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import BookingWrap from "./Components/BookingWrap";
import BookingConfirmation from "./Components/BookingConfirmation";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        {/*  <Route path="/booking/search" component={Fields} />
        <Route path="/booking/additional" component={Additional} /> */}
        <Route path="/booking/" component={BookingWrap} exact />
        <Route
          path="/booking/confirm"
          component={BookingConfirmation}
          exact
        ></Route>
        {/* <BookingWrap></BookingWrap> */}
        <Route path="/user" component={Login}></Route>
      </Router>
    </div>
  );
}

export default App;
