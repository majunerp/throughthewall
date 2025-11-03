import Link from "next/link";
import { generateSEO } from "@/lib/utils/seo";

export const metadata = generateSEO({
  title: "Page Not Found - Through The Wall",
  description: "Oops! The page you're looking for doesn't exist. Return to Through The Wall and continue playing the puzzle game.",
  path: "/404",
  noindex: true,
});

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400">404</h1>
          <div className="mt-4">
            <p className="text-3xl font-semibold text-gray-900 dark:text-white mb-2">
              Wall Not Found!
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              Looks like you tried to pass through a wall that doesn't exist. Even in Through The Wall puzzle game, some walls are impossible to find!
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-700 transition-all"
          >
            Go Home
          </Link>
          <Link
            href="/play"
            className="inline-flex rounded-full border border-gray-300 dark:border-gray-600 px-8 py-3 text-lg font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            Play Through The Wall
          </Link>
        </div>

        <div className="mt-12 text-sm text-gray-500 dark:text-gray-500">
          <p>Need help? Visit our <Link href="/how-to-play" className="text-blue-600 dark:text-blue-400 hover:underline">How to Play</Link> page or <Link href="/about#contact" className="text-blue-600 dark:text-blue-400 hover:underline">contact us</Link>.</p>
        </div>
      </div>
    </div>
  );
}
