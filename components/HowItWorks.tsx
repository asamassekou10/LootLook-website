'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Sparkles, TrendingUp, Rocket } from 'lucide-react';

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

const steps = [
  {
    number: "01",
    icon: Camera,
    title: "Snap a Photo",
    description: "Point your camera at any item in your collection. Our app works with cameras, sneakers, cards, watches, and more.",
    color: "from-amber-500 to-orange-500",
    iconColor: "text-amber-400",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI Identifies It",
    description: "Our advanced AI instantly recognizes your item, pulling details like brand, model, year, and estimated value from our database.",
    color: "from-orange-500 to-red-500",
    iconColor: "text-orange-400",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Track & Analyze",
    description: "See your collection's total value, price trends, and analytics. Export, share, or keep it private - you're in control.",
    color: "from-red-500 to-pink-500",
    iconColor: "text-red-400",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Grow Your Collection",
    description: "Make informed decisions about what to buy or sell. Watch your portfolio grow and become a smarter collector.",
    color: "from-pink-500 to-purple-500",
    iconColor: "text-pink-400",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950"></div>
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/5 via-orange-600/10 to-amber-600/5 rounded-full blur-[100px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">How It Works</span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight">
              From photo to portfolio<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                in seconds.
              </span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              No spreadsheets. No manual entry. Just point, shoot, and let AI do the heavy lifting.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>

          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={0.1 * (index + 1)}>
              <motion.div
                whileHover={{ y: -8 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-0 text-7xl font-black text-white/5 select-none">
                  {step.number}
                </div>

                <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:border-amber-500/30 transition-all">
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${step.color} bg-opacity-10 rounded-xl flex items-center justify-center mb-6 relative z-10`}>
                    <step.icon className={`w-7 h-7 ${step.iconColor}`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
                        Step {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Decorative gradient blur */}
                  <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${step.color} opacity-10 blur-3xl rounded-full pointer-events-none`}></div>
                </div>

                {/* Arrow (Desktop Only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-4 z-20">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-amber-500/50">
                        <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.6}>
          <div className="text-center mt-16">
            <p className="text-zinc-500 text-sm mb-6">
              Ready to experience the future of collection management?
            </p>
            <motion.a
              href="#beta-waitlist"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-black px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-amber-500/25 transition-all"
            >
              <Rocket className="w-5 h-5" />
              <span>Start Your Free Beta</span>
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
