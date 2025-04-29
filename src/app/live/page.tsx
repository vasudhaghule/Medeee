/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
// import Link from "next/link";
import Image from "next/image";
// import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "../Components/PublicComponents/Footer";
import Header from "@/components/ui/Header";

const categories = [
  "Trending",
  "New",
  "Football",
  "Basketball",
  "Cricket",
  "Tennis",
  "F1",
  "Golf",
  "Horseracing",
];

const todayEvents = [
  {
    id: 1,
    type: "PGA THE Players",
    time: "Mar 13, 8:00 AM EDT",
    matches: [
      {
        player1: "Scottie Scheffler",
        player1Odds: "16%",
        player2: "Collin Morikawa",
        player2Odds: "8%",
      },
    ],
  },
  {
    id: 2,
    type: "NCAA Basketball",
    time: "Mar 13, 12:00 PM EDT",
    round: "Round 2",
    matches: [
      {
        team1: "Oregon",
        team1Code: "ORE",
        team1Odds: "84¢",
        team2: "Indiana",
        team2Code: "IND",
        team2Odds: "50¢",
      },
    ],
  },
  {
    id: 3,
    type: "NCAA Basketball",
    time: "Mar 13, 2:30 PM EDT",
    round: "Round 2",
    matches: [
      {
        team1: "Wisconsin",
        team1Code: "WIS",
        team1Odds: "96¢",
        team2: "Northwestern",
        team2Code: "NW",
        team2Odds: "33¢",
      },
    ],
  },
  {
    id: 4,
    type: "NCAA Basketball",
    time: "Mar 13, 2:30 PM EDT",
    round: "Quarterfinal",
    matches: [
      {
        team1: "Xavier",
        team1Code: "XAV",
        team1Odds: "51¢",
        team2: "Marquette",
        team2Code: "MARQ",
        team2Odds: "60¢",
      },
    ],
  },
  {
    id: 5,
    type: "LIV LIV Golf",
    time: "Mar 13, 8:00 PM EDT",
    matches: [
      {
        player1: "Tyrrell Hatton",
        player1Odds: "10%",
        player2: "Bryson DeChambeau",
        player2Odds: "9%",
      },
    ],
  },
];

const saturdayEvents = [
  {
    id: 6,
    type: "NCAA Basketball",
    time: "Mar 15, 11:00 AM EDT",
    round: "Round 1",
    matches: [
      {
        team1: "Yale",
        team1Code: "YALE",
        team1Odds: "24¢",
        team2: "Auburn",
        team2Code: "AUB",
        team2Odds: "81¢",
      },
    ],
  },
];

