import React from 'react';

export const TermCalendar = ({ termInfo, profile }) => {
  const isMinato = profile === 'minato';

  return (
    <div className="mb-6 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-slate-900 rounded-3xl p-5 shadow-lg flex flex-wrap items-center justify-between gap-4 border-2 border-yellow-200 relative overflow-hidden">
      <div className="flex items-center gap-4 z-10">
        <div className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl shadow-inner float-anim">
          <i className={`fa-solid ${termInfo.termIcon} text-amber-950`}></i>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-yellow-950 text-yellow-300 text-xs px-2.5 py-0.5 rounded-full font-black tracking-wide shadow-sm">
              ✨ リアルタイム自動進級判定中
            </span>
            <span className="text-xs font-extrabold text-amber-950">
              {termInfo.schoolYear}年度 基準
            </span>
          </div>
          <h2 className="text-2xl font-black mt-1 text-slate-900 flex items-center gap-2">
            {termInfo.termName}
            <span className="text-sm font-bold text-slate-800">
              ({termInfo.month}月{termInfo.day}日)
            </span>
          </h2>
          <p className="text-xs font-bold text-amber-950 mt-0.5">
            {isMinato ? 'みなとちゃん（2026年4月度 小1判定）' : 'ゆずちゃん（2026年4月度 小4判定）'} 
            ： 現在の学年カリキュラムに自動最適化されています！
          </p>
        </div>
      </div>

      <div className="z-10 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-md border border-white text-right">
        <div className="text-xs text-slate-500 font-bold">現在の目標</div>
        <div className="text-sm font-extrabold text-pink-600">
          {isMinato ? '🌸 ひらがな・基礎たしざんマスター' : '🎯 操山・大安寺適性検査 A判定突破'}
        </div>
      </div>
    </div>
  );
};
