export default function StatCard({ title, value, change }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-red-500 transition">
      <p className="text-gray-400 text-sm mb-1">{title}</p>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-green-400 text-sm mt-1">{change}</p>
    </div>
  );
}
