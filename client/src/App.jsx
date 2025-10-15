import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import LandingPage from "./Pages/LandingPage";
import ViewScores from "./Pages/ViewScores";
import DirectLending from "./Pages/DirectLending";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="" element={<LandingPage/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scores" element={<ViewScores />} />
          <Route path="/direct-lending" element={<DirectLending />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
