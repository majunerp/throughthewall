"use client";

import Link from "next/link";

export default function Header() {
  const scrollToGame = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const gameSection = document.getElementById('game');
    if (gameSection) {
      gameSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl sm:text-2xl font-bold gradient-text transition-all">
              Through The Wall
            </span>
          </Link>
        </div>

        <div className="flex justify-end">
          <Link
            href="#game"
            onClick={scrollToGame}
            className="rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all transform hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            }}
          >
            Play Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
