import { generateSEO } from "@/lib/utils/seo";
import Link from "next/link";

export const metadata = generateSEO({
  title: "How to Play Through The Wall - Game Guide & Tips",
  description: "Learn how to play Through The Wall with our guide. Master yoga poses, improve reflexes, and dominate. Discover strategies and tips to excel at wall challenges.",
  keywords: "how to play through the wall, through the wall guide, game tips, puzzle game strategy, yoga pose tips, through the wall tutorial, wall game instructions, through the wall tricks",
  path: "/how-to-play",
});

export default function HowToPlayPage() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white mb-4">
            How to Play Through The Wall
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Master the ultimate puzzle game where reflexes meet strategy. Learn everything you need to know about playing through the wall successfully.
          </p>
        </div>

        {/* Quick Start */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Quick Start Guide
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 mb-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Through The Wall is an innovative puzzle game that challenges both your mind and reflexes. The goal is simple: control your character to match yoga-inspired poses with wall cutout shapes and pass through without collision. As you progress through the wall challenges, the speed increases and patterns become more complex, testing your reaction time and pattern recognition skills.
            </p>
            <div className="flex justify-center">
              <Link
                href="/play"
                className="inline-flex rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-700 transition-all"
              >
                Start Playing Now
              </Link>
            </div>
          </div>
        </section>

        {/* Game Controls */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Game Controls
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                🖱️ Desktop Controls
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• <strong>Mouse Movement:</strong> Position your character's limbs</li>
                <li>• <strong>Click:</strong> Lock pose position for through the wall passage</li>
                <li>• <strong>Arrow Keys:</strong> Alternative control method for pose adjustment</li>
                <li>• <strong>Spacebar:</strong> Quick reset to neutral position</li>
              </ul>
            </div>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                📱 Mobile/Touch Controls
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• <strong>Touch & Drag:</strong> Move limbs to match wall shape</li>
                <li>• <strong>Tap:</strong> Confirm pose for passing through wall</li>
                <li>• <strong>Swipe:</strong> Quick adjustments during puzzle gameplay</li>
                <li>• <strong>Pinch:</strong> Zoom in for precise positioning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step by Step Instructions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Step-by-Step Instructions
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Analyze the Approaching Wall
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  When you start playing through the wall, observe each approaching obstacle carefully. The puzzle game presents walls with various cutout shapes - some simple, others complex. Take note of the opening's dimensions, angles, and overall pattern. In through the wall gameplay, early recognition is key to success. The more quickly you identify the shape, the more time you have to prepare your pose.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Position Your Character
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Use the game controls to arrange your character's body to match the wall cutout. Through the wall success requires precise positioning - your character's arms, legs, and torso must align perfectly with the opening. This puzzle game rewards accuracy, so take your time initially. As you become more experienced, your muscle memory will develop, allowing faster pose formation.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Time Your Passage
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Timing is crucial when passing through the wall. Hold your pose steady as the wall approaches your character. The game provides visual feedback - look for the green indicator that confirms proper alignment. Once the through the wall passage is successful, you'll earn points based on accuracy and speed. Perfect timing in this puzzle game yields maximum scores!
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Progress Through Levels
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  As you continue playing through the wall, levels become progressively challenging. Walls move faster, shapes become more intricate, and the margin for error decreases. This puzzle game design ensures continuous engagement. Track your high scores, challenge yourself to improve, and master even the most difficult through the wall patterns. Consistent practice leads to mastery!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Tips */}
        <section className="mb-12" id="tips">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Advanced Tips & Strategies
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Pattern Recognition
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Master common through the wall patterns by categorizing them. Simple vertical splits, horizontal bars, diagonal cuts, and complex multi-limb poses all appear regularly in this puzzle game. Create a mental library of these shapes. When playing through the wall, you'll instantly recognize familiar patterns, dramatically reducing reaction time and improving your overall performance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Speed vs Accuracy
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Balance speed and precision when playing this puzzle game. While through the wall challenges reward quick reactions, rushing leads to misalignment and failure. Start each session prioritizing accuracy. As your confidence grows, gradually increase your speed. Expert players can position their character in under a second while maintaining perfect accuracy for maximum through the wall scores.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">🧘</span>
                Practice Common Poses
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Certain yoga-inspired poses dominate through the wall gameplay. Practice these frequently: spread eagle (arms and legs extended), T-pose (arms horizontal), warrior pose (one leg forward), and compact ball (limbs tucked). By mastering these fundamental positions in this puzzle game, you'll handle 80% of all through the wall challenges effortlessly, leaving mental energy for the truly complex patterns.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">📊</span>
                Analyze Your Mistakes
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                After failing a through the wall attempt, take a moment to understand why. Did you misread the shape? Was your timing off? Did you panic under pressure? This puzzle game provides valuable learning opportunities with each failure. Keep mental notes or even record your sessions to identify recurring weaknesses. Targeted practice on problem areas will rapidly improve your through the wall performance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">🎮</span>
                Peripheral Vision Training
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Develop peripheral awareness when playing through the wall. While focusing on the approaching wall in this puzzle game, use peripheral vision to monitor your character's position. This dual-focus technique allows simultaneous shape analysis and pose adjustment. With practice, you'll process through the wall information faster, react quicker, and achieve higher scores without feeling overwhelmed.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <span className="text-2xl">🧠</span>
                Stay Calm Under Pressure
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                As through the wall speed increases, anxiety can impair performance. Practice calm breathing between walls in this puzzle game. Maintain a relaxed grip on your controls and keep shoulders loose. Tension leads to jerky movements and mistakes. Expert through the wall players describe a "flow state" where they react instinctively without stress. Regular practice and mindfulness techniques help achieve this optimal performance zone.
              </p>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Common Mistakes to Avoid
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                ❌ Rushing Without Looking
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Many beginners fail through the wall challenges by reacting too quickly. This puzzle game rewards thoughtful analysis. Always take that extra half-second to properly assess the wall shape before committing to a pose.
              </p>
            </div>

            <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                ❌ Overcomplicating Simple Patterns
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Sometimes the through the wall opening is straightforward, but players create complex poses unnecessarily. Keep it simple - if the gap is wide, a basic stance works. This puzzle game doesn't always require elaborate positioning.
              </p>
            </div>

            <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                ❌ Ignoring Visual Feedback
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Through the wall provides alignment indicators and warnings. Pay attention to these cues in this puzzle game. Red means misalignment, green means perfect positioning. Use this feedback to make micro-adjustments before the wall reaches you.
              </p>
            </div>

            <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                ❌ Giving Up After Failures
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every expert at playing through the wall started as a beginner. This puzzle game has a learning curve. Embrace failures as learning opportunities. Each attempt builds muscle memory and improves pattern recognition for future through the wall challenges.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Q: How long does it take to master Through The Wall?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Most players grasp basic through the wall mechanics within 10-15 minutes of playing. However, this puzzle game offers depth that takes weeks to fully master. Expect noticeable improvement after 5-10 play sessions. Through the wall mastery depends on practice frequency and pattern recognition development.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Q: What's a good score for beginners?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                When starting to play through the wall, successfully passing 10-15 walls is excellent. As you improve in this puzzle game, aim for 30-50 consecutive through the wall passages. Advanced players regularly exceed 100+ walls. Focus on personal improvement rather than comparing scores initially.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Q: Can I play Through The Wall on mobile devices?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes! Through the wall works perfectly on smartphones and tablets. This puzzle game features touch-optimized controls for mobile play. Many players actually prefer the tactile nature of touch controls for through the wall gameplay, finding it more intuitive than mouse or keyboard.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Q: Are there different difficulty levels?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Through the wall features adaptive difficulty. This puzzle game automatically increases speed and complexity as you improve. Early through the wall patterns are simple and slow-moving. As you progress, the game introduces faster walls with more intricate cutouts, ensuring continuous challenge.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Master Through The Wall?
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Now that you know how to play this puzzle game, put your skills to the test! Start playing through the wall now and see how far you can go. Remember, practice makes perfect!
          </p>
          <Link
            href="/play"
            className="inline-flex rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Start Playing Through The Wall
          </Link>
        </section>
      </div>
    </div>
  );
}
