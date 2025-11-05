import { generateSEO } from "@/lib/utils/seo";
import GameIframe from "@/components/ui/GameIframe";

export const metadata = generateSEO({
  title: "Through The Wall - Free Online Puzzle Game",
  description: "Master the ultimate puzzle challenge! Play through the wall game online - control your character through yoga poses to pass through walls. Free puzzle game testing reflexes and strategy.",
  keywords: "through the wall, puzzle game online, yoga pose game, wall puzzle, brain teaser, reflex game, strategy puzzle game, free online game, through the wall game",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="w-full bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl mb-8">
            <span className="gradient-text">Through The Wall</span>
          </h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed">
            Master the Ultimate Motorcycle Wheelie Experience with SoFlo Wheelie Life - Play Free Scratch Wheelie Games and Online Stunt Games
          </p>
          <a
            href="#game"
            className="inline-flex rounded-full px-10 py-4 text-lg font-semibold text-white shadow-xl transition-all transform hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            }}
          >
            ▶ Play SoFlo Wheelie Life Now
          </a>
        </div>
      </section>

      {/* Game Section */}
      <section id="game" className="py-16 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GameIframe />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#1a1a2e]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Experience the Thrill of Through The Wall Puzzle Games</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Welcome to through the wall, your ultimate destination for free online motorcycle wheelie games and stunt simulations. Immerse yourself in the exciting world of South Florida street motorcycle culture with SoFlo Wheelie Life, where mastering the perfect wheelie is an art form. Our scratch wheelie platform brings you the most realistic and scratch wheelie experiences, allowing you to experience the adrenaline rush of street motorcycles right in your browser—no downloads required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold text-white mb-3">Intuitive Controls</h3>
              <p className="text-gray-400">
                Through the wall features some of the best motorcycle stunt game controls available online. Using Wheelie Life's intuitive controls make it accessible for newcomers while offering depth that challenges even through the wall experts. Realistic bike handling, challenging gameplay, and hours of entertainment. Every wheelie game in our through the wall collection offers unique challenges and rewards.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Realistic Bike Physics</h3>
              <p className="text-gray-400">
                SoFlo Wheelie Life game itself captures the essence of street motorcycle culture with its realistic bike handling, customizable online stunt setups. The through the wall gameplay is suitable for all skill levels. Players can perform spectacular wheelies, execute challenging gameplay through progressive levels. SoFlo Wheelie Life games are perfect for weekday entertainment or weekend marathons.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-white mb-3">Progressive Challenges</h3>
              <p className="text-gray-400">
                Our motorcycle wheelie game designed for wheelie enthusiasts worldwide. Whether you're a beginner learning your first wheelie or an expert stunts, through the wall has something for everyone. Experience the authentic street motorcycle right from your screen, perfecting advanced tricks while playing through the wall challenges completely free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Why Choose SoFlo Wheelie Life for Your Motorcycle Gaming?</span>
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              SoFlo Wheelie Life stands as the premier destination for motorcycle wheelie enthusiasts seeking authentic street motorcycle experiences through the wall. This puzzle game draws inspiration from the vibrant South Florida most motorcycle culture, an area known for its passionate wheelie community and daring stunts riders. The through the wall platform is built on a foundation of realism, challenging gameplay through incorporating actual motorcycle physics, responsive controls while carefully curated collection of games online.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              The SoFlo Wheelie Life game itself captures the essence of street culture right with its realistic bike handling, customizable setups through features that mirror real-world mechanics culture. Experience playing through the wall offers progression systems keeping you engaged as you master every aspect of through the wall gameplay. From basic balance exercises to complex combo stunts simulators, every wheelie game challenges and refines your skills while you pass through the wall obstacles.
            </p>
          </div>
        </div>
      </section>

      {/* How to Play Section */}
      <section id="how-to-play" className="py-20 bg-[#1a1a2e]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Master Motorcycle Wheelies and Stunts with SoFlo Wheelie Life</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Learning to perform perfect wheelies requires skill, timing, and practice. Our motorcycle wheelie platform offers progressive gameplay designed for wheelie enthusiasts worldwide. Through the wall instruction ensures whether you're struggling with wheelie fundamentals right alongside expert players performing advanced through the wall stunts online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full text-3xl font-bold text-white" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                1
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Choose Your Bike</h3>
              <p className="text-gray-400 leading-relaxed">
                Start your through the wall journey by selecting from our diverse motorcycle fleet. Each bike in through the wall offers unique handling characteristics that affect wheelie performance and stunt capabilities while you pass through obstacles.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full text-3xl font-bold text-white" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}>
                2
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Master Controls</h3>
              <p className="text-gray-400 leading-relaxed">
                Through the wall gameplay uses intuitive controls optimized for browser play. Learn throttle control, balance adjustments, and timing perfect for executing flawless wheelies as you navigate through the wall challenges online.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full text-3xl font-bold text-white" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}>
                3
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Progress & Excel</h3>
              <p className="text-gray-400 leading-relaxed">
                As you play through the wall levels, difficulty increases challenging your through the wall mastery. Complete objectives, unlock achievements, perfect increasingly complex stunts throughout your through the wall adventure online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section id="tips" className="py-20 bg-[#0a0a0a]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Pro Tips for Through The Wall Success</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-3">🎯 Start Slow, Build Speed</h3>
              <p className="text-gray-400">
                When learning through the wall mechanics, resist the urge to go full throttle immediately. Master basic wheelie balance at lower speeds before attempting high-speed through the wall stunts. This foundation makes advanced techniques much easier.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-3">⚖️ Balance is Everything</h3>
              <p className="text-gray-400">
                The key to long wheelies in through the wall is finding that sweet spot balance point. Too far back and you'll flip, too forward and you'll drop. Practice micro-adjustments while playing through the wall to develop muscle memory.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-3">🔄 Use Brake Control</h3>
              <p className="text-gray-400">
                Your rear brake is your best friend in through the wall gameplay. Use it to prevent loop-outs during extended wheelies and to fine-tune your balance point while passing through obstacles in this exciting game.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-3">💪 Practice Daily</h3>
              <p className="text-gray-400">
                Consistency is crucial when mastering through the wall challenges. Even short daily sessions help build the reflexes and timing needed to excel at this through the wall motorcycle game online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-[#1a1a2e]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-2">
                What is Through The Wall?
              </h3>
              <p className="text-gray-400">
                Through the wall is your premier free online destination for motorcycle wheelie games and stunt simulations. Players control motorcycles through challenging courses, performing wheelies and stunts while navigating through the wall obstacles inspired by South Florida street motorcycle culture.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-2">
                Is Through The Wall free to play?
              </h3>
              <p className="text-gray-400">
                Yes! Through the wall is completely free to play online. No downloads, no subscriptions, no hidden fees. Simply visit our website and start playing through the wall motorcycle games immediately in your browser.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-2">
                Can I play Through The Wall on mobile devices?
              </h3>
              <p className="text-gray-400">
                Absolutely! Through the wall works perfectly on smartphones, tablets, and desktop computers. Play through the wall anywhere, anytime with full touch control support on mobile devices for the best gaming experience.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-bold text-white mb-2">
                How do I improve my wheelie skills in the game?
              </h3>
              <p className="text-gray-400">
                To master through the wall gameplay, focus on throttle control and balance. Start with basic wheelies at slow speeds, practice finding the balance point, use your rear brake for control, and play through the wall consistently to develop muscle memory and reflexes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-pink-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">Ready to Master Through The Wall?</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300 mb-10">
            Join thousands of players worldwide enjoying through the wall motorcycle games. No download required, no registration needed. Start your through the wall adventure now and see how far you can go!
          </p>
          <a
            href="#game"
            className="inline-flex rounded-full px-12 py-5 text-xl font-semibold text-white shadow-2xl transition-all transform hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            }}
          >
            Play Through The Wall - Free!
          </a>
        </div>
      </section>
    </div>
  );
}
