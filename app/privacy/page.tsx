import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Privacy Policy
          </h1>
          <p className="text-zinc-400 mb-12">Last Updated: December 30, 2025</p>

          <div className="prose prose-invert prose-amber max-w-none space-y-8">
            <section>
              <p className="text-zinc-300 leading-relaxed text-lg">
                LootLook ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App").
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg">
                By using the App, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white border-b border-amber-500/30 pb-3">
                1. Information We Collect
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                We collect information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or device.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-amber-400">A. Data You Provide to Us</h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-zinc-900/50 rounded-lg p-4 border border-white/10">
                  <h4 className="font-bold text-white mb-2">User Content (Photos/Video):</h4>
                  <p className="text-zinc-300">
                    We collect the images you capture via the App's camera function. These images are transmitted to our servers and third-party AI providers (Google Gemini) solely for the purpose of identifying the item and estimating its market value.
                  </p>
                </div>

                <div className="bg-zinc-900/50 rounded-lg p-4 border border-white/10">
                  <h4 className="font-bold text-white mb-2">Inventory Data ("The Stash"):</h4>
                  <p className="text-zinc-300">
                    We store the metadata of items you choose to save (titles, prices, categories, dates).
                  </p>
                </div>

                <div className="bg-zinc-900/50 rounded-lg p-4 border border-white/10">
                  <h4 className="font-bold text-white mb-2">Account Information:</h4>
                  <p className="text-zinc-300">
                    If you choose to sign in, we collect your Name and Email Address to secure your account and allow cross-device access.
                  </p>
                </div>

                <div className="bg-zinc-900/50 rounded-lg p-4 border border-white/10">
                  <h4 className="font-bold text-white mb-2">Search Queries:</h4>
                  <p className="text-zinc-300">
                    We collect search history within the app (e.g., filtering your Stash).
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-amber-400">B. Data Collected Automatically</h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-zinc-900/50 rounded-lg p-4 border border-white/10">
                  <h4 className="font-bold text-white mb-2">Identifiers:</h4>
                  <p className="text-zinc-300">
                    We collect a unique User ID and Device ID (such as IDFA) to manage your account, enforce daily scan limits, and serve advertising.
                  </p>
                </div>

                <div className="bg-zinc-900/50 rounded-lg p-4 border border-white/10">
                  <h4 className="font-bold text-white mb-2">Usage Data:</h4>
                  <p className="text-zinc-300">
                    We track Product Interactions (taps, feature usage, screens viewed) and Advertising Data (ads viewed, ads clicked, rewarded video completion).
                  </p>
                </div>

                <div className="bg-zinc-900/50 rounded-lg p-4 border border-white/10">
                  <h4 className="font-bold text-white mb-2">Diagnostics:</h4>
                  <p className="text-zinc-300">
                    We collect Crash Data and Performance Data to identify bugs and improve app stability.
                  </p>
                </div>

                <div className="bg-zinc-900/50 rounded-lg p-4 border border-white/10">
                  <h4 className="font-bold text-white mb-2">Purchase History:</h4>
                  <p className="text-zinc-300">
                    We track your subscription status and consumable pack purchases to unlock premium features.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white border-b border-amber-500/30 pb-3">
                2. How We Use Your Information
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                We use the collected data for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-3 text-zinc-300 ml-4">
                <li><strong className="text-white">App Functionality:</strong> To analyze your photos, provide price estimates, save your inventory, and manage your Pro subscription.</li>
                <li><strong className="text-white">Advertising:</strong> To display third-party advertisements (via Google AdMob) to free users. This includes using device identifiers to show relevant ads.</li>
                <li><strong className="text-white">Analytics:</strong> To understand how users interact with the App and improve our features.</li>
                <li><strong className="text-white">Marketing:</strong> To send you updates about LootLook or optional promotional offers (only if you have opted in via email).</li>
                <li><strong className="text-white">Security:</strong> To prevent fraud (e.g., bypassing scan limits) and ensure the security of our services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white border-b border-amber-500/30 pb-3">
                3. Third-Party Services and Data Sharing
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                We may share your information with the following third-party service providers to facilitate our Service:
              </p>
              <ul className="list-disc list-inside space-y-3 text-zinc-300 ml-4">
                <li><strong className="text-white">Google Gemini (AI Vision):</strong> Processes images to identify items.</li>
                <li><strong className="text-white">Google AdMob:</strong> Serves advertisements. AdMob may collect and use your Device ID (IDFA) and Usage Data to provide personalized ads.</li>
                <li><strong className="text-white">SerpApi / eBay API:</strong> Used to retrieve market pricing data.</li>
                <li><strong className="text-white">Firebase / Supabase:</strong> Used for backend database hosting, authentication, and analytics.</li>
                <li><strong className="text-white">RevenueCat:</strong> Manages subscription validation and purchase history.</li>
              </ul>
              <p className="text-zinc-300 leading-relaxed mt-4">
                These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white border-b border-amber-500/30 pb-3">
                4. User Rights and Data Deletion
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-4">
                You have the right to request the deletion of your data.
              </p>
              <ul className="list-disc list-inside space-y-3 text-zinc-300 ml-4">
                <li><strong className="text-white">Delete Account:</strong> You can delete your account and all associated data (including your Stash) directly within the App settings.</li>
                <li><strong className="text-white">Contact Us:</strong> You may also contact us at <a href="mailto:hello@lootlook.app" className="text-amber-400 hover:text-amber-300 underline">hello@lootlook.app</a> to request data deletion.</li>
              </ul>
              <p className="text-zinc-300 leading-relaxed mt-4">
                For detailed instructions, please visit our <Link href="/data-deletion" className="text-amber-400 hover:text-amber-300 underline">Data Deletion Instructions</Link> page.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white border-b border-amber-500/30 pb-3">
                5. Children's Privacy
              </h2>
              <p className="text-zinc-300 leading-relaxed">
                We do not knowingly collect personally identifiable information from children under 13. If we become aware that we have collected Personal Data from a child under 13 without verification of parental consent, we take steps to remove that information from our servers.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white border-b border-amber-500/30 pb-3">
                6. Changes to This Privacy Policy
              </h2>
              <p className="text-zinc-300 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
            </section>

            <section className="mt-16 p-8 bg-gradient-to-r from-amber-900/20 to-orange-900/20 rounded-2xl border border-amber-500/30">
              <h2 className="text-3xl font-bold mb-4 text-white">Contact Us</h2>
              <p className="text-zinc-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <p className="text-zinc-300 leading-relaxed mt-4">
                By email: <a href="mailto:hello@lootlook.app" className="text-amber-400 hover:text-amber-300 underline font-medium">hello@lootlook.app</a>
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-white/10">
              <Link href="/" className="text-amber-400 hover:text-amber-300 underline">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

