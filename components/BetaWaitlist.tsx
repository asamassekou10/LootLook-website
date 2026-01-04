'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TestTube2, Sparkles, Send, CheckCircle2, XCircle, Loader2 } from 'lucide-react';

const ScrollReveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, type: "spring" as const, bounce: 0.3 } as const}
  >
    {children}
  </motion.div>
);

export default function BetaWaitlist() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    collectionType: '',
    feedbackFocus: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ email: '', name: '', collectionType: '', feedbackFocus: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const TESTFLIGHT_URL = 'https://testflight.apple.com/join/BFV58W4E';

  return (
    <section className="py-32 relative overflow-hidden bg-zinc-950">
      {/* Background Gradient */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl pointer-events-none"
      >
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px]" />
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            {/* Beta Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-8"
            >
              <TestTube2 className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 font-bold text-sm uppercase tracking-wider">Beta Program</span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Be among the first to test LootLook
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              Our iOS beta is live on TestFlight! Join early testers, help shape the future of collection management,
              and get exclusive access to new features before anyone else.
            </p>

            {/* TestFlight CTA Button */}
            <motion.a
              href={TESTFLIGHT_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-black px-8 py-4 rounded-xl font-bold shadow-[0_0_30px_rgba(251,191,36,0.4)] hover:shadow-[0_0_50px_rgba(251,191,36,0.6)] transition-shadow mb-6"
            >
              <TestTube2 className="w-6 h-6" />
              <span className="text-lg">Join TestFlight Beta Now</span>
            </motion.a>

            <p className="text-zinc-500 text-sm mb-12">
              Limited spots available · iOS 15.0 or later required
            </p>
          </div>
        </ScrollReveal>

        {/* Waitlist Form */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-3">Join the Waitlist</h3>
                <p className="text-zinc-400">
                  Want updates on new features and be notified when we have more beta slots? Sign up below!
                </p>
              </div>

              {status === 'success' ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">You're on the list!</h4>
                  <p className="text-zinc-400">
                    Check your email for confirmation and next steps. We'll keep you updated on the beta program.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                      Email Address <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading'}
                      className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Collection Type */}
                  <div>
                    <label htmlFor="collectionType" className="block text-sm font-semibold text-white mb-2">
                      What do you collect?
                    </label>
                    <select
                      id="collectionType"
                      name="collectionType"
                      value={formData.collectionType}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="" className="bg-zinc-900">Select a category</option>
                      <option value="cameras" className="bg-zinc-900">Cameras & Photography Gear</option>
                      <option value="sneakers" className="bg-zinc-900">Sneakers</option>
                      <option value="cards" className="bg-zinc-900">Trading Cards</option>
                      <option value="watches" className="bg-zinc-900">Watches</option>
                      <option value="vinyl" className="bg-zinc-900">Vinyl Records</option>
                      <option value="toys" className="bg-zinc-900">Toys & Collectibles</option>
                      <option value="comics" className="bg-zinc-900">Comics & Books</option>
                      <option value="art" className="bg-zinc-900">Art & Prints</option>
                      <option value="other" className="bg-zinc-900">Other</option>
                    </select>
                  </div>

                  {/* Feedback Focus */}
                  <div>
                    <label htmlFor="feedbackFocus" className="block text-sm font-semibold text-white mb-2">
                      What aspect would you like to help test?
                    </label>
                    <select
                      id="feedbackFocus"
                      name="feedbackFocus"
                      value={formData.feedbackFocus}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <option value="" className="bg-zinc-900">Select focus area</option>
                      <option value="ai-accuracy" className="bg-zinc-900">AI Recognition Accuracy</option>
                      <option value="ui-ux" className="bg-zinc-900">User Interface & Experience</option>
                      <option value="features" className="bg-zinc-900">New Features & Ideas</option>
                      <option value="performance" className="bg-zinc-900">App Performance</option>
                      <option value="general" className="bg-zinc-900">General Feedback</option>
                    </select>
                  </div>

                  {/* Error Message */}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-red-400"
                    >
                      <XCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">{errorMessage}</span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                    whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-black px-6 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Joining Waitlist...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Join Waitlist</span>
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-zinc-500 text-xs mt-4">
                    By signing up, you agree to receive updates about LootLook beta program.
                  </p>
                </form>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
