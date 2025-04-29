"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Logo from "../../../public/assets/Logo-black.svg";

// Chart component for the poll visualization
const PollChart = () => {
  return (
    <div className="relative h-64 w-full mt-4">
      {/* Green line (Elon Musk) */}
      <div className="absolute inset-0">
        <svg viewBox="0 0 1000 300" className="w-full h-full">
          <path
            d="M0,75 C50,90 100,70 150,80 C200,85 250,75 300,60 C350,50 400,90 450,100 C500,105 550,100 600,95 C650,90 700,85 750,90 C800,95 850,85 900,80 C950,75 1000,70 1000,70"
            fill="none"
            stroke="#4ade80"
            strokeWidth="3"
          />
        </svg>
      </div>

      {/* Blue line (Mark Zuckerberg) */}
      <div className="absolute inset-0">
        <svg viewBox="0 0 1000 300" className="w-full h-full">
          <path
            d="M0,200 C50,200 100,200 150,200 C200,200 250,200 300,200 C350,200 400,200 450,200 C500,200 550,200 600,200 C650,200 700,200 750,210 C800,220 850,230 900,230 C950,230 1000,230 1000,230"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
          />
        </svg>
      </div>

      {/* Black line (Bernard Arnault) */}
      <div className="absolute inset-0">
        <svg viewBox="0 0 1000 300" className="w-full h-full">
          <path
            d="M0,220 C50,220 100,220 150,220 C200,220 250,220 300,220 C350,220 400,220 450,220 C500,220 550,220 600,220 C650,220 700,220 750,220 C800,220 850,220 900,220 C950,220 1000,220 1000,220"
            fill="none"
            stroke="#000000"
            strokeWidth="3"
          />
        </svg>
      </div>

      {/* Y-axis labels */}
      <div className="absolute right-0 top-0 h-full flex flex-col justify-between text-gray-400 text-xs">
        <div>100%</div>
        <div>75%</div>
        <div>50%</div>
        <div>25%</div>
        <div>0%</div>
      </div>

      {/* X-axis labels */}
      <div className="absolute bottom-0 w-full flex justify-between text-gray-400 text-xs">
        <div>Nov</div>
        <div>Dec</div>
        <div>Jan</div>
        <div>Feb</div>
        <div>Mar</div>
      </div>
    </div>
  );
};

// Legend component
const PollLegend = () => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
        <span className="text-green-500">Elon Musk 72%</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
        <span className="text-blue-500">Mark Zuckerberg 14%</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-black"></div>
        <span>Bernard Arnault & family 6%</span>
      </div>
    </div>
  );
};

export function WealthPollCard() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < 5 ? prev + 1 : 5));
  };

  return (
    <Card className="p-6 bg-white shadow-lg rounded-xl">
      <div className="grid gap-6 my-8">
        <div className="flex justify-between items-start">
          <div className="flex gap-4">
            <div className="w-24 h-24 relative overflow-hidden rounded-md">
              <Image
                src="/assets/images/KXSHUTDOWNBYDATEjpeg.jpeg"
                alt="Money image"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <div>
              <h2 className=" text-2xl md:text-3xl font-bold">
                Wealthiest person in the world this year?
              </h2>
            </div>
          </div>
          <Image
            src={Logo.src}
            width={100}
            height={100}
            className="mb-6 sm:block hidden"
            alt="Logo"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className=" text-[14px] sm:text-xl">Elon Musk</span>
              <span className=" text-[14px] md:text-2xl font-bold ">72%</span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="bg-blue-50 hover:bg-blue-100 text-blue-600 sm:text-[16px] text-[14px] rounded-full px-4"
                >
                  Yes
                </Button>
                <Button
                  variant="outline"
                  className="bg-purple-50 hover:bg-purple-100 text-purple-600 sm:text-[16px] text-[14px] rounded-full px-4"
                >
                  No
                </Button>
              </div>
            </div>

            <div className="flex justify-between items-center mb-4">
              <span className="text-[14px] sm:text-xl">
                Bernard Arnault & family
              </span>
              <span className="font-bold text-[14px] md:text-2xl">6%</span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-full px-4"
                >
                  Yes
                </Button>
                <Button
                  variant="outline"
                  className="bg-purple-50 hover:bg-purple-100 text-purple-600 rounded-full px-4"
                >
                  No
                </Button>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex gap-2  flex-col ">
                <span className="font-bold text-xl">News</span>
                <span className="text-gray-500">
                  Tesla&apos;s stock dropped 13% on Monday, continuing a steep
                  decline that has wiped out nearly...
                </span>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-400">$347,086</span>
                <Button variant="ghost" size="icon">
                  <Plus className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          <div>
            <PollLegend />
            <PollChart />
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <Button
            variant="ghost"
            onClick={handlePrevious}
            className="flex items-center gap-1"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="text-gray-500  sm:block hidden">
              Romania bars far-right frontrunner
            </span>
          </Button>

          <div className="flex gap-1">
            {[0, 1, 2, 3, 4, 5].map((dot) => (
              <div
                key={dot}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === dot ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            onClick={handleNext}
            className="flex items-center gap-1"
          >
            <span className="text-gray-500 sm:block hidden">
              SEC tournament
            </span>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
