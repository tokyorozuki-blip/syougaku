import React from 'react';

export const GradeSelector = ({ selectedGrade, setSelectedGrade, profile, onStartExercise }) => {
  const isMinato = profile === 'minato';

  const handleSelect = (g) => {
    setSelectedGrade(g.toString());
    if (onStartExercise) onStartExercise();
  };

  return (
    <div className="glass-card rounded-3xl p-6 border border-slate-200">
      <h3 className="text-lg font-black mb-3 flex items-center gap-2 text-slate-800">
        <i className="fa-solid fa-graduation-cap text-pink-500"></i> 🎓 学年指定スタート
      </h3>
      <div className="flex flex-wrap gap-2">
        {['all', 1, 2, 3, 4, 5, 6].map(g => (
          <button
            key={g}
            onClick={() => handleSelect(g)}
            className={`px-4 py-2 rounded-xl font-extrabold text-sm transition ${selectedGrade === g.toString() ? (isMinato ? 'bg-pink-500 text-white shadow-md' : 'bg-purple-600 text-white shadow-md') : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            {g === 'all' ? '全学年ミックス' : g === 6 ? '小6・受検' : `小${g}`}
          </button>
        ))}
      </div>
    </div>
  );
};
