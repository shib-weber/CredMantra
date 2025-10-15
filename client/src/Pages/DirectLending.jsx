import React from "react";

export default function DirectLending() {
  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4 text-center">Direct Digital Lending</h2>
      <p className="text-gray-700 text-center">
        Beneficiaries with high scores (above threshold) can get instant approval.
        This module connects with the lending API to process same-day digital loan sanction.
      </p>
      <div className="text-center mt-6">
        <button className="bg-green-600 text-white px-6 py-2 rounded">
          Approve Eligible Beneficiaries
        </button>
      </div>
    </div>
  );
}
