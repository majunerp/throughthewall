import { generateSEO } from "@/lib/utils/seo";
import Link from "next/link";

export const metadata = generateSEO({
  title: "Privacy Policy - Through The Wall",
  description: "Privacy Policy for Through The Wall puzzle game. Learn how we protect your data when playing through the wall online. Transparent information about data collection and usage.",
  keywords: "privacy policy, through the wall privacy, data protection, user privacy, online game privacy, through the wall data",
  path: "/privacy",
});

export default function PrivacyPage() {
  const lastUpdated = "November 4, 2025";

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Introduction
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Welcome to Through The Wall. We respect your privacy and are committed to protecting your personal data when you play this puzzle game. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website and play through the wall. By using our puzzle game, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
              Automatically Collected Information
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              When you play Through The Wall, we automatically collect certain information about your device and interaction with this puzzle game:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
              <li><strong>Usage Data:</strong> Information about how you play through the wall, including game sessions, scores, and gameplay patterns</li>
              <li><strong>Device Information:</strong> Browser type, operating system, device type, and screen resolution</li>
              <li><strong>Technical Data:</strong> IP address, cookies, and similar tracking technologies</li>
              <li><strong>Analytics Data:</strong> Page views, time spent playing this puzzle game, and navigation patterns</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
              Information You Provide
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Through The Wall is designed to be played without registration. We do not require you to create an account or provide personal information to enjoy this puzzle game. However, if you choose to contact us or participate in optional features, you may voluntarily provide:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
              <li>Email address (if you contact us for support)</li>
              <li>Feedback and suggestions about through the wall gameplay</li>
              <li>Any information you choose to share in communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              We use collected information for various purposes related to operating and improving Through The Wall:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
              <li><strong>Game Operation:</strong> To provide and maintain this puzzle game, ensuring smooth through the wall gameplay</li>
              <li><strong>Improvement:</strong> To analyze how players interact with through the wall and make enhancements to this puzzle game</li>
              <li><strong>Technical Support:</strong> To respond to your inquiries and provide assistance with through the wall gameplay</li>
              <li><strong>Security:</strong> To detect, prevent, and address technical issues or fraudulent activity</li>
              <li><strong>Analytics:</strong> To understand player behavior and optimize this puzzle game's performance</li>
              <li><strong>Communication:</strong> To send updates about Through The Wall (only if you've opted in)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Through The Wall uses cookies and similar tracking technologies to enhance your experience with this puzzle game:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
              Essential Cookies
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              These cookies are necessary for through the wall to function properly. They enable basic features like remembering your preferences and saving your progress in this puzzle game.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
              Analytics Cookies
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              We use Google Analytics and Microsoft Clarity to understand how players interact with Through The Wall. These services help us improve this puzzle game by providing insights into through the wall gameplay patterns, popular features, and technical performance.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">
              Advertising Cookies
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              To keep Through The Wall free, we display advertisements. Google AdSense may use cookies to show relevant ads based on your browsing history. These ads help us maintain this puzzle game without charging players for through the wall access.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Through The Wall integrates with third-party services to deliver this puzzle game effectively:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
              <li><strong>Google Analytics:</strong> For analyzing through the wall gameplay statistics and user behavior</li>
              <li><strong>Microsoft Clarity:</strong> For understanding how players interact with this puzzle game through session recordings and heatmaps</li>
              <li><strong>Google AdSense:</strong> For displaying advertisements that keep Through The Wall free to play</li>
              <li><strong>Game Hosting Platform:</strong> For delivering the core through the wall gameplay experience</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
              Each third-party service has its own privacy policy governing data collection and usage. We encourage you to review their policies to understand how your information is handled when you play this puzzle game.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Data Security
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We implement industry-standard security measures to protect your data while playing Through The Wall. Our puzzle game uses HTTPS encryption to secure data transmission. However, no method of internet transmission is 100% secure. While we strive to protect your information when you play through the wall, we cannot guarantee absolute security. We continuously monitor and update our security practices to maintain the highest standards for this puzzle game.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Children's Privacy
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Through The Wall is suitable for players of all ages, making this puzzle game family-friendly. However, we do not knowingly collect personal information from children under 13 without parental consent. The through the wall gameplay does not require registration or personal data entry. If you're a parent and believe your child has provided us with personal information while playing this puzzle game, please contact us so we can delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Your Rights and Choices
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              You have certain rights regarding your data when playing Through The Wall:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
              <li><strong>Access:</strong> You can request information about data we've collected while you play this puzzle game</li>
              <li><strong>Deletion:</strong> You can request deletion of your data (note: this may affect your through the wall gameplay experience)</li>
              <li><strong>Opt-Out:</strong> You can disable cookies in your browser, though this may limit functionality of this puzzle game</li>
              <li><strong>Do Not Track:</strong> We respect Do Not Track signals for through the wall analytics where technically feasible</li>
              <li><strong>Advertising Preferences:</strong> You can manage ad personalization through Google's Ad Settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              International Data Transfers
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Through The Wall is accessible worldwide, and this puzzle game may transfer and store your data on servers located in different countries. By playing through the wall, you consent to such transfers. We ensure that adequate safeguards are in place to protect your information in accordance with this Privacy Policy, regardless of where data is processed for this puzzle game.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in Through The Wall or legal requirements. When we make significant changes to how we handle data for this puzzle game, we'll post a notice on our website. We encourage you to review this policy regularly to stay informed about how we protect your information while you play through the wall. Your continued use of this puzzle game after policy changes constitutes acceptance of those changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or how we handle data in Through The Wall, please contact us. We're committed to addressing your concerns about privacy and this puzzle game:
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                For privacy inquiries related to Through The Wall or questions about how we protect your data while you play this puzzle game, reach out through our <Link href="/about#contact" className="text-blue-600 dark:text-blue-400 hover:underline">contact page</Link>. We typically respond to through the wall privacy requests within 48 hours.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Consent
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              By playing Through The Wall, you consent to our Privacy Policy and agree to its terms regarding this puzzle game. If you do not agree with this policy, please do not use through the wall or our website. Your continued use of this puzzle game signifies your acceptance of any updates to this Privacy Policy.
            </p>
          </section>

          {/* Back to Game CTA */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Play Through The Wall?
            </h2>
            <p className="text-white/90 mb-6">
              Now that you understand how we protect your privacy, enjoy this puzzle game with confidence!
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
