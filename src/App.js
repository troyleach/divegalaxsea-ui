import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import ReefMap from "./ReefMap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DivePricingTabs from "./components/DivePricingTabs";

function App() {
  return (
    <Router>
      <div className="App Site">
        <div className="Site-content">
          <div className="App-header">
            <Header />
          </div>
          <div className="App-home">
            <Route path="/" exact component={Home} />
            <Route path="/About" exact component={About} />
            <Route path="/Diving" component={DivePricingTabs} />
            <Route path="/ReefMap" component={ReefMap} />
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
