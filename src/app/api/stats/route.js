import { NextResponse } from "next/server"

// This would be a real API endpoint that fetches data from a database or external API
export async function GET(request) {
  // Get the timeframe from the URL query parameters
  const { searchParams } = new URL(request.url)
  const timeframe = searchParams.get("timeframe") || "season-2023"

  // Mock data - in a real app, this would come from a database or external API
  const data = {
    "season-2023": {
      games: [
        { date: "2023-10-24", opponent: "DEN", points: 21, rebounds: 8, assists: 5 },
        { date: "2023-10-26", opponent: "PHX", points: 25, rebounds: 8, assists: 8 },
        { date: "2023-10-28", opponent: "SAC", points: 32, rebounds: 9, assists: 10 },
        // More games would be here
      ],
      averages: {
        ppg: 25.7,
        rpg: 7.3,
        apg: 8.3,
        fg: 54.0,
        threePoint: 41.0,
        ft: 75.5,
      },
    },
    // Other timeframes would be here
  }

  // Return the data for the requested timeframe
  return NextResponse.json(data[timeframe] || {});
}
