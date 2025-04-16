"use client";
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function ReboundsChart({
  timeframe
}) {
  // Mock data - in a real app, this would come from an API
  const data = {
    "season-2023": [
      { game: "Game 1", offensive: 2, defensive: 5, opponent: "DEN" },
      { game: "Game 2", offensive: 1, defensive: 7, opponent: "PHX" },
      { game: "Game 3", offensive: 3, defensive: 6, opponent: "SAC" },
      { game: "Game 4", offensive: 0, defensive: 8, opponent: "LAC" },
      { game: "Game 5", offensive: 2, defensive: 7, opponent: "ORL" },
      { game: "Game 6", offensive: 1, defensive: 5, opponent: "MIA" },
      { game: "Game 7", offensive: 3, defensive: 6, opponent: "HOU" },
      { game: "Game 8", offensive: 2, defensive: 4, opponent: "CLE" },
      { game: "Game 9", offensive: 1, defensive: 7, opponent: "POR" },
      { game: "Game 10", offensive: 2, defensive: 6, opponent: "MEM" },
    ],
    "season-2022": [
      { game: "Game 1", offensive: 3, defensive: 6, opponent: "GSW" },
      { game: "Game 2", offensive: 1, defensive: 8, opponent: "LAC" },
      { game: "Game 3", offensive: 2, defensive: 7, opponent: "POR" },
      { game: "Game 4", offensive: 3, defensive: 5, opponent: "DEN" },
      { game: "Game 5", offensive: 2, defensive: 7, opponent: "MIN" },
      { game: "Game 6", offensive: 1, defensive: 9, opponent: "NOP" },
      { game: "Game 7", offensive: 4, defensive: 6, opponent: "UTA" },
      { game: "Game 8", offensive: 2, defensive: 7, opponent: "CLE" },
      { game: "Game 9", offensive: 1, defensive: 8, opponent: "BKN" },
      { game: "Game 10", offensive: 3, defensive: 6, opponent: "DET" },
    ],
    "season-2021": [
      { game: "Game 1", offensive: 2, defensive: 7, opponent: "GSW" },
      { game: "Game 2", offensive: 3, defensive: 6, opponent: "PHX" },
      { game: "Game 3", offensive: 1, defensive: 8, opponent: "MEM" },
      { game: "Game 4", offensive: 2, defensive: 7, opponent: "SAS" },
      { game: "Game 5", offensive: 3, defensive: 5, opponent: "OKC" },
      { game: "Game 6", offensive: 2, defensive: 7, opponent: "CLE" },
      { game: "Game 7", offensive: 1, defensive: 8, opponent: "HOU" },
      { game: "Game 8", offensive: 3, defensive: 6, opponent: "POR" },
      { game: "Game 9", offensive: 2, defensive: 7, opponent: "CHA" },
      { game: "Game 10", offensive: 1, defensive: 8, opponent: "CHI" },
    ],
    "last-10": [
      { game: "vs PHX", offensive: 2, defensive: 6, opponent: "PHX" },
      { game: "vs MIL", offensive: 1, defensive: 7, opponent: "MIL" },
      { game: "vs GSW", offensive: 3, defensive: 5, opponent: "GSW" },
      { game: "vs MIN", offensive: 2, defensive: 6, opponent: "MIN" },
      { game: "vs MEM", offensive: 1, defensive: 8, opponent: "MEM" },
      { game: "vs NOP", offensive: 2, defensive: 7, opponent: "NOP" },
      { game: "vs DAL", offensive: 3, defensive: 5, opponent: "DAL" },
      { game: "vs OKC", offensive: 1, defensive: 6, opponent: "OKC" },
      { game: "vs DEN", offensive: 2, defensive: 7, opponent: "DEN" },
      { game: "vs LAC", offensive: 1, defensive: 6, opponent: "LAC" },
    ],
    "playoffs-2023": [
      { game: "Game 1", offensive: 3, defensive: 8, opponent: "MEM" },
      { game: "Game 2", offensive: 2, defensive: 10, opponent: "MEM" },
      { game: "Game 3", offensive: 1, defensive: 9, opponent: "MEM" },
      { game: "Game 4", offensive: 3, defensive: 7, opponent: "MEM" },
      { game: "Game 5", offensive: 2, defensive: 8, opponent: "MEM" },
      { game: "Game 6", offensive: 3, defensive: 9, opponent: "MEM" },
      { game: "Game 1", offensive: 2, defensive: 8, opponent: "DEN" },
      { game: "Game 2", offensive: 3, defensive: 7, opponent: "DEN" },
      { game: "Game 3", offensive: 2, defensive: 8, opponent: "DEN" },
      { game: "Game 4", offensive: 4, defensive: 9, opponent: "DEN" },
    ],
    career: [
      { game: "2003-04", offensive: 1.3, defensive: 4.2, opponent: "CLE" },
      { game: "2008-09", offensive: 1.3, defensive: 6.3, opponent: "CLE" },
      { game: "2012-13", offensive: 1.3, defensive: 6.8, opponent: "MIA" },
      { game: "2016-17", offensive: 1.3, defensive: 7.3, opponent: "CLE" },
      { game: "2018-19", offensive: 1.0, defensive: 7.4, opponent: "LAL" },
      { game: "2020-21", offensive: 0.6, defensive: 7.1, opponent: "LAL" },
      { game: "2022-23", offensive: 0.8, defensive: 7.5, opponent: "LAL" },
      { game: "2023-24", offensive: 0.7, defensive: 6.6, opponent: "LAL" },
    ],
  }

  const chartData = data[timeframe]

  return (
    <ChartContainer
      config={{
        offensive: {
          label: "Offensive Rebounds",
          color: "hsl(var(--chart-1))",
        },
        defensive: {
          label: "Defensive Rebounds",
          color: "hsl(var(--chart-2))",
        },
      }}
      className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="game" stroke="#9CA3AF" tick={{ fill: "#9CA3AF" }} />
          <YAxis stroke="#9CA3AF" tick={{ fill: "#9CA3AF" }} />
          <ChartTooltip
            content={
              <ChartTooltipContent
                formatValue={(value) => `${value} reb`}
                formatLabel={(label, payload) => {
                  if (payload && payload.length > 0) {
                    const dataPoint = payload[0].payload
                    return `${label} ${dataPoint.opponent ? `vs ${dataPoint.opponent}` : ""}`
                  }
                  return label
                }} />
            } />
          <Bar
            dataKey="offensive"
            stackId="a"
            fill="var(--color-offensive)"
            radius={[4, 4, 0, 0]} />
          <Bar
            dataKey="defensive"
            stackId="a"
            fill="var(--color-defensive)"
            radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
