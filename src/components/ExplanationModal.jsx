import React from 'react';
import { DiagramViewer } from './DiagramViewer';
import { renderRubyText } from '../utils/rubyFormatter';

export const ExplanationModal = ({ currentQ, enableFurigana, onClose }) => {
  if (!currentQ) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border-2 border-indigo-200 relative animate-pop-in max-h-[90vh] overflow-y-auto space-y-5">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-black text-base flex items-center justify-center transition"
        >
          ✕
        </button>

        {/* Modal Badge */}
        <div className="flex items-center gap-2">
          <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-black shadow-sm">
            💡 やさしくわかる！詳しい解説とポイント
          </span>
        </div>

        {/* Question Text */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
          <div className="text-[11px] font-black text-slate-400 mb-1">【問題】</div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
            {renderRubyText(currentQ.question, enableFurigana)}
          </h3>
        </div>

        {/* Diagram if available */}
        {currentQ.diagram && (
          <DiagramViewer type={currentQ.diagram} />
        )}

        {/* Correct Answer Card */}
        <div className="p-4 bg-emerald-50 border-l-6 border-emerald-500 rounded-r-2xl shadow-sm">
          <div className="text-xs text-emerald-800 font-black flex items-center gap-1">
            <span>🎉</span> 正解の答え
          </div>
          <div className="text-xl font-black text-emerald-700 mt-1">
            {renderRubyText(currentQ.answer, enableFurigana)}
          </div>
        </div>

        {/* Detailed Explanation */}
        <div className="space-y-2 p-5 bg-indigo-50/60 border border-indigo-100 rounded-2xl">
          <div className="text-xs font-black text-indigo-900 flex items-center gap-1.5 mb-2">
            <i className="fa-solid fa-book-open text-indigo-600"></i> なぜそうなるの？考え方のステップ
          </div>
          <div className="text-xs sm:text-sm text-slate-800 font-bold leading-relaxed whitespace-pre-line bg-white p-4 rounded-xl border border-indigo-100 shadow-inner">
            {renderRubyText(currentQ.explanation, enableFurigana)}
          </div>
        </div>

        {/* Hint Callout if available */}
        {currentQ.hint && (
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-amber-950 text-xs font-bold flex items-start gap-2.5">
            <span className="text-xl shrink-0">💡</span>
            <div>
              <div className="font-black text-amber-900 mb-0.5">解くときのヒント＆コツ</div>
              {renderRubyText(currentQ.hint, enableFurigana)}
            </div>
          </div>
        )}

        {/* Close CTA Button */}
        <div className="pt-2 text-right">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs rounded-xl shadow-lg transition transform hover:scale-105"
          >
            わかった！閉じる
          </button>
        </div>

      </div>
    </div>
  );
};
