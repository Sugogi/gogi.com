import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function PlayerInfo({
  timeframe
}) {
  // This would normally come from an API
  const stats = {
    "season-2023": {
      ppg: 25.7,
      rpg: 7.3,
      apg: 8.3,
      fg: 54.0,
      threePoint: 41.0,
      team: "Los Angeles Lakers",
      games: 71,
    },
    "season-2022": {
      ppg: 28.9,
      rpg: 8.3,
      apg: 6.8,
      fg: 50.0,
      threePoint: 32.1,
      team: "Los Angeles Lakers",
      games: 55,
    },
    "season-2021": {
      ppg: 30.3,
      rpg: 8.2,
      apg: 6.2,
      fg: 52.4,
      threePoint: 35.9,
      team: "Los Angeles Lakers",
      games: 56,
    },
    "last-10": {
      ppg: 24.8,
      rpg: 7.1,
      apg: 9.2,
      fg: 53.2,
      threePoint: 39.8,
      team: "Los Angeles Lakers",
      games: 10,
    },
    "playoffs-2023": {
      ppg: 24.5,
      rpg: 9.9,
      apg: 6.5,
      fg: 49.8,
      threePoint: 26.4,
      team: "Los Angeles Lakers",
      games: 16,
    },
    career: {
      ppg: 27.1,
      rpg: 7.5,
      apg: 7.4,
      fg: 50.5,
      threePoint: 34.8,
      team: "Career",
      games: 1461,
    },
  }

  const currentStats = stats[timeframe]

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div
            className="relative h-48 w-48 rounded-full overflow-hidden border-4 border-yellow-500">
            <Image
              src="/placeholder.svg?height=192&width=192"
              alt="LeBron James"
              width={192}
              height={192}
              className="object-cover" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">LeBron James</h2>
            <p className="text-yellow-400 mb-4">
              {currentStats.team} • #{timeframe === "career" ? "Career Stats" : "23"}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-slate-700 p-3 rounded-lg">
                <div className="text-3xl font-bold">{currentStats.ppg}</div>
                <div className="text-sm text-slate-300">PPG</div>
              </div>
              <div className="bg-slate-700 p-3 rounded-lg">
                <div className="text-3xl font-bold">{currentStats.rpg}</div>
                <div className="text-sm text-slate-300">RPG</div>
              </div>
              <div className="bg-slate-700 p-3 rounded-lg">
                <div className="text-3xl font-bold">{currentStats.apg}</div>
                <div className="text-sm text-slate-300">APG</div>
              </div>
              <div className="bg-slate-700 p-3 rounded-lg">
                <div className="text-3xl font-bold">{currentStats.fg}%</div>
                <div className="text-sm text-slate-300">FG%</div>
              </div>
              <div className="bg-slate-700 p-3 rounded-lg">
                <div className="text-3xl font-bold">{currentStats.threePoint}%</div>
                <div className="text-sm text-slate-300">3PT%</div>
              </div>
              <div className="bg-slate-700 p-3 rounded-lg">
                <div className="text-3xl font-bold">{currentStats.games}</div>
                <div className="text-sm text-slate-300">Games</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