export default function LivePage() {
  const [selectedEvent, setSelectedEvent] = useState(todayEvents[0]);
  const [selectedTab, setSelectedTab] = useState("buy");

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
            <div className="flex space-x-6 py-4 min-w-max">
              {categories.map((category) => (
                <button
                  key={category}
                  className="text-sm text-gray-500 hover:text-gray-900 whitespace-nowrap"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold block sm:hidden mb-6">Today</h2>
        <div className="grid grid-cols-1 lg:grid-cols-12  gap-8">
          <div className="col-span-8 order-2 md:order-1 ">
            <section className="mb-12">
              <h2 className="text-2xl font-bold hidden sm:block mb-6">Today</h2>

              {todayEvents.map((event) => (
                <div
                  key={event.id}
                  className="border-b py-4"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Image
                      src="/placeholder.svg?height=20&width=20"
                      alt={event.type}
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                    <span>{event.type}</span>
                  </div>

                  {event.matches.map((match, idx) => (
                    <div key={idx} className="mb-4">
                      {match.player1 ? (
                        // Player vs Player format
                        <>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">{match.player1}</span>
                            <div className="flex gap-2">
                              <span className="font-bold">
                                {match.player1Odds}
                              </span>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 h-8"
                              >
                                Yes
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-red-600 hover:text-red-700 hover:bg-red-50 h-8"
                              >
                                No
                              </Button>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{match.player2}</span>
                            <div className="flex gap-2">
                              <span className="font-bold">
                                {match.player2Odds}
                              </span>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 h-8"
                              >
                                Yes
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="text-red-600 hover:text-red-700 hover:bg-red-50 h-8"
                              >
                                No
                              </Button>
                            </div>
                          </div>
                        </>
                      ) : (
                        // Team vs Team format
                        <div className="flex flex-col gap-4">
                          <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                              <span className="font-medium">{match.team1}</span>
                            </div>
                            <div className="flex gap-2 items-center">
                              <Button
                                size="sm"
                                className="bg-blue-900 hover:bg-blue-800 text-white h-10 px-4"
                              >
                                <span className="mr-1">{match.team1Code}</span>
                                <span>{match.team1Odds}</span>
                              </Button>
                              <span className="text-sm text-gray-500">
                                $100 → $—
                              </span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                              <span className="font-medium">{match.team2}</span>
                            </div>
                            <div className="flex gap-2 items-center">
                              <Button
                                size="sm"
                                className="bg-red-600 hover:bg-red-700 text-white h-10 px-4"
                              >
                                <span className="mr-1">{match.team2Code}</span>
                                <span>{match.team2Odds}</span>
                              </Button>
                              <span className="text-sm text-gray-500">
                                $100 → $—
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="flex justify-end text-sm text-gray-500">
                    {event.round && (
                      <span className="mr-2">{event.round} ·</span>
                    )}
                    <span>{event.time}</span>
                  </div>
                </div>
              ))}
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Sat, Mar 15</h2>

              {saturdayEvents.map((event) => (
                <div
                  key={event.id}
                  className="border-b py-4"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Image
                      src="/placeholder.svg?height=20&width=20"
                      alt={event.type}
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                    <span>{event.type}</span>
                  </div>

                  {event.matches.map((match, idx) => (
                    <div key={idx} className="mb-4">
                      <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                          <div className="flex gap-2 items-center">
                            <span className="font-medium">{match.team1}</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <Button
                              size="sm"
                              className="bg-blue-900 hover:bg-blue-800 text-white h-10 px-4"
                            >
                              <span className="mr-1">{match.team1Code}</span>
                              <span>{match.team1Odds}</span>
                            </Button>
                            <span className="text-sm text-gray-500">
                              $100 → $—
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex gap-2 items-center">
                            <span className="font-medium">{match.team2}</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <Button
                              size="sm"
                              className="bg-orange-500 hover:bg-orange-600 text-white h-10 px-4"
                            >
                              <span className="mr-1">{match.team2Code}</span>
                              <span>{match.team2Odds}</span>
                            </Button>
                            <span className="text-sm text-gray-500">
                              $100 → $—
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-end text-sm text-gray-500">
                    {event.round && (
                      <span className="mr-2">{event.round} ·</span>
                    )}
                    <span>{event.time}</span>
                  </div>
                </div>
              ))}
            </section>
          </div>

          <div className=" col-span-8 sm:col-span-4 order-1 md:order-2">
            <div className="border rounded-lg p-6 sticky top-8">
              <h3 className="font-medium mb-4">
                {selectedEvent.type === "PGA THE Players" ||
                selectedEvent.type === "LIV LIV Golf"
                  ? "The Players Championship Winner?"
                  : `${selectedEvent.matches[0]?.team1 || ""} vs ${
                      selectedEvent.matches[0]?.team2 || ""
                    }`}
              </h3>

              {selectedEvent.type === "PGA THE Players" && (
                <div className="mb-4">
                  <div className="text-blue-600 font-medium">
                    Buy Yes · Scottie Scheffler
                  </div>
                </div>
              )}

              <div className="border-b mb-4">
                <Tabs defaultValue="buy" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger
                      value="buy"
                      onClick={() => setSelectedTab("buy")}
                    >
                      Buy
                    </TabsTrigger>
                    <TabsTrigger
                      value="sell"
                      onClick={() => setSelectedTab("sell")}
                    >
                      Sell
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">Pick a side</div>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Yes 17¢
                  </Button>
                  <Button className="bg-purple-500 hover:bg-purple-600">
                    No 85¢
                  </Button>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm">Amount</span>
                  <span className="font-medium">$0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Contracts</span>
                  <span className="font-medium">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Average price</span>
                  <span className="font-medium">17¢</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Payout if Yes wins</span>
                  <span className="font-medium">$0</span>
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Get Access
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
