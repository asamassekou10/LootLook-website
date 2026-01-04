'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Apple } from 'lucide-react';

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

const faqs = [
  {
    question: "Is LootLook really free?",
    answer: "Yes! We're currently in beta, and all beta testers get free lifetime access to premium features. Once we launch publicly, early adopters will keep their premium access as a thank you for helping us improve.",
  },
  {
    question: "What types of collections can I track?",
    answer: "LootLook works with virtually any physical collection - cameras, sneakers, trading cards, watches, vinyl records, toys, comics, art, and more. Our AI is trained on millions of items across dozens of categories.",
  },
  {
    question: "How accurate is the AI identification?",
    answer: "Our AI achieves 95%+ accuracy on most popular collectibles. For rare or custom items, you can always manually edit details. The more you use LootLook, the smarter it gets at recognizing your specific collection niche.",
  },
  {
    question: "Is my data secure and private?",
    answer: "Absolutely. Your collection data is encrypted end-to-end and stored with bank-grade security. We never share or sell your data. You own your collection information and can export or delete it anytime.",
  },
  {
    question: "Can I access my collection offline?",
    answer: "Yes! LootLook works offline for viewing and browsing your collection. When you're back online, any changes sync automatically across all your devices.",
  },
  {
    question: "When will Android be available?",
    answer: "We're focused on perfecting the iOS experience first, but Android is on our roadmap. Join the beta waitlist to be notified when we expand to Android!",
  },
  {
    question: "How does the TestFlight beta work?",
    answer: "TestFlight is Apple's official beta testing platform. Once you join our waitlist, you'll receive an email with a TestFlight link. Tap it on your iPhone or iPad to install LootLook and start testing. It's that simple!",
  },
  {
    question: "Can I export my collection data?",
    answer: "Yes! Export your entire collection to CSV format anytime. Perfect for insurance documentation, appraisals, or just keeping a backup on your computer.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950"></div>
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-orange-600/10 to-amber-600/10 rounded-full blur-[120px]" />
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6"
            >
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">FAQ</span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight">
              Questions?<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                We've got answers.
              </span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about LootLook and the beta program.
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={0.05 * index}>
              <motion.div
                className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 group"
                >
                  <span className="text-white font-semibold text-base md:text-lg group-hover:text-amber-400 transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-zinc-400 group-hover:text-amber-400 transition-colors" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-zinc-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Final CTA */}
        <ScrollReveal delay={0.5}>
          <div className="bg-gradient-to-r from-orange-900 via-amber-800 to-orange-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.2),transparent_70%)]"></div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
                Ready to join the beta?
              </h3>
              <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
                Get instant access to LootLook on TestFlight. Start tracking your collection today.
              </p>

              <motion.a
                href="#beta-waitlist"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
              >
                <Apple className="w-7 h-7" />
                <span className="text-xl">Join Beta Waitlist</span>
              </motion.a>

              <p className="text-amber-200/70 text-sm mt-6">
                Free forever for beta testers · No credit card required
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Contact Footer */}
        <ScrollReveal delay={0.6}>
          <div className="text-center mt-12">
            <p className="text-zinc-500 text-sm">
              Still have questions?{' '}
              <a href="mailto:hello@lootlook.app" className="text-amber-400 hover:text-amber-300 underline">
                Email us
              </a>
              {' '}and we'll get back to you within 24 hours.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
