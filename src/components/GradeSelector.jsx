import React from 'react';

export const GradeSelector = ({ selectedGrade, setSelectedGrade, profile }) => {
  const isMinato = profile === 'minato';

  const handleSelect = (g) => {
    setSelectedGrade(g.toString());
  };

  return (
    <div className="glass-card rounded-3xl p-6 border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <h3 className="text-lg font-black flex items-center gap-2 text-slate-800">
          <i className="fa-solid fa-graduation-cap text-pink-500"></i> STEP 1: 学年をえらぶ
        </h3>
        <span className="text-xs font-bold text-slate-500">
          選択中: <span className="text-pink-600 font-black">{selectedGrade === 'all' ? '全学年ミックス' : `小${selectedGrade}`}</span>
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {['all', 1, 2, 3, 4, 5, 6].map(g => (
          <button
            key={g}
            onClick={() => handleSelect(g)}
            className={`px-4 py-2 rounded-xl font-extrabold text-sm transition transform hover:scale-105 ${selectedGrade === g.toString() ? (isMinato ? 'bg-pink-500 text-white shadow-md ring-2 ring-pink-300' : 'bg-purple-600 text-white shadow-md ring-2 ring-purple-300') : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            {g === 'all' ? '全学年ミックス' : g === 6 ? '小6・受検' : `小${g}`}
          </button>
        ))}
      </div>
    </div>
  );
};
