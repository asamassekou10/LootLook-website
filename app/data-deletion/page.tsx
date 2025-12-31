import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { Trash2, Mail, Settings } from 'lucide-react';

export default function DataDeletion() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <Trash2 className="w-10 h-10 text-amber-400" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Data Deletion Request
            </h1>
          </div>
          <p className="text-zinc-400 mb-12">
            At LootLook, you have full control over your data.
          </p>

          <div className="prose prose-invert prose-amber max-w-none space-y-8">
            <section>
              <p className="text-zinc-300 leading-relaxed text-lg mb-8">
                If you wish to delete your account and all associated scan history ("The Stash"), you can do so in two ways:
              </p>
            </section>

            <section>
              <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-2xl p-8 border border-amber-500/50 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Settings className="w-8 h-8 text-amber-400" />
                  <h2 className="text-3xl font-bold text-white">Method 1: In-App Deletion (Instant)</h2>
                </div>
                
                <ol className="list-decimal list-inside space-y-4 text-zinc-300 ml-4">
                  <li className="leading-relaxed">Open the LootLook App.</li>
                  <li className="leading-relaxed">Go to the Settings tab.</li>
                  <li className="leading-relaxed">Scroll to the bottom and tap "Delete Account".</li>
                  <li className="leading-relaxed">Confirm the action. This will immediately wipe your user ID, scan history, and images from our servers. <strong className="text-red-400">This action cannot be undone.</strong></li>
                </ol>
              </div>

              <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-8 h-8 text-amber-400" />
                  <h2 className="text-3xl font-bold text-white">Method 2: Email Request</h2>
                </div>
                
                <p className="text-zinc-300 leading-relaxed mb-4">
                  If you cannot access the app, please email <a href="mailto:hello@lootlook.app" className="text-amber-400 hover:text-amber-300 underline font-medium">hello@lootlook.app</a> with the subject line <strong className="text-white">"Data Deletion Request."</strong>
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  Please provide the email address associated with your account. We will process your request within 30 days.
                </p>
              </div>
            </section>

            <div className="mt-12 p-6 bg-red-900/20 border-2 border-red-500/50 rounded-lg">
              <p className="text-red-200 font-semibold mb-2">⚠️ Important Note</p>
              <p className="text-zinc-300 leading-relaxed">
                Once your data is deleted, it cannot be recovered. This includes all your scan history, saved items in your Stash, and account information.
              </p>
            </div>

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

