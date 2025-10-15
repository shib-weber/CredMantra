import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-semibold">NBCFDC Credit Scoring Dashboard</h1>
      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/scores">View Scores</Link>
        <Link to="/direct-lending">Direct Lending</Link>
      </div>
    </nav>
  );
}
