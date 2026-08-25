import React from 'react';

export const PreparationStudyView = ({ selectedTopic, selectedGrade, selectedSubject, onStartExercises, onBackToTopics }) => {
  if (!selectedTopic) return null;

  const { summary } = selectedTopic;
  const gradeLabel = !selectedGrade || selectedGrade === 'all' ? '全学年' : `小${selectedGrade}`;

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      {/* Navigation Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <button
          onClick={onBackToTopics}
          className="text-xs font-bold text-slate-500 hover:text-indigo-600 flex items-center gap-1 transition"
        >
          ← 単元選択に戻る
        </button>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-bold">
            {gradeLabel}
          </span>
          <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-bold">
            {selectedTopic.title}
          </span>
        </div>
      </div>

      {/* Main Preparation Note Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border-2 border-indigo-200 shadow-xl space-y-6 bg-white/95">
        
        {/* Title & Banner */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white p-6 rounded-2xl shadow-md">
          <div className="flex items-center gap-3">
            <span className="text-4xl bg-white/20 p-2.5 rounded-2xl backdrop-blur-md">
              {selectedTopic.icon}
            </span>
            <div>
              <span className="bg-yellow-300 text-yellow-950 text-xs px-2.5 py-0.5 rounded-full font-black uppercase tracking-wider">
                📖 予習ノート・要点解説
              </span>
              <h2 className="text-2xl font-black mt-1">{selectedTopic.title}</h2>
              <p className="text-xs text-purple-100 mt-1">{summary.headline}</p>
            </div>
          </div>
        </div>

        {/* Section 1: 重要ポイント */}
        <div className="space-y-3">
          <h3 className="text-base font-black text-slate-800 flex items-center gap-2">
            <i className="fa-solid fa-star text-amber-500"></i> 📌 この単元の重要ポイント
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {summary.keyPoints.map((pt, idx) => (
              <div key={idx} className="p-4 bg-indigo-50/70 border border-indigo-100 rounded-2xl flex items-start gap-2 text-xs font-bold text-indigo-950">
                <span className="w-5 h-5 bg-indigo-600 text-white rounded-full flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: 公式・基本ルール */}
        <div className="p-5 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-r-2xl space-y-1">
          <div className="text-xs font-black text-amber-900 flex items-center gap-1.5">
            <i className="fa-solid fa-lightbulb text-amber-600"></i> 📐 公式・解き方の基本ルール
          </div>
          <div className="text-base font-black text-amber-950">
            {summary.formula}
          </div>
        </div>

        {/* Section 3: 例題と解き方のイメージ */}
        {summary.example && (
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
            <div className="text-xs font-black text-slate-700 flex items-center gap-1.5">
              <i className="fa-solid fa-pen-to-square text-indigo-500"></i> 🔍 例題とステップ解説
            </div>
            <div className="text-xs font-bold text-slate-800 whitespace-pre-line leading-relaxed bg-white p-3.5 rounded-xl border border-slate-200">
              {summary.example}
            </div>
          </div>
        )}

        {/* Section 4: コツ・ワンポイントアドバイス */}
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold rounded-2xl flex items-center gap-3">
          <span className="text-2xl">💡</span>
          <div>{summary.tip}</div>
        </div>

        {/* Action Button: Start Exercise */}
        <div className="pt-4 border-t border-slate-200 text-center">
          <button
            onClick={onStartExercises}
            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 hover:from-emerald-600 hover:to-indigo-700 text-white font-black text-base rounded-2xl shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-3 mx-auto"
          >
            <span>🚀 予習バッチリ！この問題にチャレンジ！</span>
            <span className="text-lg">→</span>
          </button>
        </div>

      </div>
    </div>
  );
};
