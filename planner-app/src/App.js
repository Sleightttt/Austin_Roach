import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ViewBox from "./components/ViewBox";
import About from "./components/About";
import Projects from "./components/Projects";
import Contract from "./components/Contract";
import Contact from "./components/Contact";
import "./app.css";
import video from "./assets/video/video_preview_h264.mp4";
import snow from "./assets/images/unsplash.jpg";

function App() {
  return (
    <div className="App">
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-background2">
        <img src={snow} />
      </div>
      <NavBar />
      <ViewBox>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ViewBox>
    </div>
  );
}

export default App;
