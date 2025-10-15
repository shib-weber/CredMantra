import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import ScoreResultCard from "./ScoreResultCard";

const COLORS = ["#22c55e", "#3b82f6", "#facc15", "#ef4444"];

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [recentScores, setRecentScores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statsRes = await axios.get("/api/dashboard/summary");
        const scoresRes = await axios.get("/api/score/recent");
        setStats(statsRes.data);
        setRecentScores(scoresRes.data);
      } catch (err) {
        console.error("Error loading dashboard data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold text-center mb-6">Beneficiary Credit Scoring Dashboard</h2>

      {/* === SUMMARY CARDS === */}
      {stats ? (
        <div className="grid md:grid-cols-4 gap-4 mb-8 text-center">
          <div className="bg-blue-100 p-4 rounded-lg shadow">
            <p className="text-gray-700 font-medium">Total Beneficiaries</p>
            <h3 className="text-2xl font-bold text-blue-700">{stats.total}</h3>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow">
            <p className="text-gray-700 font-medium">Low Risk</p>
            <h3 className="text-2xl font-bold text-green-700">{stats.lowRisk}</h3>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg shadow">
            <p className="text-gray-700 font-medium">Moderate Risk</p>
            <h3 className="text-2xl font-bold text-yellow-700">{stats.moderateRisk}</h3>
          </div>
          <div className="bg-red-100 p-4 rounded-lg shadow">
            <p className="text-gray-700 font-medium">High Risk</p>
            <h3 className="text-2xl font-bold text-red-700">{stats.highRisk}</h3>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 mb-8">Loading statistics...</p>
      )}

      {/* === RISK BAND DISTRIBUTION === */}
      <div className="bg-gray-50 p-6 rounded-xl mb-10 shadow-inner">
        <h3 className="text-lg font-semibold text-center mb-4">Risk Band Distribution</h3>
        {stats && stats.riskDistribution ? (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={stats.riskDistribution}
                dataKey="value"
                nameKey="band"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                label
              >
                {stats.riskDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-gray-500">No distribution data available</p>
        )}
      </div>

      {/* === RECENT SCORES === */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-center">Recently Scored Beneficiaries</h3>
        {recentScores.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-4">
            {recentScores.map((res, i) => (
              <ScoreResultCard key={i} result={res} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No recent scoring data found</p>
        )}
      </div>
    </div>
  );
}
