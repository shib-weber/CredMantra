import React from "react";
import RiskBandCard from "./RiskBandCard";

export default function ScoreResultCard({ result }) {
  return (
    <div className="mt-6 p-6 bg-green-50 rounded-xl border">
      <h3 className="text-xl font-semibold">Composite Beneficiary Credit Score</h3>
      <p className="text-2xl font-bold text-blue-700 mt-2">{result.score}</p>
      <RiskBandCard band={result.riskBand} />
      <div className="mt-4 text-gray-700">
        <p><b>Income Category:</b> {result.incomeCategory}</p>
        <p><b>Repayment Behaviour:</b> {result.repaymentStatus}</p>
      </div>
    </div>
  );
}
