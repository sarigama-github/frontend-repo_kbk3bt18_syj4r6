import React from 'react';
import { motion } from 'framer-motion';
import { User, BadgeCheck, Coins, Settings } from 'lucide-react';

export default function Profile() {
  return (
    <section id="profile" className="relative bg-gradient-to-t from-black to-slate-950 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10"
        >
          <div className="p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative">
              <div className="h-28 w-28 rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-400 to-violet-500 p-[2px]">
                <div className="h-full w-full rounded-[14px] bg-black grid place-items-center">
                  <User className="h-12 w-12 text-cyan-200" />
                </div>
              </div>
              <span className="absolute -bottom-2 -right-2 inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2.5 py-1 text-xs font-medium text-white shadow">
                <BadgeCheck className="h-4 w-4" /> Pro
              </span>
            </div>

            <div className="flex-1 grid gap-2 text-center md:text-left">
              <h3 className="text-white text-2xl font-bold">NovaPlayer</h3>
              <p className="text-white/60">Competitive since 2020 • FPS, Battle Royale</p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                <Coins className="h-4 w-4 text-yellow-300" /> 1,240 coins available
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 w-full md:w-auto">
              <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 text-center">
                <div className="text-2xl font-bold text-white">38</div>
                <div className="text-xs text-white/60">Wins</div>
              </div>
              <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 text-center">
                <div className="text-2xl font-bold text-white">112</div>
                <div className="text-xs text-white/60">Matches</div>
              </div>
              <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 text-center">
                <div className="text-2xl font-bold text-white">86%</div>
                <div className="text-xs text-white/60">Rating</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/70 text-sm">
              Keep your streak going. Join a tournament and climb the leaderboard.
            </div>
            <div className="flex items-center gap-3">
              <a href="#tournaments" className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-cyan-500/20">Find a Match</a>
              <button className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-white/15">
                <Settings className="h-4 w-4" /> Settings
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
