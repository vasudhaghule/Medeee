// src/components/MarketCard.tsx

import Image from "next/image";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

interface Option {
  label: string;
  percentage: number;
  price?: {
    yes: string;
    no: string;
  };
  forecast: number;
  change: number;
}

interface MarketCardProps {
  title: string;
  image: string;
  options: Array<Option>;
  volume?: string;
  timeLeft?: string;
  compact?: boolean;
}

export default function MarketCard({
  title,
  image,
  options,
  volume,
  timeLeft,
  compact = false,
}: MarketCardProps) {
  return (
    <div className={`border rounded-xl ${compact ? "p-4" : "p-6"}`}>
      <div className="space-y-4">
        <div className="flex gap-4">
          <Image
            src={image || "/placeholder.svg"}
            alt="Market thumbnail"
            width={compact ? 60 : 80}
            height={compact ? 60 : 80}
            className="rounded-lg"
          />
          <h2
            className={`${
              compact ? "text-lg" : "text-xl"
            } font-semibold flex-1`}
          >
            {title}
          </h2>
          {!compact && options.length === 1 && (
            <div className="text-2xl font-bold">{options[0].percentage}%</div>
          )}
        </div>

        <div className="space-y-3">
          {options.length !== 1
            ? options.map((option, i) => (
                <React.Fragment key={i}>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="text-sm mb-1 flex justify-between">
                        <span>{option.label}</span>
                        <span className="font-medium">{option.percentage}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#00E5AC]"
                          style={{ width: `${option.percentage}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                      >
                        Yes
                        {option.price?.yes && (
                          <span className="ml-2 text-xs text-gray-500">
                            ${option.price.yes}
                          </span>
                        )}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        No
                        {option.price?.no && (
                          <span className="ml-2 text-xs text-gray-500">
                            ${option.price.no}
                          </span>
                        )}
                      </Button>
                    </div>
                  </div>
                </React.Fragment>
              ))
            : options.map((option, i) => (
                <React.Fragment key={i}>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="text-sm mb-1 flex justify-between">
                        <span>{option.label}</span>
                        <span className="font-medium">{option.percentage}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#00E5AC]"
                          style={{ width: `${option.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-blue-600 w-[50%] hover:text-blue-700 hover:bg-blue-50"
                    >
                      Yes
                      {option.price?.yes && (
                        <span className="ml-2 text-xs text-gray-500">
                          ${option.price.yes}
                        </span>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-600 w-[50%] hover:text-red-700 hover:bg-red-50"
                    >
                      No
                      {option.price?.no && (
                        <span className="ml-2 text-xs text-gray-500">
                          ${option.price.no}
                        </span>
                      )}
                    </Button>
                  </div>
                </React.Fragment>
              ))}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            ${volume}
            <Info className="w-4 h-4" />
          </div>
          {timeLeft && (
            <div className="text-red-500 font-medium">{timeLeft}</div>
          )}
        </div>
      </div>
    </div>
  );
}
