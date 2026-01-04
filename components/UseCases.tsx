'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Footprints, CreditCard, Watch, Disc, Box, Home, DollarSign, FileText } from 'lucide-react';

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

const useCases = [
  {
    id: "garage-sales",
    icon: Home,
    title: "Garage Sales & Resellers",
    description: "Price items instantly for quick sales and maximize profits",
    stats: { items: "100+", value: "$5K", growth: "Fast turnover" },
    features: ["Quick valuation", "Price comparison", "Profit margins", "Batch scanning"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: "decluttering",
    icon: DollarSign,
    title: "Decluttering & Downsizing",
    description: "Know what to sell, donate, or keep based on real value",
    stats: { items: "200+", value: "$8K", growth: "Smart decisions" },
    features: ["Market values", "Sell vs donate", "Quick sorting", "Organize by value"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "insurance",
    icon: FileText,
    title: "Insurance & Documentation",
    description: "Create detailed inventories for insurance claims and records",
    stats: { items: "150+", value: "$25K", growth: "Peace of mind" },
    features: ["Photo documentation", "Value proof", "Export reports", "Claim support"],
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    id: "collectors",
    icon: Camera,
    title: "Collectors & Hobbyists",
    description: "Track vintage items, rare finds, and growing collections",
    stats: { items: "250+", value: "$45K", growth: "+15%" },
    features: ["Collection growth", "Market trends", "Rarity tracking", "Portfolio value"],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: "sneakers",
    icon: Footprints,
    title: "Sneaker Enthusiasts",
    description: "Manage sneakers with AI authentication and resale tracking",
    stats: { items: "80+", value: "$15K", growth: "+22%" },
    features: ["Colorway ID", "Resale values", "Size tracking", "Market demand"],
    gradient: "from-red-500 to-pink-500",
  },
  {
    id: "general",
    icon: Box,
    title: "Anything & Everything",
    description: "Electronics, furniture, tools, antiques - value anything",
    stats: { items: "300+", value: "$12K", growth: "Universal" },
    features: ["Any category", "Custom tags", "Flexible use", "Multi-purpose"],
    gradient: "from-orange-500 to-amber-500",
  },
];

export default function UseCases() {
  const [activeTab, setActiveTab] = useState(useCases[0].id);
  const activeCase = useCases.find(uc => uc.id === activeTab) || useCases[0];

  return (
    <section className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background gradient */}
      <motion.div
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight">
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">everyone.</span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Selling at a garage sale? Decluttering your home? Building a collection? Managing insurance? LootLook works for you.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Navigation */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {useCases.map((useCase) => (
              <motion.button
                key={useCase.id}
                onClick={() => setActiveTab(useCase.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === useCase.id
                    ? `bg-gradient-to-r ${useCase.gradient} text-black shadow-lg`
                    : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                <useCase.icon className="w-5 h-5" />
                <span className="text-sm">{useCase.title}</span>
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left: Content */}
              <div>
                <div className={`inline-flex w-16 h-16 bg-gradient-to-br ${activeCase.gradient} bg-opacity-20 rounded-2xl items-center justify-center mb-6`}>
                  <activeCase.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {activeCase.title}
                </h3>
                <p className="text-zinc-400 text-lg mb-8">
                  {activeCase.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {activeCase.stats.items}
                    </div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Items</div>
                  </div>
                  <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {activeCase.stats.value}
                    </div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Value</div>
                  </div>
                  <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                    <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">
                      {activeCase.stats.growth}
                    </div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Growth</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-4">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {activeCase.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-zinc-300">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${activeCase.gradient}`}></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Visual Placeholder */}
              <div className="relative">
                <div className={`aspect-square rounded-2xl bg-gradient-to-br ${activeCase.gradient} opacity-10 relative overflow-hidden`}>
                  {/* Decorative elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <activeCase.icon className="w-32 h-32 text-white/20" />
                  </div>
                  <div className="absolute top-4 right-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-4 left-4 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
                </div>

                {/* Decorative badge */}
                <div className="absolute -top-4 -right-4 bg-black border-2 border-white/20 rounded-full px-4 py-2">
                  <span className="text-xs font-bold text-amber-400">Popular</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <p className="text-zinc-500 text-sm mb-4">
              No matter what you're pricing, we've got you covered.
            </p>
            <motion.a
              href="#beta-waitlist"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
            >
              Start valuing your stuff
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
