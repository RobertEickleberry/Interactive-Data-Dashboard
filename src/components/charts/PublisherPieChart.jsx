import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function PublisherPieChart({ data }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 h-[320px]">
      <h3 className="text-xl font-semibold mb-4">🏢 Market Share</h3>

      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={100}>
            {data.map((p, i) => (
              <Cell key={i} fill={p.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
