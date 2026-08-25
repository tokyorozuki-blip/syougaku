import React from 'react';

export const Navbar = ({ activeTab, setActiveTab, profile, revengeCount }) => {
  const isMinato = profile === 'minato';

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-[60px] z-30 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-around md:justify-start md:gap-6 overflow-x-auto">
        <button
          onClick={() => setActiveTab('home')}
          className={`py-3 px-4 font-bold text-sm border-b-4 transition flex items-center gap-2 whitespace-nowrap ${activeTab === 'home' ? (isMinato ? 'border-pink-500 text-pink-600' : 'border-purple-600 text-purple-600') : 'border-transparent text-slate-500 hover:text-slate-800'}`}
        >
          <i className="fa-solid fa-house"></i> ホーム・教科選択
        </button>

        <button
          onClick={() => setActiveTab('exercise')}
          className={`py-3 px-4 font-bold text-sm border-b-4 transition flex items-center gap-2 whitespace-nowrap ${activeTab === 'exercise' ? (isMinato ? 'border-pink-500 text-pink-600' : 'border-purple-600 text-purple-600') : 'border-transparent text-slate-500 hover:text-slate-800'}`}
        >
          <i className="fa-solid fa-pen-to-square"></i> 演習・特訓
        </button>

        <button
          onClick={() => setActiveTab('revenge')}
          className={`py-3 px-4 font-bold text-sm border-b-4 transition flex items-center gap-2 whitespace-nowrap relative ${activeTab === 'revenge' ? 'border-rose-500 text-rose-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
        >
          <i className="fa-solid fa-fire text-rose-500"></i> 🔥 リベンジ
          {revengeCount > 0 && (
            <span className="bg-rose-500 text-white text-[10px] px-2 py-0.5 rounded-full font-extrabold shadow">
              {revengeCount}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('guide')}
          className={`py-3 px-4 font-bold text-sm border-b-4 transition flex items-center gap-2 whitespace-nowrap ${activeTab === 'guide' ? (isMinato ? 'border-pink-500 text-pink-600' : 'border-purple-600 text-purple-600') : 'border-transparent text-slate-500 hover:text-slate-800'}`}
        >
          <i className="fa-solid fa-school"></i> 🏫 志望校ガイド
        </button>

        <button
          onClick={() => setActiveTab('stats')}
          className={`py-3 px-4 font-bold text-sm border-b-4 transition flex items-center gap-2 whitespace-nowrap ${activeTab === 'stats' ? (isMinato ? 'border-pink-500 text-pink-600' : 'border-purple-600 text-purple-600') : 'border-transparent text-slate-500 hover:text-slate-800'}`}
        >
          <i className="fa-solid fa-chart-pie"></i> がんばり記録・設定
        </button>
      </div>
    </nav>
  );
};
