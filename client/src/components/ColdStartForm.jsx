import React, { useState } from "react";
import axios from "axios";
import ScoreResultCard from "./ScoreResultCard";

export default function ColdStartForm() {
  const [form, setForm] = useState({
    energyConsumption: "",
    mobileRecharge: "",
    utilityBills: "",
    householdSize: "",
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/api/score/coldstart", form);
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Error calculating score!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          name="energyConsumption"
          placeholder="Monthly Energy Consumption (kWh)"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />
        <input
          name="mobileRecharge"
          placeholder="Average Mobile Recharge (₹)"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />
        <input
          name="utilityBills"
          placeholder="Avg Utility Bill (₹)"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />
        <input
          name="householdSize"
          placeholder="Household Size"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Scoring..." : "Generate Score"}
        </button>
      </form>

      {result && <ScoreResultCard result={result} />}
    </>
  );
}
