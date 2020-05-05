import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
            <Route path="/About" component={About} />
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
