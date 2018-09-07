import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bulma/css/bulma.css';
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/signup" component={SignUp} />
    </div>
  </Router>
);

export default App;