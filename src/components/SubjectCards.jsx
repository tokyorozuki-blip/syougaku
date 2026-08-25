import React from 'react';

export const SubjectCards = ({ setSelectedSubject, onStartExercise }) => {
  const handleSelect = (sub) => {
    setSelectedSubject(sub);
    if (onStartExercise) onStartExercise();
  };

  return (
    <div>
      <h3 className="text-xl font-black mb-4 flex items-center gap-2 text-slate-800">
        <i className="fa-solid fa-book text-emerald-500"></i> 全5教科 問題ライブラリ (各500問・計2,500問)
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        
        {/* Math */}
        <div 
          onClick={() => handleSelect('math')}
          className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-3xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer relative overflow-hidden"
        >
          <div className="text-4xl mb-3">📐</div>
          <span className="bg-white/20 text-white text-xs px-2.5 py-1 rounded-full font-bold">500問収録</span>
          <h4 className="text-2xl font-black mt-2">算数</h4>
          <p className="text-xs text-blue-100 mt-1">計算・筆算・図形面積・マッチ棒規則性・切断</p>
          <div className="mt-4 flex items-center justify-between text-xs font-bold pt-3 border-t border-white/20">
            <span>小1〜小6・受検</span>
            <span>スタート →</span>
          </div>
        </div>

        {/* Japanese */}
        <div 
          onClick={() => handleSelect('japanese')}
          className="bg-gradient-to-br from-rose-500 to-pink-600 text-white rounded-3xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer relative overflow-hidden"
        >
          <div className="text-4xl mb-3">✏️</div>
          <span className="bg-white/20 text-white text-xs px-2.5 py-1 rounded-full font-bold">500問収録</span>
          <h4 className="text-2xl font-black mt-2">国語</h4>
          <p className="text-xs text-rose-100 mt-1">漢字ルビ・慣用句・ことわざ・200字論理記述</p>
          <div className="mt-4 flex items-center justify-between text-xs font-bold pt-3 border-t border-white/20">
            <span>小1〜小6・受検</span>
            <span>スタート →</span>
          </div>
        </div>

        {/* Science */}
        <div 
          onClick={() => handleSelect('science')}
          className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-3xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer relative overflow-hidden"
        >
          <div className="text-4xl mb-3">🧪</div>
          <span className="bg-white/20 text-white text-xs px-2.5 py-1 rounded-full font-bold">500問収録</span>
          <h4 className="text-2xl font-black mt-2">理科</h4>
          <p className="text-xs text-emerald-100 mt-1">自然観察・乾電池回路・水蒸気と湯気・月と星座</p>
          <div className="mt-4 flex items-center justify-between text-xs font-bold pt-3 border-t border-white/20">
            <span>小1〜小6・受検</span>
            <span>スタート →</span>
          </div>
        </div>

        {/* Social */}
        <div 
          onClick={() => handleSelect('social')}
          className="bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-3xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer relative overflow-hidden"
        >
          <div className="text-4xl mb-3">🗾</div>
          <span className="bg-white/20 text-white text-xs px-2.5 py-1 rounded-full font-bold">500問収録</span>
          <h4 className="text-2xl font-black mt-2">社会</h4>
          <p className="text-xs text-amber-100 mt-1">岡山地理気候・3大河川・岡山城・瀬戸大橋・歴史</p>
          <div className="mt-4 flex items-center justify-between text-xs font-bold pt-3 border-t border-white/20">
            <span>小1〜小6・受検</span>
            <span>スタート →</span>
          </div>
        </div>

        {/* Exam Aptitude Test */}
        <div 
          onClick={() => handleSelect('exam')}
          className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white rounded-3xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer relative overflow-hidden md:col-span-2 lg:col-span-1"
        >
          <div className="text-4xl mb-3">🎓</div>
          <span className="bg-yellow-400 text-purple-950 text-xs px-2.5 py-1 rounded-full font-extrabold">操山・大安寺受検専用</span>
          <h4 className="text-2xl font-black mt-2">適性検査Ⅰ・Ⅱ</h4>
          <p className="text-xs text-purple-100 mt-1">資料読み取り・降水量分析・当番推理パズル</p>
          <div className="mt-4 flex items-center justify-between text-xs font-bold pt-3 border-t border-white/20">
            <span>受検特訓コース</span>
            <span>スタート →</span>
          </div>
        </div>

      </div>
    </div>
  );
};
