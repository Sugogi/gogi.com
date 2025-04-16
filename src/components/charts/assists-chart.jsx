"use client";
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function AssistsChart({
  timeframe
}) {
  // Mock data - in a real app, this would come from an API
  const data = {
    "season-2023": [
      { game: "Game 1", assists: 5, opponent: "DEN" },
      { game: "Game 2", assists: 8, opponent: "PHX" },
      { game: "Game 3", assists: 10, opponent: "SAC" },
      { game: "Game 4", assists: 7, opponent: "LAC" },
      { game: "Game 5", assists: 11, opponent: "ORL" },
      { game: "Game 6", assists: 6, opponent: "MIA" },
      { game: "Game 7", assists: 9, opponent: "HOU" },
      { game: "Game 8", assists: 7, opponent: "CLE" },
      { game: "Game 9", assists: 12, opponent: "POR" },
      { game: "Game 10", assists: 8, opponent: "MEM" },
    ],
    "season-2022": [
      { game: "Game 1", assists: 7, opponent: "GSW" },
      { game: "Game 2", assists: 5, opponent: "LAC" },
      { game: "Game 3", assists: 9, opponent: "POR" },
      { game: "Game 4", assists: 6, opponent: "DEN" },
      { game: "Game 5", assists: 8, opponent: "MIN" },
      { game: "Game 6", assists: 10, opponent: "NOP" },
      { game: "Game 7", assists: 7, opponent: "UTA" },
      { game: "Game 8", assists: 6, opponent: "CLE" },
      { game: "Game 9", assists: 9, opponent: "BKN" },
      { game: "Game 10", assists: 7, opponent: "DET" },
    ],
    "season-2021": [
      { game: "Game 1", assists: 6, opponent: "GSW" },
      { game: "Game 2", assists: 8, opponent: "PHX" },
      { game: "Game 3", assists: 5, opponent: "MEM" },
      { game: "Game 4", assists: 7, opponent: "SAS" },
      { game: "Game 5", assists: 9, opponent: "OKC" },
      { game: "Game 6", assists: 6, opponent: "CLE" },
      { game: "Game 7", assists: 8, opponent: "HOU" },
      { game: "Game 8", assists: 5, opponent: "POR" },
      { game: "Game 9", assists: 7, opponent: "CHA" },
      { game: "Game 10", assists: 6, opponent: "CHI" },
    ],
    "last-10": [
      { game: "vs PHX", assists: 9, opponent: "PHX" },
      { game: "vs MIL", assists: 7, opponent: "MIL" },
      { game: "vs GSW", assists: 11, opponent: "GSW" },
      { game: "vs MIN", assists: 8, opponent: "MIN" },
      { game: "vs MEM", assists: 10, opponent: "MEM" },
      { game: "vs NOP", assists: 7, opponent: "NOP" },
      { game: "vs DAL", assists: 12, opponent: "DAL" },
      { game: "vs OKC", assists: 9, opponent: "OKC" },
      { game: "vs DEN", assists: 8, opponent: "DEN" },
      { game: "vs LAC", assists: 10, opponent: "LAC" },
    ],
    "playoffs-2023": [
      { game: "Game 1", assists: 5, opponent: "MEM" },
      { game: "Game 2", assists: 7, opponent: "MEM" },
      { game: "Game 3", assists: 6, opponent: "MEM" },
      { game: "Game 4", assists: 8, opponent: "MEM" },
      { game: "Game 5", assists: 5, opponent: "MEM" },
      { game: "Game 6", assists: 7, opponent: "MEM" },
      { game: "Game 1", assists: 6, opponent: "DEN" },
      { game: "Game 2", assists: 9, opponent: "DEN" },
      { game: "Game 3", assists: 6, opponent: "DEN" },
      { game: "Game 4", assists: 7, opponent: "DEN" },
    ],
    career: [
      { game: "2003-04", assists: 5.9, opponent: "CLE" },
      { game: "2008-09", assists: 7.2, opponent: "CLE" },
      { game: "2012-13", assists: 7.3, opponent: "MIA" },
      { game: "2016-17", assists: 8.7, opponent: "CLE" },
      { game: "2018-19", assists: 8.3, opponent: "LAL" },
      { game: "2020-21", assists: 7.8, opponent: "LAL" },
      { game: "2022-23", assists: 6.8, opponent: "LAL" },
      { game: "2023-24", assists: 8.3, opponent: "LAL" },
    ],
  }

  const chartData = data[timeframe]

  return (
    <ChartContainer
      config={{
        assists: {
          label: "Assists",
          color: "hsl(var(--chart-3))",
        },
      }}
      className="h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="game" stroke="#9CA3AF" tick={{ fill: "#9CA3AF" }} />
          <YAxis stroke="#9CA3AF" tick={{ fill: "#9CA3AF" }} domain={[0, "dataMax + 2"]} />
          <ChartTooltip
            content={
              <ChartTooltipContent
                formatValue={(value) => `${value} ast`}
                formatLabel={(label, payload) => {
                  if (payload && payload.length > 0) {
                    const dataPoint = payload[0].payload
                    return `${label} ${dataPoint.opponent ? `vs ${dataPoint.opponent}` : ""}`
                  }
                  return label
                }} />
            } />
          <Area
            type="monotone"
            dataKey="assists"
            stroke="var(--color-assists)"
            fill="var(--color-assists)"
            fillOpacity={0.3}
            strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
