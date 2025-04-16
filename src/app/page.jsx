import { StatsVisualizer } from "@/components/stats-visualizer"
import { StatsHeader } from "@/components/stats-header"

export default function Home() {
  return (
    <main
      className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <StatsHeader />
      <div className="container mx-auto px-4 py-8">
        <StatsVisualizer />
      </div>
    </main>
  );
}
