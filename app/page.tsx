'use client';

import React, { useState } from 'react';
import { Menu, X, BarChart3, ScanLine, ShieldCheck, Apple, Camera, CheckCircle2, AlertCircle, Search, TrendingUp, Share2, Smartphone, Tag, Clock } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import BetaWaitlist from '@/components/BetaWaitlist';
import HowItWorks from '@/components/HowItWorks';
import UseCases from '@/components/UseCases';
import WhyLootLook from '@/components/WhyLootLook';
import FAQ from '@/components/FAQ';

// --- CUSTOM STYLES FOR SHIMMER EFFECTS ---
const customStyles = `
  @keyframes shimmer {
    0% { background-position: 200% center; }
    100% { background-position: -200% center; }
  }
  .animate-shimmer {
    animation: shimmer 8s linear infinite;
  }
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.1); }
  }
  .animate-pulse-slow {
    animation: pulse-slow 4s ease-in-out infinite;
  }
`;

// --- ANIMATION VARIANTS ---

// Staggered container for text elements
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Individual item slide-up animation
const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      type: 'spring' as const, 
      stiffness: 100, 
      damping: 15 
    } as const,
  },
};

// The "God Rays" light burst from behind the phone
const lightBurstVariants = {
  closed: { opacity: 0, scale: 0.5 },
  open: { 
    opacity: [0, 1, 0.8], 
    scale: [0.5, 1.5, 1.2],
    transition: { duration: 2, delay: 0.5, ease: "easeOut" as const } as const
  }
};

// The Phone floating up 
const phoneEmergeVariants = {
  closed: { y: 100, opacity: 0, scale: 0.9 },
  open: { 
    y: 0, 
    opacity: 1,
    scale: 1,
    transition: { duration: 1.0, delay: 0.5, type: "spring" as const, bounce: 0.5 } as const
  }
};

// Scanning UI Animation inside phone
const scanLineVariants = {
  scanning: {
    top: ["0%", "100%", "0%"],
    transition: { duration: 3, repeat: Infinity, ease: "linear" as const } as const
  }
};

const resultCardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { delay: 1.5, type: "spring" as const, damping: 12 } as const
  }
};

// Continuous floating motion for the phone
const floatingAnimation = {
  y: [-10, 5, -10], 
  rotate: [0, 1, 0, -1, 0],
  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const, delay: 1.5 } as const
};

