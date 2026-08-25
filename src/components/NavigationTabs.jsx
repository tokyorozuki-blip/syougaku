import React from 'react';
import { Calculator, BookOpen, Compass, GraduationCap, BarChart3 } from 'lucide-react';
import { FuriganaText } from './FuriganaText';

export const NavigationTabs = ({ activeTab, onSelectTab, showFurigana }) => {
  const tabs = [
    {
      id: 'math',
      label: '算数・筆算',
      rubiedLabel: '<ruby>算数<rt>さんすう</rt></ruby>・<ruby>筆算<rt>ひっさん</rt></ruby>',
      icon: Calculator,
      color: '#FF6B8B'
    },
    {
      id: 'japanese',
      label: '国語・漢字',
      rubiedLabel: '<ruby>国語<rt>こくご</rt></ruby>・<ruby>漢字<rt>かんじ</rt></ruby>',
      icon: BookOpen,
      color: '#4ECDC4'
    },
    {
      id: 'scienceSocial',
      label: '理科・社会',
      rubiedLabel: '<ruby>理科<rt>りか</rt></ruby>・<ruby>社会<rt>しゃかい</rt></ruby>',
      icon: Compass,
      color: '#FFD166'
    },
    {
      id: 'aptitude',
      label: '操山・大安寺適性検査',
      rubiedLabel: '<ruby>操山<rt>みさおやま</rt></ruby>・<ruby>大安寺<rt>だいあんじ</rt></ruby> <ruby>適性検査<rt>てきせいけんさ</rt></ruby>',
      icon: GraduationCap,
      color: '#00A896',
      badge: '思考力'
    },
    {
      id: 'parentLog',
      label: '学習記録',
      rubiedLabel: '<ruby>学習記録<rt>がくしゅうきろく</rt></ruby>',
      icon: BarChart3,
      color: '#7209B7',
      badge: '保護者'
    }
  ];

  return (
    <nav className="nav-tabs-container">
      {tabs.map((tab) => {
        const IconComponent = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            className={`nav-tab-button ${isActive ? 'active' : ''}`}
            onClick={() => onSelectTab(tab.id)}
          >
            <div className="tab-icon-wrapper" style={{ backgroundColor: isActive ? tab.color : 'transparent' }}>
              <IconComponent size={20} color={isActive ? '#FFFFFF' : tab.color} />
            </div>

            <span className="tab-label">
              <FuriganaText htmlContent={tab.rubiedLabel} plainText={tab.label} showFurigana={showFurigana} />
            </span>

            {tab.badge && <span className="tab-badge">{tab.badge}</span>}
          </button>
        );
      })}

      <style>{`
        .nav-tabs-container {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding: 6px 2px;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        .nav-tabs-container::-webkit-scrollbar {
          display: none;
        }
        .nav-tab-button {
          min-height: 52px;
          padding: 10px 16px;
          border-radius: 18px;
          border: 1.5px solid var(--color-border);
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
          position: relative;
        }
        .nav-tab-button.active {
          background: #FFFFFF;
          border-color: var(--color-primary);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }
        .tab-icon-wrapper {
          width: 32px;
          height: 32px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s ease;
        }
        .tab-label {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--color-text-main);
        }
        .nav-tab-button.active .tab-label {
          color: var(--color-primary);
        }
        .tab-badge {
          font-size: 0.65rem;
          font-weight: 800;
          background: var(--color-primary);
          color: #FFFFFF;
          padding: 2px 6px;
          border-radius: 999px;
        }
      `}</style>
    </nav>
  );
};
