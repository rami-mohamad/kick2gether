import Fields from "./Components/Fields";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Fields></Fields> */}
        {/* <Home></Home> */}
        <Route path="/booking/search" component={Fields} />
      </Router>
    </div>
  );
}

export default App;
