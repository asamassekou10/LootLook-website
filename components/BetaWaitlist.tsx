'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TestTube2, Sparkles, Send, CheckCircle2, XCircle, Loader2, Users, Zap } from 'lucide-react';

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
    collectionType: '',
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
        setFormData({ email: '', collectionType: '' });
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

  return (
    <section id="beta-waitlist" className="relative py-16 md:py-20 overflow-hidden bg-black">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
      <motion.div
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 rounded-full blur-[80px]" />
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          {status === 'success' ? (
            // Success State
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <div className="inline-flex w-20 h-20 bg-green-500/10 border-2 border-green-500/30 rounded-full items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-400" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Check your inbox! 📬
              </h3>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-3">
                We've sent your <span className="text-amber-400 font-semibold">TestFlight invitation link</span> to <span className="text-white font-medium">{formData.email || 'your email'}</span>
              </p>
              <p className="text-zinc-500 text-sm">
                Don't see it? Check spam or contact{' '}
                <a href="mailto:hello@lootlook.app" className="text-amber-400 hover:text-amber-300 underline">
                  hello@lootlook.app
                </a>
              </p>
            </motion.div>
          ) : (
            // Form State
            <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-12 items-center">
              {/* Left: Header */}
              <div className="text-center md:text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
                    <TestTube2 className="w-4 h-4 text-amber-400" />
                    <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">Beta Access</span>
                    <Sparkles className="w-4 h-4 text-amber-400" />
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                    Join the beta.<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                      Get instant access.
                    </span>
                  </h2>

                  <p className="text-zinc-400 text-base md:text-lg mb-6 leading-relaxed">
                    TestFlight link delivered to your inbox instantly. Be among the first to experience the future of collection management.
                  </p>

                  {/* Trust Indicators */}
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                    <div className="flex items-center gap-2 text-zinc-500">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Limited spots</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500">
                      <Zap className="w-4 h-4 text-amber-500" />
                      <span>Instant delivery</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500">
                      <Users className="w-4 h-4 text-amber-500" />
                      <span>iOS 15.0+</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right: Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email - Required */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                        Email <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={status === 'loading'}
                        autoFocus
                        className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Collection Type - Optional */}
                    <div>
                      <label htmlFor="collectionType" className="block text-sm font-medium text-zinc-400 mb-2">
                        What you collect (optional)
                      </label>
                      <select
                        id="collectionType"
                        name="collectionType"
                        value={formData.collectionType}
                        onChange={handleChange}
                        disabled={status === 'loading'}
                        className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all disabled:opacity-50"
                      >
                        <option value="" className="bg-zinc-900">Select category</option>
                        <option value="cameras" className="bg-zinc-900">Cameras</option>
                        <option value="sneakers" className="bg-zinc-900">Sneakers</option>
                        <option value="cards" className="bg-zinc-900">Trading Cards</option>
                        <option value="watches" className="bg-zinc-900">Watches</option>
                        <option value="vinyl" className="bg-zinc-900">Vinyl</option>
                        <option value="toys" className="bg-zinc-900">Toys</option>
                        <option value="other" className="bg-zinc-900">Other</option>
                      </select>
                    </div>

                    {/* Error Message */}
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-2 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-red-400"
                      >
                        <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{errorMessage}</span>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={status === 'loading'}
                      whileHover={status !== 'loading' ? { scale: 1.02 } : {}}
                      whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                      className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 bg-[length:200%_100%] hover:bg-[position:100%_0] text-black px-6 py-4 rounded-lg font-bold shadow-lg hover:shadow-amber-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-base"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending invite...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Get My TestFlight Invite</span>
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-zinc-500 text-xs">
                      Free beta access · No credit card required · Unsubscribe anytime
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
