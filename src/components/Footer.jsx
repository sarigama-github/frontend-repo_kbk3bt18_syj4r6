import React from 'react';
import { Github, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white/70 text-sm">© {new Date().getFullYear()} Nebula Tournaments. All rights reserved.</div>
        <div className="flex items-center gap-4 text-white/70">
          <a href="#" aria-label="GitHub" className="hover:text-white transition"><Github className="h-5 w-5" /></a>
          <a href="#" aria-label="Twitter" className="hover:text-white transition"><Twitter className="h-5 w-5" /></a>
          <a href="#" aria-label="YouTube" className="hover:text-white transition"><Youtube className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  );
}
