import {
  AreaChart, Area, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

export default function SalesAreaChart({ data, xKey }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 h-[320px]">
      <h3 className="text-xl font-semibold mb-4">📈 Sales & Readers</h3>

      <ResponsiveContainer>
        <AreaChart data={data}>
          <CartesianGrid stroke="#374151" strokeDasharray="3 3" />
          <XAxis dataKey={xKey} stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip />
          <Area dataKey="sales" stroke="#E23636" fill="#E23636" />
          <Area dataKey="readers" stroke="#0476F2" fill="#0476F2" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
