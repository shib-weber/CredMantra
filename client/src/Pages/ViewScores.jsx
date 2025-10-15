import React, { useEffect, useState } from "react";
import axios from "axios";
import ScoreResultCard from "../components/ScoreResultCard";

export default function ViewScores() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    axios.get("/api/score/all").then((res) => setScores(res.data));
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">All Beneficiary Scores</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {scores.map((r, i) => (
          <ScoreResultCard key={i} result={r} />
        ))}
      </div>
    </div>
  );
}
