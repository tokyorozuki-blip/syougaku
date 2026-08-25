import React from 'react';

// Renders 10 SVG Diagram Types
export const DiagramViewer = ({ type, data = {} }) => {
  if (!type) return null;

  return (
    <div className="my-4 p-4 bg-white/90 rounded-2xl border-2 border-indigo-100 shadow-inner flex justify-center items-center overflow-x-auto">
      {type === 'origami' && (
        <svg width="280" height="200" viewBox="0 0 280 200" className="drop-shadow">
          <rect x="30" y="30" width="120" height="120" fill="#fecdd3" stroke="#f43f5e" strokeWidth="3" rx="4"/>
          <text x="90" y="20" textAnchor="middle" fill="#9f1239" fontWeight="bold" fontSize="13">10cm</text>
          <rect x="100" y="60" width="120" height="120" fill="#bae6fd" opacity="0.8" stroke="#0284c7" strokeWidth="3" rx="4"/>
          <text x="230" y="125" textAnchor="start" fill="#0369a1" fontWeight="bold" fontSize="13">10cm</text>
          <rect x="100" y="60" width="50" height="90" fill="#a7f3d0" opacity="0.85" stroke="#059669" strokeWidth="2" strokeDasharray="3 3"/>
          <text x="125" y="110" textAnchor="middle" fill="#065f46" fontWeight="bold" fontSize="12">重なり</text>
        </svg>
      )}

      {type === 'circuit' && (
        <svg width="300" height="180" viewBox="0 0 300 180">
          <path d="M 40 90 L 40 40 L 260 40 L 260 90 L 260 140 L 40 140 Z" fill="none" stroke="#334155" strokeWidth="3"/>
          <rect x="110" y="25" width="40" height="30" fill="#fbbf24" stroke="#d97706" strokeWidth="2" rx="3"/>
          <line x1="150" y1="40" x2="160" y2="40" stroke="#ef4444" strokeWidth="4"/>
          <text x="130" y="45" textAnchor="middle" fill="#78350f" fontWeight="bold" fontSize="12">乾電池</text>
          <circle cx="100" cy="140" r="18" fill="#fef08a" stroke="#ca8a04" strokeWidth="2"/>
          <path d="M 90 140 Q 100 125 110 140" fill="none" stroke="#ca8a04" strokeWidth="2"/>
          <text x="100" y="172" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="bold">豆電球A</text>
          <circle cx="200" cy="140" r="18" fill="#fef08a" stroke="#ca8a04" strokeWidth="2"/>
          <path d="M 190 140 Q 200 125 210 140" fill="none" stroke="#ca8a04" strokeWidth="2"/>
          <text x="200" y="172" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="bold">豆電球B</text>
        </svg>
      )}

      {type === 'river_map' && (
        <svg width="320" height="200" viewBox="0 0 320 200">
          <rect width="320" height="200" fill="#f0fdf4" rx="8"/>
          <path d="M 60 10 Q 70 70 90 140 T 130 180" fill="none" stroke="#0284c7" strokeWidth="6"/>
          <text x="45" y="40" fill="#0369a1" fontWeight="bold" fontSize="12">高梁川</text>
          <path d="M 160 10 Q 150 80 170 140 T 180 180" fill="none" stroke="#0284c7" strokeWidth="6"/>
          <text x="175" y="40" fill="#0369a1" fontWeight="bold" fontSize="12">旭川</text>
          <path d="M 260 10 Q 250 80 230 140 T 210 180" fill="none" stroke="#0284c7" strokeWidth="6"/>
          <text x="265" y="40" fill="#0369a1" fontWeight="bold" fontSize="12">吉井川</text>
          <ellipse cx="170" cy="185" rx="130" ry="12" fill="#38bdf8" opacity="0.8"/>
          <text x="170" y="190" textAnchor="middle" fill="#0c4a6e" fontWeight="bold" fontSize="11">児島湾</text>
        </svg>
      )}

      {type === 'cube_cut' && (
        <svg width="220" height="200" viewBox="0 0 220 200">
          <path d="M 50 70 L 130 70 L 130 150 L 50 150 Z" fill="none" stroke="#64748b" strokeWidth="2"/>
          <path d="M 90 30 L 170 30 L 170 110 L 90 110 Z" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4"/>
          <line x1="50" y1="70" x2="90" y2="30" stroke="#64748b" strokeWidth="2"/>
          <line x1="130" y1="70" x2="170" y2="30" stroke="#64748b" strokeWidth="2"/>
          <line x1="130" y1="150" x2="170" y2="110" stroke="#64748b" strokeWidth="2"/>
          <line x1="50" y1="150" x2="90" y2="110" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4"/>
          <polygon points="50,70 170,30 130,150" fill="#f43f5e" opacity="0.4" stroke="#e11d48" strokeWidth="3"/>
          <text x="100" y="105" textAnchor="middle" fill="#881337" fontWeight="bold" fontSize="12">切断面（三角形）</text>
        </svg>
      )}

      {type === 'matchstick' && (
        <svg width="300" height="120" viewBox="0 0 300 120">
          <rect x="20" y="30" width="60" height="60" fill="none" stroke="#d97706" strokeWidth="4"/>
          <circle cx="20" cy="30" r="4" fill="#ef4444"/>
          <circle cx="80" cy="30" r="4" fill="#ef4444"/>
          <circle cx="20" cy="90" r="4" fill="#ef4444"/>
          <circle cx="80" cy="90" r="4" fill="#ef4444"/>
          <text x="50" y="110" textAnchor="middle" fill="#78350f" fontSize="12" fontWeight="bold">1番目 (4本)</text>
          <rect x="110" y="30" width="60" height="60" fill="none" stroke="#d97706" strokeWidth="4"/>
          <rect x="170" y="30" width="60" height="60" fill="none" stroke="#d97706" strokeWidth="4"/>
          <circle cx="110" cy="30" r="4" fill="#ef4444"/>
          <circle cx="170" cy="30" r="4" fill="#ef4444"/>
          <circle cx="230" cy="30" r="4" fill="#ef4444"/>
          <circle cx="110" cy="90" r="4" fill="#ef4444"/>
          <circle cx="170" cy="90" r="4" fill="#ef4444"/>
          <circle cx="230" cy="90" r="4" fill="#ef4444"/>
          <text x="170" y="110" textAnchor="middle" fill="#78350f" fontSize="12" fontWeight="bold">2番目 (7本)</text>
        </svg>
      )}

      {type === 'schedule_table' && (
        <svg width="300" height="150" viewBox="0 0 300 150">
          <rect width="300" height="150" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" rx="6"/>
          <line x1="0" y1="40" x2="300" y2="40" stroke="#cbd5e1" strokeWidth="2"/>
          <line x1="80" y1="0" x2="80" y2="150" stroke="#cbd5e1" strokeWidth="2"/>
          <line x1="190" y1="0" x2="190" y2="150" stroke="#cbd5e1" strokeWidth="2"/>
          <text x="40" y="25" textAnchor="middle" fontWeight="bold" fill="#334155">名前</text>
          <text x="135" y="25" textAnchor="middle" fontWeight="bold" fill="#334155">掃除当番</text>
          <text x="245" y="25" textAnchor="middle" fontWeight="bold" fill="#334155">給食当番</text>
          <line x1="0" y1="95" x2="300" y2="95" stroke="#e2e8f0" strokeWidth="1"/>
          <text x="40" y="70" textAnchor="middle" fill="#475569">たろう</text>
          <text x="135" y="70" textAnchor="middle" fill="#16a34a" fontWeight="bold">月曜日</text>
          <text x="245" y="70" textAnchor="middle" fill="#dc2626" fontWeight="bold">水曜日</text>
          <text x="40" y="125" textAnchor="middle" fill="#475569">はなこ</text>
          <text x="135" y="125" textAnchor="middle" fill="#2563eb" fontWeight="bold">火曜日</text>
          <text x="245" y="125" textAnchor="middle" fill="#d97706" fontWeight="bold">？曜日</text>
        </svg>
      )}

      {type === 'hissan_board' && (
        <svg width="220" height="160" viewBox="0 0 220 160">
          <rect width="220" height="160" fill="#1e293b" rx="8"/>
          <text x="170" y="45" fill="#f8fafc" fontSize="28" fontFamily="monospace" textAnchor="end">3 8 4</text>
          <text x="40" y="85" fill="#f8fafc" fontSize="26" fontFamily="monospace">＋</text>
          <text x="170" y="85" fill="#f8fafc" fontSize="28" fontFamily="monospace" textAnchor="end">2 6 7</text>
          <line x1="30" y1="100" x2="190" y2="100" stroke="#f8fafc" strokeWidth="3"/>
          <text x="170" y="135" fill="#38bdf8" fontSize="30" fontFamily="monospace" fontWeight="bold" textAnchor="end">6 5 1</text>
        </svg>
      )}

      {type === 'fruit_box' && (
        <svg width="260" height="140" viewBox="0 0 260 140">
          <rect x="20" y="30" width="100" height="80" fill="#fed7aa" stroke="#c2410c" strokeWidth="3" rx="6"/>
          <text x="70" y="75" textAnchor="middle" fontSize="32">りんご</text>
          <text x="70" y="100" textAnchor="middle" fill="#9a3412" fontWeight="bold" fontSize="12">12個入り</text>
          <rect x="140" y="30" width="100" height="80" fill="#fef08a" stroke="#ca8a04" strokeWidth="3" rx="6"/>
          <text x="190" y="75" textAnchor="middle" fontSize="32">みかん</text>
          <text x="190" y="100" textAnchor="middle" fill="#854d0e" fontWeight="bold" fontSize="12">18個入り</text>
        </svg>
      )}

      {type === 'l_shape' && (
        <svg width="240" height="180" viewBox="0 0 240 180">
          <path d="M 40 30 L 180 30 L 180 80 L 100 80 L 100 150 L 40 150 Z" fill="#e0e7ff" stroke="#4338ca" strokeWidth="3"/>
          <text x="110" y="22" textAnchor="middle" fill="#3730a3" fontWeight="bold" fontSize="12">14 cm</text>
          <text x="195" y="60" fill="#3730a3" fontWeight="bold" fontSize="12">5 cm</text>
          <text x="25" y="95" fill="#3730a3" fontWeight="bold" fontSize="12">12 cm</text>
          <text x="70" y="168" textAnchor="middle" fill="#3730a3" fontWeight="bold" fontSize="12">6 cm</text>
        </svg>
      )}

      {type === 'bar_chart' && (
        <svg width="300" height="180" viewBox="0 0 300 180">
          <rect width="300" height="180" fill="#f8fafc" rx="6"/>
          <line x1="40" y1="140" x2="280" y2="140" stroke="#64748b" strokeWidth="2"/>
          <line x1="40" y1="20" x2="40" y2="140" stroke="#64748b" strokeWidth="2"/>
          <rect x="65" y="70" width="40" height="70" fill="#38bdf8" rx="2"/>
          <text x="85" y="62" textAnchor="middle" fill="#0284c7" fontWeight="bold" fontSize="11">1100mm</text>
          <text x="85" y="158" textAnchor="middle" fill="#334155" fontWeight="bold" fontSize="12">岡山</text>
          <rect x="145" y="45" width="40" height="95" fill="#94a3b8" rx="2"/>
          <text x="165" y="37" textAnchor="middle" fill="#475569" fontWeight="bold" fontSize="11">1500mm</text>
          <text x="165" y="158" textAnchor="middle" fill="#334155" fontWeight="bold" fontSize="12">東京</text>
          <rect x="225" y="30" width="40" height="110" fill="#cbd5e1" rx="2"/>
          <text x="245" y="22" textAnchor="middle" fill="#475569" fontWeight="bold" fontSize="11">1700mm</text>
          <text x="245" y="158" textAnchor="middle" fill="#334155" fontWeight="bold" fontSize="12">全国平均</text>
        </svg>
      )}
    </div>
  );
};
