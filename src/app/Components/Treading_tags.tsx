export default function TrendingTags() {
    const tags = [
      "For you",
      "Drake Album",
      "BAFTAs",
      "Genesis Invitational",
      "Eric Adams",
      "Cabinet",
      "DOGE",
      "Oscars",
      "First 100 Days",
    ]
  
    return (
      <div className="flex gap-3 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden">
        {tags?.map((tag, i) => (
          <button
            key={i}
            className={`shrink-0 px-3 py-1 rounded-full text-sm ${
              i === 0 ? "bg-[#00E5AC]/10 text-[#00E5AC]" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    )
  }
  
  