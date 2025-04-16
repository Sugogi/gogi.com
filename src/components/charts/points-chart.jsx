"use client";
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function PointsChart({
  timeframe
}) {
  // Mock data - in a real app, this would come from an API
  const data = {
    "season-2023": [
      { game: "Game 1", points: 21, opponent: "DEN" },
      { game: "Game 2", points: 25, opponent: "PHX" },
      { game: "Game 3", points: 32, opponent: "SAC" },
      { game: "Game 4", points: 28, opponent: "LAC" },
      { game: "Game 5", points: 35, opponent: "ORL" },
      { game: "Game 6", points: 18, opponent: "MIA" },
      { game: "Game 7", points: 30, opponent: "HOU" },
      { game: "Game 8", points: 24, opponent: "CLE" },
      { game: "Game 9", points: 31, opponent: "POR" },
      { game: "Game 10", points: 26, opponent: "MEM" },
    ],
    "season-2022": [
      { game: "Game 1", points: 31, opponent: "GSW" },
      { game: "Game 2", points: 20, opponent: "LAC" },
      { game: "Game 3", points: 33, opponent: "POR" },
      { game: "Game 4", points: 26, opponent: "DEN" },
      { game: "Game 5", points: 30, opponent: "MIN" },
      { game: "Game 6", points: 28, opponent: "NOP" },
      { game: "Game 7", points: 37, opponent: "UTA" },
      { game: "Game 8", points: 24, opponent: "CLE" },
      { game: "Game 9", points: 27, opponent: "BKN" },
      { game: "Game 10", points: 32, opponent: "DET" },
    ],
    "season-2021": [
      { game: "Game 1", points: 34, opponent: "GSW" },
      { game: "Game 2", points: 29, opponent: "PHX" },
      { game: "Game 3", points: 26, opponent: "MEM" },
      { game: "Game 4", points: 30, opponent: "SAS" },
      { game: "Game 5", points: 32, opponent: "OKC" },
      { game: "Game 6", points: 36, opponent: "CLE" },
      { game: "Game 7", points: 30, opponent: "HOU" },
      { game: "Game 8", points: 25, opponent: "POR" },
      { game: "Game 9", points: 33, opponent: "CHA" },
      { game: "Game 10", points: 30, opponent: "CHI" },
    ],
    "last-10": [
      { game: "vs PHX", points: 28, opponent: "PHX" },
      { game: "vs MIL", points: 23, opponent: "MIL" },
      { game: "vs GSW", points: 31, opponent: "GSW" },
      { game: "vs MIN", points: 19, opponent: "MIN" },
      { game: "vs MEM", points: 26, opponent: "MEM" },
      { game: "vs NOP", points: 30, opponent: "NOP" },
      { game: "vs DAL", points: 25, opponent: "DAL" },
      { game: "vs OKC", points: 22, opponent: "OKC" },
      { game: "vs DEN", points: 27, opponent: "DEN" },
      { game: "vs LAC", points: 21, opponent: "LAC" },
    ],
    "playoffs-2023": [
      { game: "Game 1", points: 22, opponent: "MEM" },
      { game: "Game 2", points: 28, opponent: "MEM" },
      { game: "Game 3", points: 25, opponent: "MEM" },
      { game: "Game 4", points: 30, opponent: "MEM" },
      { game: "Game 5", points: 15, opponent: "MEM" },
      { game: "Game 6", points: 22, opponent: "MEM" },
      { game: "Game 1", points: 26, opponent: "DEN" },
      { game: "Game 2", points: 22, opponent: "DEN" },
      { game: "Game 3", points: 23, opponent: "DEN" },
      { game: "Game 4", points: 40, opponent: "DEN" },
    ],
    career: [
      { game: "2003-04", points: 20.9, opponent: "CLE" },
      { game: "2008-09", points: 28.4, opponent: "CLE" },
      { game: "2012-13", points: 26.8, opponent: "MIA" },
      { game: "2016-17", points: 26.4, opponent: "CLE" },
      { game: "2018-19", points: 27.4, opponent: "LAL" },
      { game: "2020-21", points: 25.0, opponent: "LAL" },
      { game: "2022-23", points: 28.9, opponent: "LAL" },
      { game: "2023-24", points: 25.7, opponent: "LAL" },
    ],
  }

  const chartData = data[timeframe]

  return (
    <ChartContainer
      config={{
        points: {
          label: "Points",
          color: "hsl(47, 100%, 50%)",
        },
      }}
      className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="game" stroke="#9CA3AF" tick={{ fill: "#9CA3AF" }} />
          <YAxis
            stroke="#9CA3AF"
            tick={{ fill: "#9CA3AF" }}
            domain={["dataMin - 5", "dataMax + 5"]} />
          <ChartTooltip
            content={
              <ChartTooltipContent
                formatValue={(value) => `${value} pts`}
                formatLabel={(label, payload) => {
                  if (payload && payload.length > 0) {
                    const dataPoint = payload[0].payload
                    return `${label} ${dataPoint.opponent ? `vs ${dataPoint.opponent}` : ""}`
                  }
                  return label
                }} />
            } />
          <Line
            type="monotone"
            dataKey="points"
            stroke="var(--color-points)"
            strokeWidth={3}
            dot={{ r: 6, fill: "#1F2937", strokeWidth: 3 }}
            activeDot={{ r: 8, fill: "#F59E0B" }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
