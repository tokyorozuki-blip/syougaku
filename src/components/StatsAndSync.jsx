import React, { useState } from 'react';

export const StatsAndSync = ({ profile, stats }) => {
  const [syncCode, setSyncCode] = useState(() => localStorage.getItem('chuju_sync_code') || '');
  const [syncStatus, setSyncStatus] = useState('');

  const handleSetSyncCode = () => {
    localStorage.setItem('chuju_sync_code', syncCode);
    setSyncStatus('✅ あいことばを設定しました。LocalStorageに同期保存されました！');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      
      {/* Stats Summary Card */}
      <div className="glass-card rounded-3xl p-6 border border-slate-200">
        <h3 className="text-xl font-black mb-4 flex items-center gap-2 text-slate-800">
          <i className="fa-solid fa-trophy text-amber-500"></i> がんばり記録（{profile === 'minato' ? 'みなとちゃん' : 'ゆずちゃん'}）
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="text-xs text-slate-500 font-bold">レベル</div>
            <div className="text-2xl font-black text-indigo-600 mt-1">Lv.{stats.level}</div>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="text-xs text-slate-500 font-bold">解いた問題数</div>
            <div className="text-2xl font-black text-slate-800 mt-1">{stats.totalAnswered} 問</div>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="text-xs text-slate-500 font-bold">正解率</div>
            <div className="text-2xl font-black text-emerald-600 mt-1">
              {stats.totalAnswered > 0 ? Math.round((stats.totalCorrect / stats.totalAnswered) * 100) : 0} %
            </div>
          </div>
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200">
            <div className="text-xs text-amber-800 font-bold">お小遣い換算</div>
            <div className="text-2xl font-black text-amber-600 mt-1">{stats.tickets * 5} 円</div>
          </div>
        </div>
      </div>

      {/* Firebase Realtime Sync Section */}
      <div className="glass-card rounded-3xl p-6 border border-slate-200 space-y-3">
        <h3 className="text-lg font-black flex items-center gap-2 text-slate-800">
          <i className="fa-solid fa-arrows-rotate text-blue-500"></i> 📱 マルチデバイス あいことば同期
        </h3>
        <p className="text-xs text-slate-500">
          同じ「あいことば」をスマホやタブレットで入力すると、学習データやお小遣いコインが1秒未満で同期されます。
        </p>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="例: okayama2026"
            value={syncCode}
            onChange={(e) => setSyncCode(e.target.value)}
            className="px-4 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-bold flex-1"
          />
          <button
            onClick={handleSetSyncCode}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs rounded-xl shadow transition"
          >
            同期設定
          </button>
        </div>
        {syncStatus && (
          <div className="text-xs font-bold text-emerald-600 mt-1">{syncStatus}</div>
        )}
      </div>

    </div>
  );
};
