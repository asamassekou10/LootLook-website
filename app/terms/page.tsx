import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Terms of Service
          </h1>
          <p className="text-zinc-400 mb-12">Last Updated: December 30, 2025</p>

          <div className="prose prose-invert prose-amber max-w-none space-y-8">
            <section>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Welcome to LootLook! By downloading or using the app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white border-b border-amber-500/30 pb-3">
                1. The Service
              </h2>
              <p className="text-zinc-300 leading-relaxed">
                LootLook provides AI-powered visual identification and market price estimation for physical items.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white border-b border-amber-500/30 pb-3">
                2. Disclaimer on Valuations (Crucial)
              </h2>
              <div className="bg-red-900/20 border-2 border-red-500/50 rounded-lg p-6 mb-4">
                <p className="text-red-200 font-semibold text-lg mb-2">⚠️ Important Notice</p>
                <p className="text-zinc-300 leading-relaxed">
                  The pricing data provided by LootLook are estimates only. They are based on historical market data and computer vision analysis, which may not always be 100% accurate.
                </p>
              </div>
              
              <ul className="list-disc list-inside space-y-3 text-zinc-300 ml-4">
                <li><strong className="text-white">No Guarantee:</strong> We do not guarantee that you will be able to sell your item for the estimated price.</li>
                <li><strong className="text-white">Not Financial Advice:</strong> The information provided is for informational purposes only and does not constitute a professional appraisal.</li>
                <li><strong className="text-white">Liability:</strong> LootLook is not responsible for any financial losses incurred from buying or selling items based on our data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white border-b border-amber-500/30 pb-3">
                3. Subscriptions and Payments
              </h2>
              
              <div className="space-y-4">
                <div className="bg-zinc-900/50 rounded-lg p-4 border border-white/10">
                  <h3 className="font-bold text-white mb-2">Pro Subscription:</h3>
                  <p className="text-zinc-300">
                    LootLook offers a "Pro" subscription that grants unlimited scans and trend data.
                  </p>
                </div>

                <div className="bg-zinc-900/50 rounded-lg p-4 border border-white/10">
                  <h3 className="font-bold text-white mb-2">Consumables:</h3>
                  <p className="text-zinc-300">
                    "Loot Packs" (scan credits) are one-time purchases and are non-refundable.
                  </p>
                </div>

                <div className="bg-zinc-900/50 rounded-lg p-4 border border-white/10">
                  <h3 className="font-bold text-white mb-2">Billing:</h3>
                  <p className="text-zinc-300">
                    Payments are processed via the Apple App Store. You can manage or cancel your subscription in your Apple ID settings.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white border-b border-amber-500/30 pb-3">
                4. User Accounts
              </h2>
              <p className="text-zinc-300 leading-relaxed">
                You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white border-b border-amber-500/30 pb-3">
                5. Acceptable Use
              </h2>
              <p className="text-zinc-300 leading-relaxed">
                You agree not to use the app to scan illegal items, generate fraudulent listings, or reverse-engineer the API.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mt-12 mb-6 text-white border-b border-amber-500/30 pb-3">
                6. Termination
              </h2>
              <p className="text-zinc-300 leading-relaxed">
                We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>

            <section className="mt-16 p-8 bg-gradient-to-r from-amber-900/20 to-orange-900/20 rounded-2xl border border-amber-500/30">
              <h2 className="text-3xl font-bold mb-4 text-white">Contact Us</h2>
              <p className="text-zinc-300 leading-relaxed">
                If you have any questions about these Terms, please contact us at <a href="mailto:hello@lootlook.app" className="text-amber-400 hover:text-amber-300 underline font-medium">hello@lootlook.app</a>.
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

