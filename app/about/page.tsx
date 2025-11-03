import { generateSEO } from "@/lib/utils/seo";
import Link from "next/link";

export const metadata = generateSEO({
  title: "About Through The Wall - Free Online Puzzle Game",
  description: "Discover the story behind Through The Wall, the innovative puzzle game combining yoga poses and reflexes. Learn about our mission to bring engaging gameplay.",
  keywords: "about through the wall, puzzle game story, through the wall game info, wall puzzle creator, game development, through the wall background, online game about",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white mb-4">
            About Through The Wall
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            The story behind your favorite puzzle game
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to Through The Wall
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Through The Wall is a revolutionary free online puzzle game that challenges players to pass through walls by matching yoga-inspired body poses with cutout shapes. Our game combines the ancient practice of yoga with modern reflex-based gameplay, creating a unique experience that tests both mind and body coordination. Since launching, Through The Wall has captured the hearts of puzzle game enthusiasts worldwide, offering an innovative twist on traditional casual gaming.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              What makes Through The Wall special is its accessibility and depth. Anyone can start playing this puzzle game within seconds—no downloads, no registration, completely free. Yet beneath the simple premise lies a sophisticated challenge that rewards practice, pattern recognition, and lightning-fast reflexes. Whether you're seeking a quick gaming session during your break or aiming to master every through the wall pattern, our game adapts to your skill level.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Our mission is simple: make Through The Wall the most engaging and accessible puzzle game on the internet. We believe that quality gaming experiences should be free and available to everyone, regardless of device or location. That's why we've optimized through the wall gameplay for all platforms—desktop, tablet, and mobile—ensuring smooth performance wherever you play.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              We're committed to continuously improving this puzzle game based on player feedback. Our development team actively monitors community suggestions, implements requested features, and refines through the wall mechanics to enhance your gaming experience. Your enjoyment and satisfaction drive every decision we make about the game's evolution.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              The Game Design Philosophy
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Through The Wall embodies several core design principles. First, we prioritize intuitive gameplay—you should understand how to play within seconds of loading this puzzle game. Second, we believe in progressive difficulty that respects your learning curve. Early through the wall challenges build confidence, while advanced levels test even the most skilled players.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Third, we value your time. Through the wall sessions can be as short or long as you want. Play for two minutes or two hours—the game accommodates your schedule. Fourth, we ensure fair gameplay. This puzzle game never forces you to watch ads mid-session or pay for advantages. Every player faces the same through the wall challenges with equal opportunity to excel based purely on skill.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Yoga Poses?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              The yoga-inspired poses in Through The Wall aren't just visually interesting—they add depth to this puzzle game. Yoga emphasizes body awareness, balance, and mindful positioning. By incorporating these elements into through the wall gameplay, we've created a game that engages your spatial reasoning and body-mind connection in unique ways.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Players often report that mastering Through The Wall improves their real-world body awareness. This puzzle game subtly trains you to visualize positions and movements more accurately. While through the wall is primarily entertainment, we're proud that it may offer cognitive benefits beyond typical casual gaming experiences.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Community & Feedback
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              The Through The Wall community drives this puzzle game forward. We've received thousands of messages from players sharing their high scores, suggesting improvements, and expressing appreciation for through the wall gameplay. This feedback shapes our development priorities and helps us understand what makes the game enjoyable for different player types.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              We actively engage with our player base through various channels. Whether you're reporting a bug, requesting a feature, or simply sharing your love for this puzzle game, we read every message. Your voice matters in the ongoing development of Through The Wall, and we're grateful for the passionate community that has formed around our game.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Excellence
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Behind the scenes, Through The Wall utilizes cutting-edge web technologies to deliver smooth, responsive gameplay. Our team has optimized every aspect of this puzzle game—from physics calculations to rendering performance—ensuring that through the wall plays flawlessly across all devices. We've invested significant effort in minimizing load times and maximizing frame rates for the best possible experience.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Accessibility is another technical priority. Through the wall supports various screen sizes, input methods, and even adapts to different connection speeds. This puzzle game works on older devices and newer flagships alike, ensuring no player is left behind due to hardware limitations.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Looking Forward
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              The future of Through The Wall is bright and full of possibilities. We're exploring new game modes, additional challenge types, and social features that let you compete with friends. While maintaining the core through the wall experience that players love, we're constantly innovating to keep this puzzle game fresh and engaging.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Planned updates include daily challenges, global leaderboards, achievement systems, and seasonal events. We're also considering community-requested features like custom difficulty settings and practice modes. Every addition will respect the simplicity and accessibility that make Through The Wall special, ensuring this puzzle game remains true to its roots while evolving to meet player expectations.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Join the Journey
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Whether you're a casual player enjoying occasional through the wall sessions or a dedicated enthusiast chasing high scores, we're thrilled to have you as part of our community. This puzzle game exists because of players like you, and your continued support motivates us to make Through The Wall better every day.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Thank you for choosing Through The Wall. We hope this puzzle game brings you joy, challenge, and maybe even a few moments of zen as you master the art of passing through walls. Here's to many more successful through the wall passages ahead!
            </p>
          </section>

          {/* Contact Section */}
          <section id="contact" className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 mt-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Have questions about Through The Wall? Want to report a bug or suggest a feature for this puzzle game? We'd love to hear from you! While we're focused on through the wall development, we make time to respond to every genuine inquiry from our community.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Feedback & Suggestions
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Share your ideas for improving Through The Wall or let us know what you love about this puzzle game. Your feedback directly influences our development roadmap.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Bug Reports
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Encountered an issue while playing through the wall? Report it to us with details about your device, browser, and what happened. We prioritize fixing problems that affect this puzzle game's playability.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Partnership Opportunities
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Interested in featuring Through The Wall on your platform or collaborating with us? We're open to partnerships that help bring this puzzle game to more players worldwide.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 mt-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Experience Through The Wall Today
            </h2>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Join thousands of players worldwide enjoying this innovative puzzle game. Start your through the wall journey now—completely free, no download required!
            </p>
            <Link
              href="/play"
              className="inline-flex rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Play Through The Wall Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
