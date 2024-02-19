import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import ViewBox from "./components/ViewBox";
import "./app.css";

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ViewBox />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
