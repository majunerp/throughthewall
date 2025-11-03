import { generateSEO } from "@/lib/utils/seo";
import GameIframe from "@/components/ui/GameIframe";
import Link from "next/link";

export const metadata = generateSEO({
  title: "Play Through The Wall - Free Puzzle Game Online",
  description: "Play Through The Wall now! Control your character through yoga poses to pass through walls. Free online puzzle game testing reflexes and strategy. Start instantly!",
  keywords: "play through the wall, through the wall game, online puzzle game, play now, yoga pose game, wall puzzle game online, free game, browser game, through the wall online",
  path: "/play",
});

export default function PlayPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white mb-4">
            Play Through The Wall
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Master the art of passing through walls! Control your character's yoga poses to match the wall cutouts in this addictive puzzle game. Test your reflexes and strategy as you play through the wall challenges. Each level gets progressively harder, requiring faster reactions and better pattern recognition to succeed.
          </p>
        </div>

        {/* Game Container */}
        <div className="mb-8">
          <GameIframe />
        </div>

        {/* Game Tips */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Tips to Master Through The Wall
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                🎯 Focus on the Shape
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                When playing through the wall, concentrate on recognizing the wall pattern early. The faster you identify the shape, the quicker you can position your character to pass through successfully.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                ⚡ Quick Reactions Win
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Through the wall gameplay rewards speed. Practice your reflexes by playing regularly. The more you play this puzzle game, the faster your reaction time becomes, leading to higher scores.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                🧘 Learn Common Poses
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Certain yoga-inspired poses appear frequently in through the wall challenges. Memorize these common patterns to react instantly when they appear, giving you a competitive edge.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                🎮 Stay Calm Under Pressure
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                As the puzzle game speeds up, maintaining composure is crucial. Take deep breaths between walls and stay focused. Panicking leads to mistakes when playing through the wall.
              </p>
            </div>
          </div>
        </div>

        {/* How to Play Quick Guide */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            How to Play Through The Wall
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-2">👀</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Step 1: Observe</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Watch the wall approaching in this puzzle game. Each through the wall challenge has a unique cutout shape you must match.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">🎯</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Step 2: Position</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Use controls to arrange your character's pose. Match the wall opening precisely to successfully pass through the wall.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">⭐</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Step 3: Score</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Pass through successfully to earn points! The faster and more accurate you are, the higher your score in this online game.
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/how-to-play"
              className="inline-flex text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold"
            >
              View Detailed Instructions →
            </Link>
          </div>
        </div>

        {/* Why Play Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Why Play Through The Wall?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
            Through the wall is more than just a puzzle game—it's a test of your mental agility and physical coordination. This free online game combines elements of yoga, reflexes, and strategy to create a unique gaming experience. Whether you're looking for a quick challenge during your break or want to improve your reaction time, playing through the wall offers endless entertainment. The game's progressive difficulty ensures you're always challenged, while the intuitive controls make it accessible to players of all skill levels. Join thousands of players worldwide who are already enjoying this addictive puzzle game and see how far you can go!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/"
              className="inline-flex rounded-full border border-gray-300 dark:border-gray-600 px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
            >
              Back to Home
            </Link>
            <Link
              href="/how-to-play"
              className="inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-all"
            >
              Learn More Strategies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
