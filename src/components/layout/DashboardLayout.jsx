export default function DashboardLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 text-white">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold flex items-center gap-3">
            <span className="text-5xl">⚡</span>
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-400 mt-1">{subtitle}</p>
          )}
        </header>

        {children}
      </div>
    </div>
  );
}
