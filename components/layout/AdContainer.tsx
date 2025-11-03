"use client";

import { useEffect, useRef } from "react";

interface AdContainerProps {
  slot?: string;
  format?: "auto" | "fluid" | "rectangle";
  className?: string;
}

export default function AdContainer({
  slot = "1234567890",
  format = "auto",
  className = ""
}: AdContainerProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      if (window && (window as any).adsbygoogle && adRef.current) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error("Ad loading error:", error);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`} ref={adRef}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-0000000000000000" // Replace with actual AdSense ID
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
