import { useState, useMemo } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import StatCard from "../components/stats/StatCard";
import SalesAreaChart from "../components/charts/SalesAreaChart";
import PublisherPieChart from "../components/charts/PublisherPieChart";
import GenreBarChart from "../components/charts/GenreBarChart";
import TopComicsList from "../components/lists/TopComicsList";
import {
  monthlyData,
  weeklyData,
  publisherData,
  genreData,
  topComics,
} from "../data/dashboardData";

// (reuse your existing data arrays here)


export default function Dashboard() {
  const [timeRange, setTimeRange] = useState("month");

  const data = timeRange === "month" ? monthlyData : weeklyData;

  const stats = useMemo(() => {
    const totalSales = data.reduce((s, i) => s + i.sales, 0);
    const totalReaders = data.reduce((s, i) => s + i.readers, 0);
    const totalIssues = data.reduce((s, i) => s + i.issues, 0);
    const avgRating = (data.reduce((s, i) => s + i.rating, 0) / data.length).toFixed(1);

    return [
      { title: "Total Sales", value: `${(totalSales / 1000).toFixed(0)}k`, change: "+18.3%" },
      { title: "Active Readers", value: `${(totalReaders / 1000).toFixed(0)}k`, change: "+12.7%" },
      { title: "Issues Released", value: totalIssues, change: "+9.2%" },
      { title: "Avg Rating", value: `${avgRating} ⭐`, change: "+0.3" },
    ];
  }, [data]);

  return (
    <DashboardLayout
      title="Comic Book Analytics"
      subtitle="Track sales, readership, and trending comics"
    >
      {/* Controls */}
      <div className="flex gap-2 mb-6">
        <button onClick={() => setTimeRange("week")} className="px-4 py-2 bg-gray-700 rounded">
          Week
        </button>
        <button onClick={() => setTimeRange("month")} className="px-4 py-2 bg-red-600 rounded">
          Month
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((s, i) => <StatCard key={i} {...s} />)}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <SalesAreaChart data={data} xKey={timeRange === "month" ? "month" : "week"} />
        <PublisherPieChart data={publisherData} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GenreBarChart data={genreData} />
        <TopComicsList comics={topComics} />
      </div>
    </DashboardLayout>
  );
}
