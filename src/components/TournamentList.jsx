import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Gamepad2, Clock } from 'lucide-react';

const tournaments = [
  {
    id: 1,
    title: 'Valor Clash Cup',
    game: 'Valorant',
    date: 'Sat, 7 PM',
    prize: 500,
    slots: '32 teams',
    color: 'from-rose-500 to-orange-500',
  },
  {
    id: 2,
    title: 'Arenas Royale',
    game: 'Apex Legends',
    date: 'Sun, 6 PM',
    prize: 350,
    slots: '20 squads',
    color: 'from-blue-600 to-cyan-500',
  },
  {
    id: 3,
    title: 'Strike Masters',
    game: 'CS2',
    date: 'Fri, 9 PM',
    prize: 250,
    slots: '16 teams',
    color: 'from-violet-600 to-fuchsia-500',
  },
];

const Card = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 p-5"
  >
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-br ${item.color}`} />
    <div className="relative flex items-start justify-between">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
          <Gamepad2 className="h-3.5 w-3.5" /> {item.game}
        </div>
        <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
        <p className="mt-1 text-sm text-white/60 flex items-center gap-2">
          <Clock className="h-4 w-4" /> {item.date} • {item.slots}
        </p>
      </div>
      <div className="text-right">
        <div className="text-xs text-white/60">Prize</div>
        <div className="text-xl font-bold text-cyan-300">{item.prize} coins</div>
      </div>
    </div>
    <div className="mt-4 flex items-center justify-between">
      <button className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white text-sm shadow-lg shadow-cyan-500/20 hover:opacity-95 transition inline-flex items-center gap-2">
        <Trophy className="h-4 w-4" /> Join
      </button>
      <button className="rounded-lg bg-white/10 ring-1 ring-white/15 px-3 py-2 text-white/80 text-sm hover:bg-white/15 transition">
        Details
      </button>
    </div>
  </motion.div>
);

export default function TournamentList() {
  return (
    <section id="tournaments" className="relative bg-gradient-to-b from-black to-slate-950 py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Trending Tournaments</h2>
            <p className="text-white/60 text-sm md:text-base">Compete in curated matchups across top titles.</p>
          </div>
          <a href="#" className="text-cyan-300 text-sm hover:text-white transition">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tournaments.map((t) => (
            <Card key={t.id} item={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
