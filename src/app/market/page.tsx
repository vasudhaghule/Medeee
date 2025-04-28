"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MarketCard from "../Components/Market_card";
import Footer from "../Components/PublicComponents/Footer";
import Header from "@/components/ui/Header";

const categories = [
  "Politics",
  "Sports",
  "Culture",
  "Crypto",
  "Climate",
  "Economics",
  "Companies",
  "Financials",
  "Tech & Science",
  "Health",
  "World",
  "Transportation",
];

const viewOptions = ["Trending", "Biggest movers", "New", "Closing", "Cadence"];

export default function MarketsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Politics");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
            <div className="flex space-x-6 py-4 min-w-max">
              {categories?.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-sm whitespace-nowrap ${
                    selectedCategory === category
                      ? "text-gray-900 font-medium"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto px-4 py-8 ">
        <div className="flex  justify-between mb-8">
          <h1 className="text-2xl font-semibold">Markets</h1>
          <div className=" items-center sm:flex hidden ">
            <Tabs defaultValue="trending" className="mr-4 sm:block hidden">
              <TabsList className="h-auto p-0 bg-transparent gap-6 ">
                {viewOptions?.map((option) => (
                  <TabsTrigger
                    key={option}
                    value={option.toLowerCase().replace(" ", "-")}
                    className={`text-sm   data-[state=active]:text-gray-900 data-[state=active]:font-medium 
                    text-gray-500 hover:text-gray-900 px-0 py-0 rounded-none border-0 bg-transparent
                    data-[state=active]:bg-transparent  data-[state=active]:shadow-none`}
                  >
                    {option}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          <div className=" flex relative sm:hidden mr-[27px]">
            <Button
              variant="ghost"
              onClick={() => setShowMenu((prev) => !prev)}
              size="icon"
              className=" sm:hidden absolute overflow-visible block ml-2"
            >
              <Menu className="h-5 w-5" />
            </Button>
            {showMenu && (
              <div className=" flex p-4 flex-col absolute  rounded-2xl bg-white z-50 w-[150px] shadow-md gap-4 items-center   top-[40px] right-[-5px] ">
                {viewOptions?.map((option, index) => (
                  <p key={index}>{option}</p>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <MarketCard
            compact
            title="Which Senators will vote for Kash Patel?"
            image={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%2011.32.25%E2%80%AFam-hlpj18X6JEHzTWwz0WWZUfaJvN2aso.png`}
            options={[
              { label: "Mitch McConnell", percentage: 22 },
              { label: "Lisa Murkowski", percentage: 93 },
            ]}
            volume="1,625,342"
          />
          {/* Additional MarketCard components remain the same */}
        </div>
      </main>

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
