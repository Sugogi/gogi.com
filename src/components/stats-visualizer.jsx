"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PointsChart } from "@/components/charts/points-chart"
import { ReboundsChart } from "@/components/charts/rebounds-chart"
import { AssistsChart } from "@/components/charts/assists-chart"
import { EfficiencyChart } from "@/components/charts/efficiency-chart"
import { Loader2 } from "lucide-react"
import { PlayerInfo } from "@/components/player-info"

export function StatsVisualizer() {
  const [timeframe, setTimeframe] = useState("season-2023")
  const [isLoading, setIsLoading] = useState(false)
  const [dataLoaded, setDataLoaded] = useState(false)

  const handleFetchStats = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setDataLoaded(true)
    }, 1500)
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>LeBron James Box Score Visualizer</CardTitle>
          <CardDescription>
            Select a timeframe and click "Visualize Stats" to see LeBron's performance data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="w-full md:w-64">
              <Select value={timeframe} onValueChange={setTimeframe}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="season-2023">2023-24 Season</SelectItem>
                  <SelectItem value="season-2022">2022-23 Season</SelectItem>
                  <SelectItem value="season-2021">2021-22 Season</SelectItem>
                  <SelectItem value="last-10">Last 10 Games</SelectItem>
                  <SelectItem value="playoffs-2023">2023 Playoffs</SelectItem>
                  <SelectItem value="career">Career Averages</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              onClick={handleFetchStats}
              disabled={isLoading}
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-900">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading Stats...
                </>
              ) : (
                "Visualize Stats"
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
      {dataLoaded && (
        <>
          <PlayerInfo timeframe={timeframe} />

          <Tabs defaultValue="points" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
              <TabsTrigger value="points">Points</TabsTrigger>
              <TabsTrigger value="rebounds">Rebounds</TabsTrigger>
              <TabsTrigger value="assists">Assists</TabsTrigger>
              <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
            </TabsList>
            <TabsContent value="points" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Points Per Game</CardTitle>
                  <CardDescription>
                    LeBron's scoring output for{" "}
                    {timeframe === "season-2023"
                      ? "2023-24 Season"
                      : timeframe === "season-2022"
                        ? "2022-23 Season"
                        : timeframe === "season-2021"
                          ? "2021-22 Season"
                          : timeframe === "last-10"
                            ? "Last 10 Games"
                            : timeframe === "playoffs-2023"
                              ? "2023 Playoffs"
                              : "Career"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <PointsChart timeframe={timeframe} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="rebounds" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Rebounds Per Game</CardTitle>
                  <CardDescription>
                    LeBron's rebounding numbers for{" "}
                    {timeframe === "season-2023"
                      ? "2023-24 Season"
                      : timeframe === "season-2022"
                        ? "2022-23 Season"
                        : timeframe === "season-2021"
                          ? "2021-22 Season"
                          : timeframe === "last-10"
                            ? "Last 10 Games"
                            : timeframe === "playoffs-2023"
                              ? "2023 Playoffs"
                              : "Career"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ReboundsChart timeframe={timeframe} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="assists" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Assists Per Game</CardTitle>
                  <CardDescription>
                    LeBron's assist numbers for{" "}
                    {timeframe === "season-2023"
                      ? "2023-24 Season"
                      : timeframe === "season-2022"
                        ? "2022-23 Season"
                        : timeframe === "season-2021"
                          ? "2021-22 Season"
                          : timeframe === "last-10"
                            ? "Last 10 Games"
                            : timeframe === "playoffs-2023"
                              ? "2023 Playoffs"
                              : "Career"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AssistsChart timeframe={timeframe} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="efficiency" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Shooting Efficiency</CardTitle>
                  <CardDescription>
                    LeBron's shooting percentages for{" "}
                    {timeframe === "season-2023"
                      ? "2023-24 Season"
                      : timeframe === "season-2022"
                        ? "2022-23 Season"
                        : timeframe === "season-2021"
                          ? "2021-22 Season"
                          : timeframe === "last-10"
                            ? "Last 10 Games"
                            : timeframe === "playoffs-2023"
                              ? "2023 Playoffs"
                              : "Career"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <EfficiencyChart timeframe={timeframe} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  );
}
