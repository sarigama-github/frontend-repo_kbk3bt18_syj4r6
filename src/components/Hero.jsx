import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Trophy, ShoppingBag, User } from 'lucide-react';

const NavLink = ({ href, label }) => (
  <a
    href={href}
    className="text-sm md:text-base text-white/80 hover:text-white transition-colors"
  >
    {label}
  </a>
);

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      {/* Starry gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(59,130,246,.35),transparent),radial-gradient(800px_400px_at_10%_20%,rgba(168,85,247,.25),transparent)] pointer-events-none" />

      {/* Top navigation baked into hero to keep component count minimal */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 py-6 md:py-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-400 to-violet-500 p-[2px]">
              <div className="h-full w-full rounded-[10px] bg-black grid place-items-center">
                <Rocket className="h-5 w-5 text-cyan-300" />
              </div>
            </div>
            <span className="font-semibold tracking-wide text-white">Nebula Tournaments</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#tournaments" label="Tournaments" />
            <NavLink href="#market" label="Market" />
            <NavLink href="#profile" label="Profile" />
          </nav>

          <a
            href="#tournaments"
            className="hidden md:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2 text-white shadow-lg shadow-blue-600/30 hover:opacity-95 transition"
          >
            <Trophy className="h-4 w-4" />
            <span>Join a Match</span>
          </a>
        </div>
      </div>

      {/* 3D Spline scene */}
      <div className="relative z-0 h-[60vh] md:h-[70vh]">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay for readability; doesn't block interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent/20 to-transparent" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto -mt-10 md:-mt-20 max-w-7xl px-4 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-violet-200">
            Compete, Win Coins, Trade for Real Rewards
          </h1>
          <p className="mt-4 text-white/70">
            Host and join gaming tournaments across your favorite titles. Earn coins from wins
            and swap them for exclusive gear in the marketplace.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#tournaments"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/30 hover:opacity-95 transition"
            >
              <Trophy className="h-4 w-4" /> Explore Tournaments
            </a>
            <a
              href="#market"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur px-5 py-3 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-white/15 transition"
            >
              <ShoppingBag className="h-4 w-4" /> Visit Market
            </a>
            <a
              href="#profile"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 backdrop-blur px-5 py-3 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-white/15 transition md:hidden"
            >
              <User className="h-4 w-4" /> Your Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
