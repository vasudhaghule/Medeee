
"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MarketCard from "../app/Components/Market_card";
import FeatureCard from "../app/Components/Feature_card";
import TrendingTags from "../app/Components/Treading_tags";
import Footer from "../app/Components/PublicComponents/Footer";
import Header from "@/components/ui/Header";
import { WealthPollCard } from "./Components/wealth_poll-card";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-wh
    ite"
    >
      <Header />
      <div className="container mx-auto px-4 py-4">
        <Tabs defaultValue="trending" className="mb-6">
          <TabsList className="h-auto p-0 bg-transparent gap-4">
            <TabsTrigger
              value="trending"
              className="text-sm data-[state=active]:bg-[#00E5AC]/10 rounded-full px-4 py-1"
            >
              Trending
            </TabsTrigger>
            <TabsTrigger
              value="new"
              className="text-sm data-[state=active]:bg-[#00E5AC]/10 rounded-full px-4 py-1"
            >
              New
            </TabsTrigger>
            {[
              "Politics",
              "Sports",
              "Culture",
              "Crypto",
              "Climate",
              "Economics",
            ]?.map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab.toLowerCase()}
                className="text-sm data-[state=active]:bg-[#00E5AC]/10 rounded-full px-4 py-1 hidden md:inline-flex"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <TrendingTags />

        <div className="grid gap-6 my-8">
          <WealthPollCard />
          {/* <MarketCard
            title="How many government employees will Trump and Elon cut in 2025?"
            image={`https://sjc.microlink.io/bB--YaDF17Zh0J5PmDKSMDYp4c0lHYJZZ9xwUiBTij2B8nknsvdQVtGJwEPIapdLuodrTBVjvGE9Osd13gAzDw.jpeg`}
            forecast="280K"
            change="+168K"
            options={[
              { label: "More than 250,000", percentage: 53 },
              { label: "More than 500,000", percentage: 16 },
            ]}
          /> */}

          <div className="grid md:grid-cols-3 gap-6">
          <MarketCard
  compact
  title="Which Senators will vote for Kash Patel?"
  image={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%2011.32.25%E2%80%AFam-hlpj18X6JEHzTWwz0WWZUfaJvN2aso.png`}
  options={[
    { label: "Mitch McConnell", percentage: 22, forecast: 10, change: +2 },
    { label: "Lisa Murkowski", percentage: 93, forecast: 7, change: -1 },
  ]}
  volume="1,625,342"
/>


            <MarketCard
              compact
              title='"Captain America: Brave New World" Rotten Tomatoes score?'
              image={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%2011.32.25%E2%80%AFam-hlpj18X6JEHzTWwz0WWZUfaJvN2aso.png`}
              options={[
                { label: "Above 50", percentage: 18,forecast: 10, change: +2  },
                { label: "Above 45", percentage: 97,forecast: 7, change: -1 },
              ]}
              volume="1,618,243"
            />

            <MarketCard
              compact
              title="Will Trump declassify Epstein documents in his first 100 days?"
              image={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%2011.32.25%E2%80%AFam-hlpj18X6JEHzTWwz0WWZUfaJvN2aso.png`}
              options={[
                {
                  label: "Yes/No",
                  percentage: 55,
                  price: {
                    yes: "170",
                    no: "212",
                  },
                  forecast: 7, change: -1
                },
              ]}
              volume="549,169"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <MarketCard
              compact
              title="Top US iPhone app tomorrow?"
              image={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%2011.32.25%E2%80%AFam-hlpj18X6JEHzTWwz0WWZUfaJvN2aso.png`}
              options={[
                { label: "TikTok", percentage: 93 ,forecast: 7, change: -1},
                { label: "ChatGPT", percentage: 5 ,forecast: 7, change: -1},

              ]}
              volume="1,191,577"
            />

            <MarketCard
              compact
              title="Highest temperature in NYC today?"
              image={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%2011.32.25%E2%80%AFam-hlpj18X6JEHzTWwz0WWZUfaJvN2aso.png`}
              options={[
                { label: "35° to 36°", percentage: 52 ,forecast: 7, change: -1},
                { label: "37° to 38°", percentage: 40,forecast: 7, change: -1 },
              ]}
              volume="33,387,320"
              timeLeft="22:56:34"
            />

            <MarketCard
              compact
              title="2026 Pro Football Champion?"
              image={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%2011.32.25%E2%80%AFam-hlpj18X6JEHzTWwz0WWZUfaJvN2aso.png`}
              options={[
                { label: "Buffalo", percentage: 12 ,forecast: 7, change: -1},
                { label: "Kansas City", percentage: 12,forecast: 7, change: -1 },
              ]}
              volume="27,107,930"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 my-12">
          <FeatureCard
            icon="🏛️"
            title="The first legal and regulated prediction market in the US"
            description="Bet on the US election, Oscars, Bitcoin, the weather, and more"
          />
          <FeatureCard
            icon="📈"
            title="Buy and sell shares with high liquidity"
            description="Make trades from $1 to $100M!"
          />
          <FeatureCard
            icon="💎"
            title="Earn 3.75% APY on all your cash and positions"
            description="Grow your portfolio with variable interest rates as you trade"
          />
          <FeatureCard
            icon="⚡"
            title="Open your account for free and fund it your way!"
            description="Add cash with bank transfer, debit card, crypto (USDC), or wire"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
