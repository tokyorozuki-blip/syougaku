import React from 'react';
import { DiagramViewer } from './DiagramViewer';
import { renderRubyText } from '../utils/rubyFormatter';

export const QuestionCard = ({
  currentQ,
  currentQuestionIndex,
  totalQuestions,
  enableFurigana,
  isMinato,
  selectedOption,
  isAnswered,
  isCorrect,
  showHint,
  setShowHint,
  onOptionClick,
  onNextQuestion,
  onOpenExplanationModal
}) => {
  if (!currentQ) return null;

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 relative shadow-xl">
      
      {/* Header Badges */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full font-black">
            {currentQ.subjectName}
          </span>
          <span className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-full font-bold">
            小{currentQ.grade}
          </span>
          <span className={`text-xs px-2.5 py-1 rounded-full font-extrabold text-white ${currentQ.difficulty === 'basic' ? 'bg-emerald-500' : currentQ.difficulty === 'medium' ? 'bg-amber-500' : 'bg-rose-600'}`}>
            {currentQ.difficulty === 'basic' ? '🟢 基礎' : currentQ.difficulty === 'medium' ? '🟡 中級' : '🔴 応用・受検'}
          </span>
        </div>

        <div className="text-xs font-bold text-slate-400">
          {currentQuestionIndex + 1} / {totalQuestions}
        </div>
      </div>

      {/* Question Text */}
      <div className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed mb-4">
        {renderRubyText(currentQ.question, enableFurigana)}
      </div>

      {/* SVG Diagram Render */}
      {currentQ.diagram && (
        <DiagramViewer type={currentQ.diagram} />
      )}

      {/* Collapsible Hint */}
      {currentQ.hint && (
        <div className="mb-6">
          <button
            onClick={() => setShowHint(!showHint)}
            className="text-xs text-amber-700 font-bold bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3 py-1.5 rounded-xl transition flex items-center gap-1.5"
          >
            <i className="fa-solid fa-lightbulb text-amber-500"></i>
            {showHint ? 'ヒントをかくす' : '💡 ヒントを見る'}
          </button>
          {showHint && (
            <div className="mt-2 p-3 bg-amber-50 border-l-4 border-amber-400 text-xs text-amber-900 font-bold rounded-r-xl">
              {renderRubyText(currentQ.hint, enableFurigana)}
            </div>
          )}
        </div>
      )}

      {/* Options List */}
      <div className="grid grid-cols-1 gap-3 my-6">
        {currentQ.options.map((opt, idx) => {
          let btnStyle = "bg-white border-2 border-slate-200 hover:border-indigo-400 text-slate-800";
          if (isAnswered) {
            if (opt === currentQ.answer) {
              btnStyle = "bg-emerald-500 border-2 border-emerald-600 text-white font-black shadow-md";
            } else if (opt === selectedOption) {
              btnStyle = "bg-rose-500 border-2 border-rose-600 text-white font-black";
            } else {
              btnStyle = "bg-slate-100 border-2 border-slate-200 text-slate-400 opacity-60";
            }
          }

          return (
            <button
              key={idx}
              disabled={isAnswered}
              onClick={() => onOptionClick(opt)}
              className={`w-full p-4 rounded-2xl text-left text-base font-bold transition transform active:scale-98 flex items-center justify-between ${btnStyle}`}
            >
              <span>{renderRubyText(opt, enableFurigana)}</span>
              {isAnswered && opt === currentQ.answer && (
                <i className="fa-solid fa-circle-check text-xl text-white"></i>
              )}
              {isAnswered && opt === selectedOption && opt !== currentQ.answer && (
                <i className="fa-solid fa-circle-xmark text-xl text-white"></i>
              )}
            </button>
          );
        })}
      </div>

      {/* Result Banner & Controls */}
      {isAnswered && (
        <div className="mt-6 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 animate-fade-in">
          <div className="flex items-center gap-3">
            {isCorrect ? (
              <div className="flex items-center gap-2 text-emerald-600 font-black text-xl">
                <span className="text-3xl">🎉</span> 正解！大あたり！
              </div>
            ) : (
              <div className="flex items-center gap-2 text-rose-600 font-black text-xl">
                <span className="text-3xl">😢</span> ざんねん！リベンジリストに保存されたよ！
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenExplanationModal}
              className="px-4 py-2.5 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 font-extrabold text-xs rounded-xl transition flex items-center gap-1.5"
            >
              <i className="fa-solid fa-book-open"></i> 📖 詳しい解き方
            </button>

            <button
              onClick={onNextQuestion}
              className={`px-6 py-2.5 rounded-xl font-black text-sm text-white shadow-lg transition transform hover:scale-105 ${isMinato ? 'bg-gradient-to-r from-pink-500 to-rose-600' : 'bg-gradient-to-r from-purple-600 to-indigo-600'}`}
            >
              つぎの問題へ →
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
