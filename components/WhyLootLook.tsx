'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, Zap } from 'lucide-react';

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

const comparisons = [
  {
    feature: "Add new items",
    spreadsheet: "Manual typing, formulas",
    otherApps: "Basic form entry",
    lootlook: "AI photo scan",
  },
  {
    feature: "Item identification",
    spreadsheet: "Research yourself",
    otherApps: "Manual search",
    lootlook: "Instant AI recognition",
  },
  {
    feature: "Value tracking",
    spreadsheet: "Manual updates",
    otherApps: "Limited data",
    lootlook: "Real-time market data",
  },
  {
    feature: "Multi-device sync",
    spreadsheet: "Cloud file sharing",
    otherApps: "Sometimes",
    lootlook: "Seamless & instant",
  },
  {
    feature: "Price history",
    spreadsheet: "Create charts manually",
    otherApps: "Basic graphs",
    lootlook: "Interactive charts",
  },
  {
    feature: "Setup time",
    spreadsheet: "Hours",
    otherApps: "Minutes",
    lootlook: "Seconds",
  },
];

export default function WhyLootLook() {
  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.03),transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6"
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">Why LootLook</span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight">
              Stop struggling with<br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                outdated tools.
              </span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Spreadsheets are for accounting. LootLook is purpose-built for collectors who want speed, accuracy, and insights.
            </p>
          </div>
        </ScrollReveal>

        {/* Comparison Table */}
        <ScrollReveal delay={0.2}>
          <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-10 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 mb-6 pb-6 border-b border-white/10">
              <div className="text-zinc-500 text-sm font-semibold uppercase tracking-wider"></div>
              <div className="text-center">
                <div className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-2">Spreadsheets</div>
                <div className="inline-flex items-center justify-center w-8 h-8 bg-zinc-800 rounded-lg">
                  <span className="text-lg">📊</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-2">Other Apps</div>
                <div className="inline-flex items-center justify-center w-8 h-8 bg-zinc-800 rounded-lg">
                  <span className="text-lg">📱</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">LootLook</div>
                <div className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg">
                  <span className="text-lg">✨</span>
                </div>
              </div>
            </div>

            {/* Table Rows */}
            <div className="space-y-4">
              {comparisons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                  className="grid grid-cols-4 gap-4 items-center py-4 px-4 rounded-xl hover:bg-white/[0.02] transition-colors"
                >
                  {/* Feature Name */}
                  <div className="text-white font-medium text-sm md:text-base">
                    {item.feature}
                  </div>

                  {/* Spreadsheet */}
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 text-zinc-500 text-xs md:text-sm">
                      <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                      <span className="hidden md:inline">{item.spreadsheet}</span>
                    </div>
                  </div>

                  {/* Other Apps */}
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 text-zinc-400 text-xs md:text-sm">
                      <div className="w-4 h-4 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                      </div>
                      <span className="hidden md:inline">{item.otherApps}</span>
                    </div>
                  </div>

                  {/* LootLook */}
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 text-amber-400 text-xs md:text-sm font-semibold">
                      <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="hidden md:inline">{item.lootlook}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Highlight */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-6 text-center">
                <p className="text-amber-400 font-bold text-lg mb-2">
                  🚀 Built for speed. Powered by AI. Made for collectors.
                </p>
                <p className="text-zinc-400 text-sm">
                  Stop wasting hours on manual data entry. Start tracking smarter in seconds.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <motion.a
              href="#beta-waitlist"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-black px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-amber-500/25 transition-all"
            >
              <Zap className="w-5 h-5" />
              <span>Experience The Difference</span>
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
