import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Gallery from "./Gallery";
import About from "./About";
import Footer from "./Footer";
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
            <Route path="/Diving" component={DivePricingTabs} />
            <Route path="/About" exact component={About} />
            <Route path="/Gallery" exact component={Gallery} />
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
