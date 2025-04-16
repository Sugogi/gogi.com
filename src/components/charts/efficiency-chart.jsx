"use client";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent } from "@/components/ui/card"

export function EfficiencyChart({
  timeframe
}) {
  // Mock data - in a real app, this would come from an API
  const data = {
    "season-2023": {
      fg: 54.0,
      threePoint: 41.0,
      ft: 75.5,
      missed: 45.0,
    },
    "season-2022": {
      fg: 50.0,
      threePoint: 32.1,
      ft: 76.8,
      missed: 50.0,
    },
    "season-2021": {
      fg: 52.4,
      threePoint: 35.9,
      ft: 75.6,
      missed: 47.6,
    },
    "last-10": {
      fg: 53.2,
      threePoint: 39.8,
      ft: 77.3,
      missed: 46.8,
    },
    "playoffs-2023": {
      fg: 49.8,
      threePoint: 26.4,
      ft: 75.9,
      missed: 50.2,
    },
    career: {
      fg: 50.5,
      threePoint: 34.8,
      ft: 73.5,
      missed: 49.5,
    },
  }

  const stats = data[timeframe]

  const chartData = [
    { name: "Field Goals", value: stats.fg },
    { name: "Three Pointers", value: stats.threePoint },
    { name: "Free Throws", value: stats.ft },
  ]

  const COLORS = ["#F59E0B", "#3B82F6", "#10B981"]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ChartContainer
        config={{
          fg: {
            label: "Field Goal %",
            color: "#F59E0B",
          },
          threePoint: {
            label: "Three Point %",
            color: "#3B82F6",
          },
          ft: {
            label: "Free Throw %",
            color: "#10B981",
          },
        }}
        className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<ChartTooltipContent formatValue={(value) => `${value}%`} />} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
      <Card className="bg-slate-800 border-slate-700">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4">Shooting Breakdown</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                  Field Goal %
                </span>
                <span className="font-bold">{stats.fg}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2.5">
                <div
                  className="bg-yellow-500 h-2.5 rounded-full"
                  style={{ width: `${stats.fg}%` }}></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                  Three Point %
                </span>
                <span className="font-bold">{stats.threePoint}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${stats.threePoint}%` }}></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></span>
                  Free Throw %
                </span>
                <span className="font-bold">{stats.ft}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2.5">
                <div
                  className="bg-emerald-500 h-2.5 rounded-full"
                  style={{ width: `${stats.ft}%` }}></div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700">
              <div className="flex justify-between items-center text-lg">
                <span>Effective Field Goal %</span>
                <span className="font-bold">{(stats.fg + 0.5 * stats.threePoint).toFixed(1)}%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
