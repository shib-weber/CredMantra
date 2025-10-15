import React, { useState } from "react";
import HistoryModelForm from "../components/HistoryModelForm";
import ColdStartForm from "../components/ColdStartForm";

export default function Home() {
  const [mode, setMode] = useState("history");

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        AI Credit Scoring — Model Selection
      </h2>

      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 mx-2 rounded-lg ${
            mode === "history" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setMode("history")}
        >
          History Mode
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded-lg ${
            mode === "cold" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setMode("cold")}
        >
          Cold Start Mode
        </button>
      </div>

      {mode === "history" ? <HistoryModelForm /> : <ColdStartForm />}
    </div>
  );
}
