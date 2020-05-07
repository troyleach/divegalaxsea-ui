import React from "react";

import "./App.css";

import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import DivePricingTabs from "./components/DivePricingTabs";

function App() {
  return (
    <div className="App Site">
      <div className="Site-content">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-home">
          <DivePricingTabs />
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
