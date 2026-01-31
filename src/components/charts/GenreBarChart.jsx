import {
  BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

export default function GenreBarChart({ data }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 h-[320px]">
      <h3 className="text-xl font-semibold mb-4">🎭 Genre Performance</h3>

      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
          <XAxis dataKey="genre" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8B5CF6" />
          <Bar dataKey="revenue" fill="#F59E0B" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
