import React from 'react';
import { TOPICS_DB } from '../data/topicDatabase';

export const TopicSelector = ({ selectedSubject, selectedGrade, onSelectTopic, onBackToSubject }) => {
  const topics = TOPICS_DB[selectedSubject] || TOPICS_DB['math'];
  const gradeLabel = !selectedGrade || selectedGrade === 'all' ? '全学年' : `小${selectedGrade}`;

  const subjectNames = {
    math: '📐 算数',
    japanese: '✏️ 国語',
    science: '🧪 理科',
    social: '🗾 社会',
    exam: '🎓 適性検査'
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <button
            onClick={onBackToSubject}
            className="text-xs font-bold text-slate-500 hover:text-indigo-600 flex items-center gap-1 mb-2 transition"
          >
            ← 教科・学年えらびに戻る
          </button>
          <h3 className="text-xl font-black flex items-center gap-2 text-slate-800">
            <i className="fa-solid fa-layer-group text-purple-600"></i> STEP 3: 大項目（単元）をえらぶ
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-bold">
            学年: {gradeLabel}
          </span>
          <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-bold">
            教科: {subjectNames[selectedSubject] || '算数'}
          </span>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {topics.map((topic) => (
          <div
            key={topic.id}
            onClick={() => onSelectTopic(topic)}
            className="bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-purple-500 shadow-sm hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="text-4xl mb-3">{topic.icon}</div>
              <h4 className="text-lg font-black text-slate-900 leading-snug">{topic.title}</h4>
              <p className="text-xs text-slate-500 mt-2 font-medium">{topic.description}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-extrabold text-purple-600 bg-purple-50 px-3 py-1 rounded-xl">
                予習ノートを見る 📖
              </span>
              <span className="text-xs font-black text-slate-400">次へ →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
