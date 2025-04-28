"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronRight, ArrowUp, ArrowDown } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer from "../Components/PublicComponents/Footer";
import Header from "@/components/ui/Header";
const chartData = [
  { date: "Jan 26", value: 85 },
  { date: "Jan 28", value: 92 },
  { date: "Jan 31", value: 95 },
  { date: "Feb 2", value: 88 },
  { date: "Feb 10", value: 98 },
];

const candidates = [
  {
    name: "Steve Bannon",
    percentage: 18,
    change: -2,
    image: "/placeholder.svg",
  },
  {
    name: "Edward Snowden",
    percentage: 16,
    change: 2,
    image: "/placeholder.svg",
  },
  {
    name: "Rudy Giuliani",
    percentage: 15,
    change: -1,
    image: "/placeholder.svg",
  },
  { name: "Eric Adams", percentage: 11, change: 2, image: "/placeholder.svg" },
  {
    name: "Julian Assange",
    percentage: 10,
    change: 0,
    image: "/placeholder.svg",
  },
  { name: "Roger Ver", percentage: 9, change: -1, image: "/placeholder.svg" },
];

const relatedForecasts = [
  {
    title: "Deport illegal immigrants?",
    image: `https://sjc.microlink.io/MxMkoeBV_os-N4gZALDY62bgrvDo-_x6On1bBP2ALEXi6MPV-dbj3AcvQ4QkVKSPcZP1S4pKnhrlLle_dSRCWA.jpeg`,
    outcome: "yes",
    percentage: 75,
  },
  {
    title: "Trans athlete ban?",
    image: `https://sjc.microlink.io/MxMkoeBV_os-N4gZALDY62bgrvDo-_x6On1bBP2ALEXi6MPV-dbj3AcvQ4QkVKSPcZP1S4pKnhrlLle_dSRCWA.jpeg`,
    outcome: "yes",
    percentage: 82,
  },
  {
    title: "Voter ID requirement?",
    image: `https://sjc.microlink.io/MxMkoeBV_os-N4gZALDY62bgrvDo-_x6On1bBP2ALEXi6MPV-dbj3AcvQ4QkVKSPcZP1S4pKnhrlLle_dSRCWA.jpeg`,
    outcome: "pending",
    percentage: 48,
    change: -5,
  },
];

export default function ForecastsPage() {
  const [timeRange, setTimeRange] = useState("6H");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/forecasts" className="hover:text-gray-900">
            Trump
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span>Big Game</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h1 className="text-2xl font-bold mb-6">Trump's first 100 days</h1>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Who will be pardoned?</h2>

              <div className="space-y-3">
                {candidates.map((candidate) => (
                  <div key={candidate.name} className="flex items-center gap-4">
                    <Image
                      src={candidate.image || "/placeholder.svg"}
                      alt={candidate.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium">{candidate.name}</span>
                        <div className="flex items-center gap-2">
                          {candidate.change !== 0 && (
                            <>
                              {candidate.change > 0 ? (
                                <ArrowUp className="w-4 h-4 text-[#00E5AC]" />
                              ) : (
                                <ArrowDown className="w-4 h-4 text-red-500" />
                              )}
                              <span
                                className={
                                  candidate.change > 0
                                    ? "text-[#00E5AC]"
                                    : "text-red-500"
                                }
                              >
                                {Math.abs(candidate.change)}
                              </span>
                            </>
                          )}
                          <span className="font-semibold">
                            {candidate.percentage}%
                          </span>
                        </div>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#00E5AC]"
                          style={{ width: `${candidate.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:border-l lg:pl-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-gray-500">chance</div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={timeRange === "6H" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTimeRange("6H")}
                >
                  6H
                </Button>
                <Button
                  variant={timeRange === "ALL" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setTimeRange("ALL")}
                >
                  ALL
                </Button>
              </div>
            </div>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6B7280" }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6B7280" }}
                    domain={[0, 100]}
                    ticks={[0, 25, 50, 75, 100]}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#00E5AC"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="grid gap-6 md:grid-cols-3">
            {relatedForecasts.map((forecast) => (
              <div key={forecast.title} className="border rounded-lg p-4">
                <div className="flex gap-4 mb-4">
                  <Image
                    src={forecast.image || "/placeholder.svg"}
                    alt={forecast.title}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <h3 className="font-medium">{forecast.title}</h3>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Outcome is</span>
                    <span
                      className={`text-sm font-medium ${
                        forecast.outcome === "pending"
                          ? "text-gray-900"
                          : "text-[#00E5AC]"
                      }`}
                    >
                      {forecast.outcome}
                    </span>
                  </div>
                  {forecast.outcome === "pending" && (
                    <div className="flex items-center gap-1">
                      <span className="font-medium">
                        {forecast.percentage}%
                      </span>
                      <span className="text-sm text-red-500">
                        {forecast.change}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
