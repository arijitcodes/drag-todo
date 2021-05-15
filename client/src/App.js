import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Error404 from "./components/Error404";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="mb-4">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="*" component={Error404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
