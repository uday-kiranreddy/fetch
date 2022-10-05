import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import About from "./About";
import DetailPage from "./DetailPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Nav />}/>
        <Route path="/About" element={<About/>} />
        <Route path="/detailPage/:login" element={<DetailPage/>} />
      </Routes>
    </Router>
  );
}

export default App
