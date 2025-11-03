import Link from "next/link";
import { generateSEO } from "@/lib/utils/seo";

export const metadata = generateSEO({
  title: "Through The Wall - Free Online Puzzle Game",
  description: "Master the ultimate puzzle challenge! Control your character through yoga poses to pass through walls. Free online game testing reflexes and strategy.",
  keywords: "through the wall, puzzle game online, yoga pose game, wall puzzle, brain teaser, reflex game, strategy puzzle game, free online game, casual puzzle, through the wall game",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
              Through The Wall
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 sm:text-xl mb-8">
              Master the ultimate puzzle challenge where reflexes meet strategy. Control your character through yoga poses to pass through walls in this addictive free online game.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/play"
                className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all transform hover:scale-105"
              >
                Play Now - Free!
              </Link>
              <Link
                href="/how-to-play"
                className="rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-all"
              >
                How to Play
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white mb-4">
              Why Play Through The Wall?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experience the perfect blend of puzzle-solving and reflex challenges. Through the wall gameplay offers unique mechanics that test both your mind and reaction speed.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 p-8 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Easy to Learn</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Simple controls make Through The Wall accessible to everyone. Just match your character's pose to the wall shape and pass through. The intuitive gameplay lets you start playing immediately without complex tutorials.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                  <svg className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Fast-Paced Action</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Test your reflexes in this dynamic puzzle game. Through the wall challenges get progressively faster, requiring quick thinking and even quicker reactions. Perfect for players who love adrenaline-pumping gameplay.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100 dark:bg-pink-900">
                  <svg className="h-6 w-6 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Play Anywhere</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Enjoy Through The Wall on any device - desktop, tablet, or mobile. No download required! Play this free online puzzle game during your commute, break, or whenever you need a fun challenge.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                  <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Unique Gameplay</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Through the wall mechanics combine yoga-inspired poses with puzzle elements. This innovative gameplay sets it apart from traditional puzzle games, offering a fresh and engaging experience every time you play.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 dark:bg-yellow-900">
                  <svg className="h-6 w-6 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Challenge Yourself</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Compete for high scores and master increasingly difficult levels. Through The Wall rewards both strategic planning and lightning-fast reflexes, making it perfect for competitive players seeking to prove their skills.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-8 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900">
                  <svg className="h-6 w-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Completely Free</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Through The Wall is 100% free to play with no hidden costs or subscriptions. Enjoy unlimited gameplay sessions without spending a penny. Just click play and start your puzzle adventure right now!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white mb-4">
              How to Play Through The Wall
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Master the art of passing through walls with these simple steps. The through the wall game mechanics are easy to understand but challenging to master.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Watch the Wall</h3>
              <p className="text-gray-600 dark:text-gray-400">
                As you play through the wall, observe the shape of the incoming obstacle. Each wall in the puzzle game has a unique cutout pattern that your character must match.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-600 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Match the Pose</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Use intuitive controls to position your character's body to match the wall cutout. Through the wall success depends on precise timing and accurate pose matching.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-pink-600 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Pass Through!</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Successfully pass through the wall to score points and advance. The faster you react in this puzzle game, the higher your score. Keep playing to beat your personal best!
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/play"
              className="inline-flex rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Start Playing Through The Wall Now
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Everything you need to know about playing Through The Wall puzzle game
            </p>
          </div>

          <div className="space-y-8">
            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                What is Through The Wall?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Through The Wall is a free online puzzle game where players control a character that must form yoga-inspired poses to pass through walls with different shaped cutouts. It combines reflex challenges with strategic puzzle-solving gameplay.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Is Through The Wall free to play?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes! Through The Wall is completely free to play online. No downloads, no subscriptions, no hidden fees. Simply visit our website and start playing the puzzle game immediately in your browser.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Can I play Through The Wall on mobile?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Absolutely! Through the wall game works perfectly on all devices including smartphones, tablets, and desktop computers. Play this puzzle game anywhere, anytime with full touch control support on mobile devices.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                How do I improve my Through The Wall score?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                To master this puzzle game, focus on quick reactions and pattern recognition. Practice identifying wall shapes faster, memorize common pose combinations, and maintain steady concentration. The more you play Through The Wall, the better your reflexes become!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Ready to Test Your Skills?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/90 mb-8">
            Join thousands of players enjoying Through The Wall puzzle game. No download required, no registration needed. Start your through the wall adventure now and see how far you can go!
          </p>
          <Link
            href="/play"
            className="inline-flex rounded-full bg-white px-10 py-5 text-xl font-semibold text-blue-600 shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Play Through The Wall - Free!
          </Link>
        </div>
      </section>
    </div>
  );
}
