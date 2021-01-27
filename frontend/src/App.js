import Fields from "./Components/Fields";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Additional from "./Components/Additional";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/booking/search" component={Fields} />
        <Route path="/booking/additional" component={Additional} />
      </Router>
    </div>
  );
}

export default App;
