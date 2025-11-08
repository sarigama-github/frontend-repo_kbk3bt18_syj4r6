import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Coins, Star } from 'lucide-react';

const items = [
  { id: 1, name: 'Pro Gaming Mouse', price: 420, rating: 4.8, img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, name: 'RGB Mechanical Keyboard', price: 690, rating: 4.7, img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Studio Headset', price: 540, rating: 4.6, img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1200&auto=format&fit=crop' },
];

const ProductCard = ({ item }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition"
  >
    <div className="relative aspect-video overflow-hidden">
      <img src={item.img} alt={item.name} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>
    <div className="p-5">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-white font-semibold">{item.name}</h3>
          <div className="mt-1 text-sm text-white/60 flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-300" /> {item.rating}
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-white/60">Price</div>
          <div className="text-lg font-bold text-cyan-300">{item.price} coins</div>
        </div>
      </div>
      <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-500 px-4 py-2 text-white text-sm shadow-lg shadow-emerald-600/20 hover:opacity-95 transition">
        <ShoppingBag className="h-4 w-4" /> Redeem
      </button>
    </div>
  </motion.div>
);

export default function Market() {
  return (
    <section id="market" className="relative bg-slate-950 py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Marketplace</h2>
            <p className="text-white/60 text-sm md:text-base">Swap your hard-earned coins for premium gear.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
            <Coins className="h-4 w-4 text-yellow-300" /> Live coin exchange
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((i) => (
            <ProductCard key={i.id} item={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
