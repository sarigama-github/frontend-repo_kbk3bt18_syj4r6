import React from 'react';
import Hero from './components/Hero';
import TournamentList from './components/TournamentList';
import Market from './components/Market';
import Profile from './components/Profile';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <TournamentList />
      <Market />
      <Profile />
    </div>
  );
}

export default App;
