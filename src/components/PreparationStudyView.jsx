import React from 'react';
import { renderRubyText } from '../utils/rubyFormatter';

export const PreparationStudyView = ({ selectedTopic, selectedGrade, selectedSubject, enableFurigana = true, onStartExercises, onBackToTopics }) => {
  if (!selectedTopic) return null;

  const { summary } = selectedTopic;
  const gradeLabel = !selectedGrade || selectedGrade === 'all' ? '全学年' : `小${selectedGrade}`;

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      {/* Navigation Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <button
          onClick={onBackToTopics}
          className="text-xs font-extrabold text-slate-600 hover:text-indigo-600 bg-white px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-1.5 transition"
        >
          ← 単元選択に戻る
        </button>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-black">
            {gradeLabel}
          </span>
          <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-black">
            {selectedTopic.title}
          </span>
        </div>
      </div>

      {/* Main Preparation Note Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 border-2 border-indigo-200 shadow-2xl space-y-8 bg-white/95 relative overflow-hidden">
        
        {/* Title & Banner */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white p-6 rounded-3xl shadow-lg relative">
          <div className="flex items-center gap-4">
            <span className="text-5xl bg-white/20 p-3 rounded-2xl backdrop-blur-md shadow-inner shrink-0">
              {selectedTopic.icon}
            </span>
            <div>
              <span className="bg-yellow-300 text-yellow-950 text-xs px-3 py-0.5 rounded-full font-black uppercase tracking-wider shadow">
                📖 かんたん＆やさしい 予習ノート
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mt-1 tracking-tight">
                {renderRubyText(selectedTopic.title, enableFurigana)}
              </h2>
              <p className="text-xs sm:text-sm text-purple-100 mt-1 font-bold">
                {renderRubyText(summary.headline, enableFurigana)}
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: 重要ポイント */}
        <div className="space-y-3">
          <h3 className="text-lg font-black text-slate-900 flex items-center gap-2 border-b-2 border-amber-200 pb-2">
            <span className="text-xl">🌟</span>
            <span>きほんの重要ポイント</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {summary.keyPoints.map((pt, idx) => (
              <div key={idx} className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-100 rounded-2xl flex items-start gap-2.5 shadow-sm">
                <span className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center font-black text-xs shrink-0 shadow mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-xs font-bold text-slate-800 leading-relaxed">
                  {renderRubyText(pt, enableFurigana)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: 段階的ステップ解説 */}
        {summary.steps && (
          <div className="space-y-4">
            <h3 className="text-lg font-black text-slate-900 flex items-center gap-2 border-b-2 border-blue-200 pb-2">
              <span className="text-xl">🐾</span>
              <span>解くときのやさしいステップ（手順）</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {summary.steps.map((st, idx) => (
                <div key={idx} className="bg-white border-2 border-blue-100 rounded-2xl p-4 shadow-sm space-y-2 relative">
                  <div className="text-xs font-black text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg inline-block">
                    {st.title}
                  </div>
                  <p className="text-xs font-bold text-slate-700 leading-relaxed">
                    {renderRubyText(st.content, enableFurigana)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 3: 公式・基本ルール */}
        <div className="p-6 bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 border-l-8 border-amber-400 rounded-r-3xl shadow-sm space-y-2">
          <div className="text-xs font-black text-amber-900 flex items-center gap-1.5 uppercase tracking-wider">
            <i className="fa-solid fa-lightbulb text-amber-500 text-base"></i> 覚える公式・解き方の基本ルール
          </div>
          <div className="text-base sm:text-lg font-black text-amber-950 leading-relaxed">
            {renderRubyText(summary.formula, enableFurigana)}
          </div>
        </div>

        {/* Section 4: 自然に学べるプロの解き方ヒミツ（受検・テストのコツ） */}
        {summary.examSecret && (
          <div className="p-6 bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 border-2 border-purple-200 rounded-3xl shadow-md space-y-2">
            <div className="text-xs font-black text-purple-900 flex items-center gap-2 flex-wrap">
              <span className="text-2xl">🎓</span>
              <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-black shadow-sm">
                プロの解き方ヒミツ
              </span>
              <span className="text-purple-700 font-extrabold">（テスト・受検で差がつくコツ）</span>
            </div>
            <p className="text-xs sm:text-sm font-bold text-slate-800 leading-relaxed pt-1">
              {renderRubyText(summary.examSecret, enableFurigana)}
            </p>
          </div>
        )}

        {/* Section 5: わかりやすい例題と解説 */}
        {summary.example && (
          <div className="p-6 bg-slate-50 border-2 border-slate-200 rounded-3xl space-y-3">
            <div className="text-xs font-black text-slate-700 flex items-center gap-2">
              <i className="fa-solid fa-pen-to-square text-indigo-500 text-base"></i> 🔍 ていねいな例題と解き方ステップ
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 whitespace-pre-line leading-relaxed bg-white p-4 rounded-2xl border border-slate-200 shadow-inner">
              {renderRubyText(summary.example, enableFurigana)}
            </div>
          </div>
        )}

        {/* Section 6: つまずきやすい落とし穴・カン違い注意報 */}
        {summary.pitfall && (
          <div className="p-5 bg-rose-50 border-2 border-rose-200 text-rose-950 text-xs font-bold rounded-2xl flex items-start gap-3 shadow-sm">
            <span className="text-2xl shrink-0">⚠️</span>
            <div className="leading-relaxed">
              <div className="font-black text-rose-800 mb-0.5">ここが落とし穴！カン違いに注意しよう</div>
              {renderRubyText(summary.pitfall, enableFurigana)}
            </div>
          </div>
        )}

        {/* Section 7: 先生からのやさしいワンポイントアドバイス */}
        <div className="p-5 bg-emerald-50 border-2 border-emerald-200 text-emerald-950 text-xs font-bold rounded-2xl flex items-center gap-3 shadow-sm">
          <span className="text-3xl shrink-0">🦉</span>
          <div className="leading-relaxed">
            <div className="font-black text-emerald-800 mb-0.5">先生からのアドバイス</div>
            {renderRubyText(summary.tip, enableFurigana)}
          </div>
        </div>

        {/* Action Button: Start Exercise */}
        <div className="pt-6 border-t border-slate-200 text-center">
          <button
            onClick={onStartExercises}
            className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 hover:from-emerald-600 hover:to-indigo-700 text-white font-black text-base sm:text-lg rounded-2xl shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-3 mx-auto"
          >
            <span>🚀 予習バッチリ！この単元の問題を解いてみる！</span>
            <span className="text-xl">→</span>
          </button>
        </div>

      </div>
    </div>
  );
};
