import { Crown } from "lucide-react"

export function StatsHeader() {
  return (
    <header className="bg-slate-800 border-b border-slate-700 py-6">
      <div
        className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Crown className="h-8 w-8 text-yellow-400" />
          <h1 className="text-2xl md:text-3xl font-bold">LeBron James Stats Visualizer</h1>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center text-slate-900 font-bold">
            23
          </div>
          <span className="text-lg font-semibold">The King's Dashboard</span>
        </div>
      </div>
    </header>
  );
}
