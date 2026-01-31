export default function TopComicsList({ comics }) {
  const rankBg = (i) =>
    i === 0 ? "bg-yellow-500" :
    i === 1 ? "bg-gray-400" :
    i === 2 ? "bg-orange-600" : "bg-red-600";

  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <h3 className="text-xl font-semibold mb-4">🏆 Top Selling Comics</h3>

      <div className="space-y-3">
        {comics.map((c, i) => (
          <div key={i} className="flex justify-between items-center bg-gray-700 p-3 rounded-lg">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${rankBg(i)}`}>
                {i + 1}
              </div>
              <div>
                <p className="font-medium">{c.title}</p>
                <p className="text-gray-400 text-sm">{c.publisher} • {c.rating} ⭐</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-green-400 font-semibold">{(c.sales / 1000).toFixed(1)}k</p>
              <p className="text-gray-500 text-xs">copies</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
