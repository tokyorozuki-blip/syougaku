import React from 'react';
import { DiagramViewer } from './DiagramViewer';
import { renderRubyText } from '../utils/rubyFormatter';

export const ExplanationModal = ({ currentQ, enableFurigana, onClose }) => {
  if (!currentQ) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-pop-in max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-black text-base flex items-center justify-center transition"
        >
          ✕
        </button>

        <div className="flex items-center gap-2 mb-3">
          <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full font-black">
            📖 詳しい解き方・ステップ解説
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-2">
          {renderRubyText(currentQ.question, enableFurigana)}
        </h3>

        {currentQ.diagram && (
          <DiagramViewer type={currentQ.diagram} />
        )}

        <div className="my-4 p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-2xl">
          <div className="text-xs text-emerald-800 font-bold">正解</div>
          <div className="text-xl font-black text-emerald-700 mt-0.5">
            {renderRubyText(currentQ.answer, enableFurigana)}
          </div>
        </div>

        <div className="space-y-2 text-sm text-slate-700 font-bold leading-relaxed whitespace-pre-line">
          {renderRubyText(currentQ.explanation, enableFurigana)}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-extrabold text-xs rounded-xl shadow transition"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};
