"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  // Search,
  Home,
  MessageCircle,
  Bookmark,
  User,
  HelpCircle,
  Info,
  FileText,
  Share2,
  Heart,
  MoreHorizontal,
} from "lucide-react";
import image from "../../../public/assets/IMG_5481@2x.png";

import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
// import { Textarea } from "../Components/"
import Footer from "../Components/PublicComponents/Footer";
import Header from "@/components/ui/Header";

const categories = [
  "Trending",
  "New",
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
  "Transport",
];

const posts = [
  {
    id: 1,
    author: "ZonedOutCat",
    avatar: image,
    time: "2m",
    content: "9 inches",
    prediction: {
      title: "Rain in NYC this month?",
      outcome: "Yes - Above 4 inches",
      chance: "58%",
      type: "primary",
    },
  },
  {
    id: 2,
    author: "redlightgreenlight",
    avatar: image,
    time: "5m",
    content: "how come this graph doesn't match Robinhood",
    prediction: {
      title: "Bitcoin price today at 10am EST?",
      outcome: "Yes - $87,000 or above",
      date: "Feb 16, 2025 at 10am EST",
      type: "primary",
    },
  },
  {
    id: 3,
    author: "swan",
    avatar: image,
    time: "8m",
    content: "easy",
    prediction: {
      title: "Top US iPhone app tomorrow?",
      outcome: "No - CapCut - Video Editor",
      chance: "99%",
      type: "secondary",
    },
  },
];

export default function IdeasPage() {
  const [postContent, setPostContent] = useState("");

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
        <h1 className="text-2xl font-bold mb-2 sm:hidden block">Ideas</h1>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3 sm:block hidden">
            <div className="sticky top-8 ">
              <h1 className="text-2xl font-bold mb-2">Ideas</h1>
              <p className="text-sm text-gray-500 mb-8 ">
                Serving public conversation
              </p>

              <nav className="space-y-2">
                <Link
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg bg-gray-100"
                >
                  <Home className="w-5 h-5" />
                  Home
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Replies
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                >
                  <Bookmark className="w-5 h-5" />
                  Bookmarks
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                >
                  <User className="w-5 h-5" />
                  Profile
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                >
                  <Info className="w-5 h-5" />
                  Community guidelines
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                >
                  <HelpCircle className="w-5 h-5" />
                  Support
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                >
                  <FileText className="w-5 h-5" />
                  FAQs
                </Link>
              </nav>

              <Button className="w-full mt-6">Post</Button>
            </div>
          </div>

          <div className="sm:col-span-9 col-span-12 ">
            <Tabs defaultValue="ideas" className="mb-8">
              <TabsList className="h-auto p-0 bg-transparent border-b w-full rounded-none gap-8">
                <TabsTrigger
                  value="ideas"
                  className="text-sm data-[state=active]:text-gray-900 data-[state=active]:border-b-2 
                  data-[state=active]:border-[#00E5AC] text-gray-500 hover:text-gray-900 px-0 py-4 
                  rounded-none border-0 bg-transparent data-[state=active]:bg-transparent 
                  data-[state=active]:shadow-none"
                >
                  Ideas
                </TabsTrigger>
                <TabsTrigger
                  value="live-trades"
                  className="text-sm data-[state=active]:text-gray-900 data-[state=active]:border-b-2 
                  data-[state=active]:border-[#00E5AC] text-gray-500 hover:text-gray-900 px-0 py-4 
                  rounded-none border-0 bg-transparent data-[state=active]:bg-transparent 
                  data-[state=active]:shadow-none"
                >
                  Live trades
                </TabsTrigger>
                <TabsTrigger
                  value="market-builder"
                  className="text-sm data-[state=active]:text-gray-900 data-[state=active]:border-b-2 
                  data-[state=active]:border-[#00E5AC] text-gray-500 hover:text-gray-900 px-0 py-4 
                  rounded-none border-0 bg-transparent data-[state=active]:bg-transparent 
                  data-[state=active]:shadow-none"
                >
                  Market builder
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex-shrink-0" />
                <div className="flex-1">
                  <Textarea
                    placeholder="What's your prediction?"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    className="min-h-[100px] resize-none"
                  />
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-500">
                      {800 - postContent.length} left
                    </span>
                    <Button className="mr-4">Post</Button>
                  </div>
                </div>
              </div>

              {posts.map((post) => (
                <div key={post.id} className="flex gap-4">
                  <Image
                    src={post.avatar || "/placeholder.svg"}
                    alt={`${post.author}'s avatar`}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{post.author}</span>
                      <span className="text-sm text-gray-500">{post.time}</span>
                    </div>
                    <p className="mb-3">{post.content}</p>
                    <div className="border rounded-lg p-4 mb-3">
                      <Link
                        href="#"
                        className="text-[#00E5AC] font-medium hover:underline"
                      >
                        {post.prediction.title}
                      </Link>
                      <div className="flex items-center justify-between mt-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">
                            {post.prediction.outcome}
                          </span>
                          {post.prediction.chance && (
                            <span className="text-sm font-medium">
                              {post.prediction.chance} chance
                            </span>
                          )}
                          {post.prediction.date && (
                            <span className="text-sm text-gray-500">
                              {post.prediction.date}
                            </span>
                          )}
                        </div>
                        <Button
                          className={
                            post.prediction.type === "secondary"
                              ? "bg-purple-500 hover:bg-purple-600"
                              : ""
                          }
                        >
                          Buy
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <button className="text-gray-500 hover:text-gray-700">
                        <MessageCircle className="w-4 h-4" />
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <Bookmark className="w-4 h-4" />
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="text-gray-500 hover:text-gray-700 ml-auto">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
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
