import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-800 bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold gradient-text mb-4">
              Through The Wall
            </h3>
            <p className="text-sm text-gray-400 max-w-md">
              Master the ultimate puzzle challenge with through the wall gameplay! Play free online and test your reflexes as you pass through the wall obstacles using yoga poses.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-100 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#game"
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Play Through The Wall
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-to-play"
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  How to Play
                </a>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-xs text-gray-500 text-center">
            © {currentYear} Through The Wall. All rights reserved. Play through the wall challenges free online.
          </p>
        </div>
      </div>
    </footer>
  );
}
