"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/ui/Header";
import Footer from "../Components/PublicComponents/Footer";
import image from "../../../public/assets/IMG_5481@2x.png";

const categories = [
  "Trending",
  "New",
  "League of Legends",
  "Counter-Strike",
  "Dota 2",
  "Valorant",
  "Overwatch",
  "Rocket League",
  "Fortnite",
  "PUBG",
  "Apex Legends",
  "Hearthstone",
];

const todayEvents = [
  {
    id: 1,
    type: "League of Legends - LCS",
    time: "Mar 13, 3:00 PM EDT",
    image: image,
    matches: [
      {
        team1: "Cloud9",
        team1Code: "C9",
        team1Odds: "76¢",
        team2: "Team Liquid",
        team2Code: "TL",
        team2Odds: "32¢",
      },
    ],
  },
  {
    id: 2,
    image: image,
    type: "Counter-Strike - ESL Pro League",
    time: "Mar 13, 12:00 PM EDT",
    round: "Group Stage",
    matches: [
      {
        team1: "Natus Vincere",
        team1Code: "NAVI",
        team1Odds: "84¢",
        team2: "FaZe Clan",
        team2Code: "FAZE",
        team2Odds: "25¢",
      },
    ],
  },
  {
    id: 3,
    image: image,
    type: "Valorant - VCT Americas",
    time: "Mar 13, 5:30 PM EDT",
    round: "Group Stage",
    matches: [
      {
        team1: "Sentinels",
        team1Code: "SEN",
        team1Odds: "62¢",
        team2: "100 Thieves",
        team2Code: "100T",
        team2Odds: "45¢",
      },
    ],
  },
  {
    id: 4,
    image: image,
    type: "Dota 2 - ESL One",
    time: "Mar 13, 2:30 PM EDT",
    round: "Quarterfinal",
    matches: [
      {
        team1: "Team Secret",
        team1Code: "SECRET",
        team1Odds: "51¢",
        team2: "OG",
        team2Code: "OG",
        team2Odds: "60¢",
      },
    ],
  },
  {
    id: 5,
    image: image,
    type: "Rocket League - RLCS",
    time: "Mar 13, 8:00 PM EDT",
    matches: [
      {
        team1: "G2 Esports",
        team1Code: "G2",
        team1Odds: "70¢",
        team2: "NRG",
        team2Code: "NRG",
        team2Odds: "39¢",
      },
    ],
  },
];

const tomorrowEvents = [
  {
    id: 6,
    image: image,
    type: "Overwatch - OWL",
    time: "Mar 14, 11:00 AM EDT",
    round: "Regular Season",
    matches: [
      {
        team1: "San Francisco Shock",
        team1Code: "SFS",
        team1Odds: "81¢",
        team2: "Seoul Dynasty",
        team2Code: "SEO",
        team2Odds: "24¢",
      },
    ],
  },
  {
    id: 7,
    image: image,
    type: "League of Legends - LEC",
    time: "Mar 14, 1:00 PM EDT",
    round: "Playoffs",
    matches: [
      {
        team1: "G2 Esports",
        team1Code: "G2",
        team1Odds: "65¢",
        team2: "Fnatic",
        team2Code: "FNC",
        team2Odds: "42¢",
      },
    ],
  },
];

export default function ESportsPage() {
  const [selectedEvent, setSelectedEvent] = useState(todayEvents[0]);
  const [selectedTab, setSelectedTab] = useState("buy");

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
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

      {/* Advertisement Banner */}
      <div className="bg-gradient-to-r from-violet-600 via-violet-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                The International 2025
              </h2>
              <p className="text-lg mb-4">
                Predict the winners of the biggest Dota 2 tournament of the year
              </p>
              <div className="flex gap-4">
                <Button className="bg-[#00E5AC] hover:bg-[#00E5AC]/90 text-black">
                  Place Predictions
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white bg-transparent hover:bg-white hover:text-black "
                >
                  Learn More <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative w-full md:w-1/3 h-48 md:h-64">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src="/assets/images/KXSHUTDOWNBYDATEjpeg.jpeg"
                      alt="The International 2025"
                      fill
                      className="object-cover rounded-lg opacity-80"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 px-4 py-2 rounded-full">
                        <span className="text-xl font-bold">
                          $40M Prize Pool
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between  w-full items-center mt-6 text-sm">
            <div className="flex sm:flex-row  w-full justify-between sm:justify-start items-center sm:gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span>Live Now</span>
              </div>
              <span>Oct 12 - Oct 27, 2025</span>
            </div>
            <div className="flex w-full items-center  justify-center sm:justify-end gap-2">
              <span>Sponsored by</span>
              <span className="font-bold">Aegis Gaming</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-full sm:col-span-8 order-2 md:order-1 ">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Today</h2>

              {todayEvents.map((event) => (
                <div
                  key={event.id}
                  className="border-b py-4 pr-2 cursor-pointer hover:bg-gray-50"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Image
                      src={event?.image.src}
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
              <h2 className="text-2xl font-bold mb-6">Tomorrow</h2>

              {tomorrowEvents.map((event) => (
                <div
                  key={event.id}
                  className="border-b py-4 cursor-pointer hover:bg-gray-50"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Image
                      src={event?.image.src}
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

          <div className="col-span-full sm:col-span-4 order-1 md:order-2 ">
            <div className="border rounded-lg p-6 sticky top-8">
              <h3 className="font-medium mb-4">
                {selectedEvent?.matches[0]?.team1} vs{" "}
                {selectedEvent?.matches[0]?.team2}
              </h3>

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
                    {selectedEvent?.matches[0]?.team1Code}{" "}
                    {selectedEvent?.matches[0]?.team1Odds}
                  </Button>
                  <Button className="bg-red-600 hover:bg-red-700">
                    {selectedEvent?.matches[0]?.team2Code}{" "}
                    {selectedEvent?.matches[0]?.team2Odds}
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
                  <span className="font-medium">
                    {selectedEvent?.matches[0]?.team1Odds}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">
                    Payout if {selectedEvent?.matches[0]?.team1} wins
                  </span>
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
