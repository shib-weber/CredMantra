import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import ViewScores from "./pages/ViewScores";
import DirectLending from "./pages/DirectLending";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scores" element={<ViewScores />} />
          <Route path="/direct-lending" element={<DirectLending />} />
        </Routes>
      </div>
    </Router>
  );
}
