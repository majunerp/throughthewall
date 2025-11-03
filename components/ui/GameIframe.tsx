"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/lib/utils/constants";

export default function GameIframe() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full min-h-[600px] bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
          <div className="text-center">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent mb-4"></div>
            <p className="text-white text-lg font-semibold">Loading Through The Wall...</p>
            <p className="text-gray-400 text-sm mt-2">Prepare your best yoga poses!</p>
          </div>
        </div>
      )}
      <iframe
        src={SITE_CONFIG.gameUrl}
        className="w-full h-full min-h-[600px]"
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        onLoad={() => setIsLoading(false)}
        title="Through The Wall - Puzzle Game"
      />
    </div>
  );
}
