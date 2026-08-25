import React from 'react';

export const Header = ({ profile, setProfile, stats }) => {
  const isMinato = profile === 'minato';

  return (
    <header className={`sticky top-0 z-40 text-white shadow-lg ${isMinato ? 'bg-gradient-to-r from-pink-500 via-rose-500 to-red-400' : 'bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600'}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* App Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl shadow-inner float-anim">
            🎓
          </div>
          <div>
            <h1 className="font-extrabold text-xl tracking-tight flex items-center gap-2">
              岡山中受ナビ
              <span className="text-xs bg-white/20 text-white px-2.5 py-0.5 rounded-full font-bold">Ver 2.5</span>
            </h1>
            <p className="text-xs opacity-90">岡山県立操山中・大安寺中等受検 ＆ 全学年完全対応</p>
          </div>
        </div>

        {/* Profile Selector & Stats Badges */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Profile Switcher */}
          <div className="bg-black/20 p-1 rounded-2xl flex items-center gap-1 border border-white/20">
            <button
              onClick={() => setProfile('minato')}
              className={`px-3 py-1.5 rounded-xl font-bold text-xs transition flex items-center gap-1.5 ${isMinato ? 'bg-white text-pink-600 shadow' : 'text-white/80 hover:text-white'}`}
            >
              <span>👧</span> みなと (小1)
            </button>
            <button
              onClick={() => setProfile('yuzu')}
              className={`px-3 py-1.5 rounded-xl font-bold text-xs transition flex items-center gap-1.5 ${!isMinato ? 'bg-white text-purple-700 shadow' : 'text-white/80 hover:text-white'}`}
            >
              <span>👩</span> ゆず (小4)
            </button>
          </div>

          {/* Level / Coin / Ticket Badges */}
          <div className="flex items-center gap-2">
            <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1 border border-white/20">
              <i className="fa-solid fa-crown text-yellow-300"></i> Lv.{stats.level}
            </div>
            <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-xl text-xs font-bold flex items-center gap-1 border border-white/20">
              <i className="fa-solid fa-coins text-yellow-300"></i> {stats.coins} コイン
            </div>
            <div className="bg-amber-400 text-amber-950 px-3 py-1 rounded-xl text-xs font-extrabold flex items-center gap-1 shadow">
              🎟️ {stats.tickets} 枚 ({stats.tickets * 5}円分)
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
