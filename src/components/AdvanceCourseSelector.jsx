import React from 'react';

export const AdvanceCourseSelector = ({ selectedCourse, setSelectedCourse, onStartExercise }) => {
  const handleSelect = (course) => {
    setSelectedCourse(course);
    if (onStartExercise) onStartExercise();
  };

  return (
    <div className="glass-card rounded-3xl p-6 border border-slate-200">
      <h3 className="text-lg font-black mb-3 flex items-center gap-2 text-slate-800">
        <i className="fa-solid fa-rocket text-indigo-500"></i> 🚀 3段階レベル別先取りコース
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button
          onClick={() => handleSelect('advance_1')}
          className={`p-4 rounded-2xl border-2 text-left transition transform hover:-translate-y-1 ${selectedCourse === 'advance_1' ? 'border-emerald-500 bg-emerald-50 shadow-md' : 'border-slate-200 bg-white hover:border-emerald-300'}`}
        >
          <div className="flex justify-between items-start mb-2">
            <span className="text-2xl">🌱</span>
            <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-md">報酬: 1枚(5円)</span>
          </div>
          <h4 className="font-extrabold text-slate-900">ちょっと先取り</h4>
          <p className="text-xs text-slate-500 mt-1">次の単員の基礎を予習する安心コース</p>
        </button>

        <button
          onClick={() => handleSelect('advance_2')}
          className={`p-4 rounded-2xl border-2 text-left transition transform hover:-translate-y-1 ${selectedCourse === 'advance_2' ? 'border-indigo-500 bg-indigo-50 shadow-md' : 'border-slate-200 bg-white hover:border-indigo-300'}`}
        >
          <div className="flex justify-between items-start mb-2">
            <span className="text-2xl">🚀</span>
            <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-0.5 rounded-md">報酬: 2枚(10円)</span>
          </div>
          <h4 className="font-extrabold text-slate-900">先取りメイン</h4>
          <p className="text-xs text-slate-500 mt-1">1学年上のメイン単元に挑戦するスタンダード</p>
        </button>

        <button
          onClick={() => handleSelect('advance_3')}
          className={`p-4 rounded-2xl border-2 text-left transition transform hover:-translate-y-1 ${selectedCourse === 'advance_3' ? 'border-purple-500 bg-purple-50 shadow-md' : 'border-slate-200 bg-white hover:border-purple-300'}`}
        >
          <div className="flex justify-between items-start mb-2">
            <span className="text-2xl">🔥</span>
            <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-0.5 rounded-md">報酬: 4枚(20円)</span>
          </div>
          <h4 className="font-extrabold text-slate-900">かなり先取り</h4>
          <p className="text-xs text-slate-500 mt-1">2学年上の飛び級・適性検査実戦特訓</p>
        </button>
      </div>
    </div>
  );
};