// Reusable Component for Scroll-into-view animations
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

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBgOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-500 selection:text-black font-sans overflow-x-hidden">
      <style>{customStyles}</style>
      
      {/* --- NAVIGATION --- */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring" as const, stiffness: 100, damping: 20 } as const}
        className="fixed w-full z-50 px-4 pt-3"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="bg-black/80 backdrop-blur-md border border-white/20 rounded-xl shadow-xl"
            style={{ 
              opacity: headerBgOpacity,
            }}
          >
            <div className="px-5 py-2.5 relative">
              <div className="flex justify-between h-12 items-center">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center gap-2.5 cursor-pointer group">
                  <div className="relative w-8 h-8 transform group-hover:scale-110 transition-transform duration-300">
        <Image
                      src="/icon.png" 
                      alt="LootLook Logo" 
                      width={32} 
                      height={32}
                      className="object-contain"
          priority
        />
                  </div>
                  <span className="font-bold text-xl tracking-tight text-white relative">
                    LootLook
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                  <a href="#features" className="text-zinc-400 hover:text-amber-400 transition-colors text-xs font-medium relative group">
                    Features
                    <span className="absolute -bottom-3 left-1/2 w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-1/2"></span>
                  </a>
                  <motion.a
                    href="#beta-waitlist"
                    whileHover={{ scale: 1.05, backgroundColor: "#fbbf24" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-bold transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                  >
                    Join Beta
                  </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                  <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-amber-400 z-50 relative">
                    {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Mobile Menu Dropdown */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden border-t border-white/10 mt-4 pt-4"
                  >
                    <div className="px-2 pb-4 space-y-2">
                      <a href="#features" className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-amber-400 hover:bg-white/5 rounded-md">Features</a>
                      <a href="#beta-waitlist" className="w-full mt-4 bg-gradient-to-r from-amber-500 to-orange-500 text-black px-5 py-3 rounded-lg font-bold shadow-lg block text-center">Join Beta Waitlist</a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* --- HERO SECTION (Split Layout) --- */}
      <section className="relative pt-28 pb-20 lg:pt-24 lg:min-h-screen flex items-center overflow-hidden">
        
        {/* Background Ambient Glow */}
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl pointer-events-none"
        >
          <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-amber-600/20 rounded-full blur-[120px] mix-blend-screen" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COL: Header Text & Button */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left z-20 flex flex-col justify-center lg:pl-8 xl:pl-12" 
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-white drop-shadow-2xl">
              Know what your stuff is <br />
              <span className="relative whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#FFD700] bg-[length:200%_auto] animate-shimmer">
                really worth.
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-zinc-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Snap a photo, get instant value. Perfect for garage sales, decluttering, insurance, or building your collection. AI-powered pricing in seconds.
            </motion.p>
            
            {/* --- HERO BUTTON --- */}
            <motion.div variants={itemVariants} className="flex flex-col lg:flex-row items-center gap-4 justify-center lg:justify-start">
                <motion.a
                    href="#beta-waitlist"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-bold shadow-[0_0_30px_rgba(251,191,36,0.4)] hover:shadow-[0_0_50px_rgba(251,191,36,0.6)] transition-shadow whitespace-nowrap border-2 border-white"
                >
                    <Apple className="w-6 h-6" />
                    <span className="text-lg">Join Beta Waitlist</span>
                </motion.a>
                <div className="text-zinc-500 text-xs flex items-center gap-2">
                    <AlertCircle className="w-3 h-3" /> Android version coming later
        </div>
            </motion.div>
          </motion.div>

          {/* --- RIGHT COL: Phone Animation --- */}
          <motion.div 
            className="relative w-full flex items-center justify-center lg:justify-start lg:-ml-8 z-10"
            initial="closed"
            whileInView="open"
            viewport={{ once: true, amount: 0.3 }}
          >
            
            {/* The "God Rays" Light Burst */}
            <motion.div
                variants={lightBurstVariants}
                className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-amber-500/30 to-transparent rounded-full blur-[90px] pointer-events-none z-0 mix-blend-screen"
            />

            {/* --- THE PHONE (Smaller) --- */}
            <motion.div variants={phoneEmergeVariants} className="z-20">
               <motion.div animate={floatingAnimation}>
                {/* RESIZED PHONE CONTAINER 
                    Original: h-[520px] w-[260px]
                    New: h-[380px] w-[190px] (~30% smaller)
                */}
                <div className="relative border-zinc-800 bg-black border-[3px] rounded-[1.5rem] h-[380px] w-[190px] shadow-[0_0_60px_rgba(245,158,11,0.25)] overflow-hidden">
                    
                    {/* SCREEN CONTENT */}
                    <div className="w-full h-full bg-zinc-900 relative overflow-hidden flex flex-col">
                        {/* Status Bar */}
                        <div className="w-full h-5 bg-black flex justify-between px-3 items-center text-[8px] text-white">
                           <span>9:41</span>
                           <div className="flex gap-1">
                             <div className="w-2 h-1 bg-white rounded-[1px]"></div>
                             <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                           </div>
                        </div>

                        {/* Top Overlay */}
                        <div className="absolute top-0 w-full h-12 bg-gradient-to-b from-black/80 to-transparent z-10 flex justify-center pt-4">
                            <div className="bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10 flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-[9px] font-mono text-white/90">AI ACTIVE</span>
                            </div>
                        </div>

                        {/* Camera View */}
                        <div className="flex-1 bg-zinc-800 relative flex items-center justify-center">
                            {/* Scanned Object (Scaled Down) */}
                            <div className="relative w-20 h-20 bg-zinc-700 rounded-xl flex items-center justify-center shadow-2xl">
                               <Camera className="w-10 h-10 text-zinc-500" />
                               <motion.div 
                                 className="absolute inset-0 bg-gradient-to-b from-amber-500/0 via-amber-500/20 to-amber-500/0 w-full h-1/4 border-b border-amber-500/50"
                                 variants={scanLineVariants}
                                 animate="scanning"
                               />
                            </div>
                            {/* Reticles (Scaled Down) */}
                            <div className="absolute w-32 h-32 border border-amber-500/30 rounded-lg">
                                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-amber-400"></div>
                                <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-amber-400"></div>
                                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-amber-400"></div>
                                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-amber-400"></div>
                            </div>
                        </div>

                        {/* Result Card (Scaled Down) */}
                        <motion.div 
                           variants={resultCardVariants}
                           className="absolute bottom-3 left-3 right-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-3 shadow-xl z-20"
                        >
                           <div className="flex justify-between items-start mb-1">
                              <div>
                                 <h4 className="text-white font-bold text-xs">Leica M6</h4>
                                 <p className="text-zinc-400 text-[9px]">Used · Good</p>
                              </div>
                              <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                           </div>
                           <div className="mt-1.5 pt-1.5 border-t border-white/10 flex justify-between items-center">
                              <span className="text-amber-400 font-bold text-sm">$2,450</span>
                              <div className="bg-amber-500 text-black text-[8px] font-bold px-1.5 py-0.5 rounded">HIGH VALUE</div>
                           </div>
                        </motion.div>
                    </div>
                </div>
              </motion.div>
            </motion.div>

          </motion.div>
          {/* End Right Column */}
          
        </div>
      </section>

      {/* --- BETA WAITLIST SECTION --- */}
      <BetaWaitlist />

      {/* --- FEATURES GRID (Scroll Revealed) --- */}
      <section id="features" className="py-32 bg-zinc-950 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Everything you need to value your stuff.</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Whether you're selling at a garage sale, tracking a collection, or just curious - LootLook makes pricing effortless.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Feature 1 */}
            <ScrollReveal delay={0.1}>
              <div className="h-full p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-amber-500/50 transition-all group hover:-translate-y-2 duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400/20 to-orange-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ScanLine className="text-amber-400 w-7 h-7" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">Instant AI Scanning</h3>
                <p className="text-zinc-400 leading-relaxed text-base lg:text-lg mb-4">
                  Just snap a photo. Our advanced AI identifies your item, pulls historical details, and adds it to your stash in seconds.
                </p>
                <div className="relative h-48 rounded-xl overflow-hidden border border-white/5">
                  <Image
                    src="/Lootlook App Store 1.png"
                    alt="AI Scanning Demo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Feature 2 */}
            <ScrollReveal delay={0.15}>
              <div className="h-full p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-orange-500/50 transition-all group hover:-translate-y-2 duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400/20 to-red-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="text-orange-400 w-7 h-7" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">Portfolio Tracking</h3>
                <p className="text-zinc-400 leading-relaxed text-base lg:text-lg mb-4">
                  Watch your collection's value grow. Get real-time analytics on your total stash value and individual item market trends.
                </p>
                <div className="relative h-48 rounded-xl overflow-hidden border border-white/5">
                  <Image
                    src="/Lootlook App Store 2.png"
                    alt="Portfolio Analytics"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Feature 3 */}
            <ScrollReveal delay={0.2}>
              <div className="h-full p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-yellow-500/50 transition-all group hover:-translate-y-2 duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400/20 to-amber-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="text-yellow-400 w-7 h-7" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">Secure Cloud Sync</h3>
                <p className="text-zinc-400 leading-relaxed text-base lg:text-lg">
                  Your data is synced and backed up with bank-grade security. Access your collection from any device, anytime.
                </p>
              </div>
            </ScrollReveal>

            {/* Feature 4 - NEW */}
            <ScrollReveal delay={0.25}>
              <div className="h-full p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-blue-500/50 transition-all group hover:-translate-y-2 duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400/20 to-cyan-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Search className="text-blue-400 w-7 h-7" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">Smart Search & Filter</h3>
                <p className="text-zinc-400 leading-relaxed text-base lg:text-lg">
                  Find any item instantly with powerful search. Filter by category, value, condition, or custom tags to organize your collection.
                </p>
              </div>
            </ScrollReveal>

            {/* Feature 5 - NEW */}
            <ScrollReveal delay={0.3}>
              <div className="h-full p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-green-500/50 transition-all group hover:-translate-y-2 duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp className="text-green-400 w-7 h-7" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">Price History Tracking</h3>
                <p className="text-zinc-400 leading-relaxed text-base lg:text-lg">
                  Track market values over time with interactive charts. Know when to sell and make data-driven decisions about your collection.
                </p>
              </div>
            </ScrollReveal>

            {/* Feature 6 - NEW */}
            <ScrollReveal delay={0.35}>
              <div className="h-full p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/50 transition-all group hover:-translate-y-2 duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Share2 className="text-purple-400 w-7 h-7" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">Export & Share</h3>
                <p className="text-zinc-400 leading-relaxed text-base lg:text-lg">
                  Share your collection with others or export to CSV. Perfect for insurance claims, appraisals, or showing off your finds.
                </p>
              </div>
            </ScrollReveal>

            {/* Feature 7 - NEW */}
            <ScrollReveal delay={0.4}>
              <div className="h-full p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-indigo-500/50 transition-all group hover:-translate-y-2 duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-400/20 to-blue-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Smartphone className="text-indigo-400 w-7 h-7" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">Multi-Device Sync</h3>
                <p className="text-zinc-400 leading-relaxed text-base lg:text-lg">
                  Seamlessly access your collection across iPhone, iPad, and web. Your data stays in sync in real-time across all devices.
                </p>
              </div>
            </ScrollReveal>

            {/* Feature 8 - NEW */}
            <ScrollReveal delay={0.45}>
              <div className="h-full p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-rose-500/50 transition-all group hover:-translate-y-2 duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-rose-400/20 to-red-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Tag className="text-rose-400 w-7 h-7" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">Custom Tags & Categories</h3>
                <p className="text-zinc-400 leading-relaxed text-base lg:text-lg">
                  Organize your way with unlimited custom tags and categories. Create collections within collections for ultimate flexibility.
                </p>
              </div>
            </ScrollReveal>

            {/* Feature 9 - NEW */}
            <ScrollReveal delay={0.5}>
              <div className="h-full p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-cyan-500/50 transition-all group hover:-translate-y-2 duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400/20 to-teal-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="text-cyan-400 w-7 h-7" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-white">Timeline & History</h3>
                <p className="text-zinc-400 leading-relaxed text-base lg:text-lg">
                  Track when you acquired each item, see your collection's growth over time, and never forget the story behind your finds.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS SECTION --- */}
      <HowItWorks />

      {/* --- USE CASES SECTION --- */}
      <UseCases />

      {/* --- WHY LOOTLOOK SECTION --- */}
      <WhyLootLook />

      {/* --- FAQ SECTION --- */}
      <FAQ />

      {/* --- FOOTER --- */}
      <footer className="bg-zinc-950 border-t border-white/10 pt-20 pb-10 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10">
                  <Image 
                    src="/icon.png" 
                    alt="LootLook Logo" 
                    width={40} 
                    height={40}
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-2xl text-white">LootLook</span>
              </div>
              <p className="text-zinc-500 leading-relaxed max-w-sm">
                The modern tool for digitalizing physical collections. 
                Scan, track, and value your items with the power of AI.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Product</h4>
              <ul className="space-y-4 text-zinc-400">
                <li><a href="#features" className="hover:text-amber-400 transition-colors relative left-0 hover:left-1 transition-all">Features</a></li>
                <li><a href="/support" className="hover:text-amber-400 transition-colors relative left-0 hover:left-1 transition-all">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Legal</h4>
              <ul className="space-y-4 text-zinc-400">
                <li><a href="/privacy" className="hover:text-amber-400 transition-colors relative left-0 hover:left-1 transition-all">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-amber-400 transition-colors relative left-0 hover:left-1 transition-all">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Support</h4>
              <ul className="space-y-4 text-zinc-400">
                <li><a href="/support" className="hover:text-amber-400 transition-colors relative left-0 hover:left-1 transition-all">Help & Support</a></li>
                <li><a href="/data-deletion" className="hover:text-amber-400 transition-colors relative left-0 hover:left-1 transition-all">Data Deletion</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 text-sm">© 2025 LootLook. All rights reserved.</p>
            <div className="flex gap-4">
               {[1, 2, 3].map((i) => (
                 <motion.div key={i} whileHover={{ y: -3, color: "#fbbf24" }} className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-zinc-500 cursor-pointer border border-white/5 hover:border-amber-500/50 transition-colors">
                    <div className="w-5 h-5 bg-current rounded-sm"></div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
