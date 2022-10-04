import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import About from "./About";
import Contact from "./Contact";
import DetailPage from "./DetailPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Nav />}/>
        <Route path="/About" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/detailPage" element={<DetailPage/>} />
      </Routes>
    </Router>
  );
}

export default App
