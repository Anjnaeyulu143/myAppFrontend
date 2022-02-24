import React from "react";
import Work from "./container/Work/Work";
import { Navbar } from "./components/Navbar/Navbar";
import About from "./container/About/About";
import Footer from "./container/Footer/Footer";

import Header from "./container/Header/Header";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Footer />
    </div>
  );
};

export default App;
