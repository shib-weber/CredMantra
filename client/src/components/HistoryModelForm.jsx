import React, { useState } from "react";
import axios from "axios";
import ScoreResultCard from "./ScoreResultCard";

export default function HistoryModelForm() {
  const [form, setForm] = useState({
    loanAmount: "",
    tenure: "",
    repayments: "",
    utilization: "",
    repeatBorrowing: ""
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/api/score/history", form);
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
          name="loanAmount"
          placeholder="Loan Amount"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />
        <input
          name="tenure"
          placeholder="Tenure (months)"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />
        <input
          name="repayments"
          placeholder="Repayment Behaviour (0-1)"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />
        <input
          name="utilization"
          placeholder="Loan Utilization (%)"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />
        <input
          name="repeatBorrowing"
          placeholder="Repeat Borrowing Count"
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
