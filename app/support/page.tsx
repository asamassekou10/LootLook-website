import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { HelpCircle, Mail } from 'lucide-react';

export default function Support() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="w-10 h-10 text-amber-400" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Help & Support
            </h1>
          </div>
          <p className="text-zinc-400 mb-12">Find answers to common questions</p>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-8 text-white border-b border-amber-500/30 pb-3">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-zinc-900/50 rounded-xl p-6 border border-white/10 hover:border-amber-500/50 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">How do I cancel my subscription?</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Subscriptions are managed directly by Apple. Go to your iPhone Settings → Tap your Name → Subscriptions → LootLook → Cancel Subscription.
                  </p>
                </div>

                <div className="bg-zinc-900/50 rounded-xl p-6 border border-white/10 hover:border-amber-500/50 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">Why is the price estimate different from eBay?</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Our AI analyzes "Sold Listings" to find an average market range. Listing prices on eBay are often higher than what items actually sell for. We focus on the sold price to give you a realistic value.
                  </p>
                </div>

                <div className="bg-zinc-900/50 rounded-xl p-6 border border-white/10 hover:border-amber-500/50 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">The app identified my item incorrectly.</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    Lighting and background clutter can affect AI accuracy. Try placing the item on a plain surface with good lighting and scanning again.
                  </p>
                </div>

                <div className="bg-zinc-900/50 rounded-xl p-6 border border-white/10 hover:border-amber-500/50 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">How do I restore my purchases?</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    If you bought a Pro subscription but don't see it active, go to the app Settings → Tap "Restore Purchases."
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-16 p-8 bg-gradient-to-r from-amber-900/20 to-orange-900/20 rounded-2xl border border-amber-500/30">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-8 h-8 text-amber-400" />
                <h2 className="text-3xl font-bold text-white">Still need help?</h2>
              </div>
              <p className="text-zinc-300 leading-relaxed mb-4">
                Contact our team directly:
              </p>
              <p className="text-zinc-300 leading-relaxed">
                Email: <a href="mailto:hello@lootlook.app" className="text-amber-400 hover:text-amber-300 underline font-medium text-lg">hello@lootlook.app</a>
              </p>
              <p className="text-zinc-400 text-sm mt-4 italic">
                (We typically respond within 24 hours)
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

