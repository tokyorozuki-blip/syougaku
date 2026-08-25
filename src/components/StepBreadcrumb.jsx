import React from 'react';

export const StepBreadcrumb = ({ currentStep, onStepClick, selectedGrade, selectedSubject, selectedTopic }) => {
  const steps = [
    { id: 'grade', name: '① 学年', detail: selectedGrade === 'all' ? '全学年' : `小${selectedGrade}` },
    { id: 'subject', name: '② 教科', detail: selectedSubject === 'all' ? '全教科' : selectedSubject === 'math' ? '算数' : selectedSubject === 'japanese' ? '国語' : selectedSubject === 'science' ? '理科' : selectedSubject === 'social' ? '社会' : '適性検査' },
    { id: 'topic', name: '③ 大項目', detail: selectedTopic ? selectedTopic.title.split(' ')[0] : '単元' },
    { id: 'preview', name: '④ 予習ノート', detail: '要点解説' },
    { id: 'exercise', name: '⑤ ドリル', detail: '問題挑戦' }
  ];

  const getStepIndex = (id) => steps.findIndex(s => s.id === id);
  const currentIndex = getStepIndex(currentStep);

  return (
    <div className="mb-6 bg-white/80 backdrop-blur-md p-3 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between overflow-x-auto gap-2">
      {steps.map((step, idx) => {
        const isActive = idx === currentIndex;
        const isCompleted = idx < currentIndex;

        return (
          <React.Fragment key={step.id}>
            <button
              onClick={() => isCompleted && onStepClick(step.id)}
              disabled={!isCompleted}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${isActive ? 'bg-indigo-600 text-white shadow' : isCompleted ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 cursor-pointer' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
            >
              <span>{step.name}</span>
              {step.detail && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-extrabold ${isActive ? 'bg-white/20 text-white' : isCompleted ? 'bg-emerald-200 text-emerald-900' : 'bg-slate-200 text-slate-500'}`}>
                  {step.detail}
                </span>
              )}
            </button>
            {idx < steps.length - 1 && (
              <span className="text-slate-300 text-xs shrink-0">➔</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
