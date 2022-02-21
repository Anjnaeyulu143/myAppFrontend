import React from "react";
import { Work } from "./container/Work/Work";
import { Navbar } from "./components/Navbar/Navbar";
import About from "./container/About/About";
import { Footer } from "./container/Footer/Footer";
import { Skills } from "./container/Skills/Skills";
import Header from "./container/Header/Header";
import { Testimonial } from "./container/Testimonial/Testimonial";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Footer />
      <Skills />
      <Testimonial />
      <Work />
    </div>
  );
};

export default App;
