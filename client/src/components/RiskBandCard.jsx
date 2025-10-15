import React from "react";

export default function RiskBandCard({ band }) {
  const colors = {
    "Low Risk - High Need": "bg-green-200",
    "Low Risk - Low Need": "bg-blue-200",
    "High Risk - High Need": "bg-yellow-200",
    "High Risk - Low Need": "bg-red-200",
  };

  return (
    <div className={`mt-3 p-3 rounded-lg font-semibold ${colors[band] || "bg-gray-200"}`}>
      {band}
    </div>
  );
}
