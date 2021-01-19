import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Work from "./pages/Work";
// import NoMatch from "./pages/NoMatch";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import Foot from "./components/Foot";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/contact" component={Contact} />
          <Route path="*" component={About} />
        </Switch>
        <Foot />
      </div>
    </Router>
  );
}

export default App;