import React from 'react';
import { Star, Flame, Volume2, VolumeX, Sparkles, BookOpen, User } from 'lucide-react';
import { PROFILES } from '../data/profiles';
import { audio } from '../utils/audio';

export const Header = ({
  activeProfile,
  onSelectProfile,
  stars,
  streak,
  showFurigana,
  onToggleFurigana,
  isMuted,
  onToggleMute
}) => {
  return (
    <header className="card-large header-bar">
      <div className="header-top">
        {/* App Title & Logo */}
        <div className="logo-group">
          <div className="logo-icon">
            <BookOpen size={24} color="#FFFFFF" />
          </div>
          <div>
            <h1 className="app-title">
              岡山中受ナビ
              <span className="app-subtitle">操山中・大安寺中等 受検＆教科学習</span>
            </h1>
          </div>
        </div>

        {/* Action Controls */}
        <div className="header-actions">
          <button
            className={`btn-icon-toggle ${showFurigana ? 'active' : ''}`}
            onClick={onToggleFurigana}
            title="ひらがなルビ表示切替"
          >
            <Sparkles size={18} />
            <span>ルビ {showFurigana ? 'ON' : 'OFF'}</span>
          </button>

          <button
            className="btn-icon-toggle"
            onClick={onToggleMute}
            title={isMuted ? '効果音をONにする' : '効果音をOFFにする'}
          >
            {isMuted ? <VolumeX size={20} color="#E71D36" /> : <Volume2 size={20} color="#00A896" />}
          </button>
        </div>
      </div>

      <div className="header-bottom">
        {/* Profile Switcher */}
        <div className="profile-switcher">
          <span className="switcher-label">受講者切り替え:</span>
          {Object.values(PROFILES).map((prof) => {
            const isSelected = prof.id === activeProfile.id;
            return (
              <button
                key={prof.id}
                className={`profile-chip ${isSelected ? 'selected' : ''}`}
                onClick={() => {
                  audio.playStar();
                  onSelectProfile(prof.id);
                }}
              >
                <img src={prof.avatar} alt={prof.name} className="chip-avatar" />
                <div className="chip-info">
                  <span className="chip-name">{prof.name}</span>
                  <span className="chip-grade">{prof.grade}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Gamification Stats */}
        <div className="stats-pills">
          <div className="badge-pill star-pill">
            <Star size={18} fill="#FFD166" color="#FF9F1C" />
            <span>{stars} ★</span>
          </div>

          <div className="badge-pill streak-pill">
            <Flame size={18} fill="#FF6B8B" color="#E71D36" />
            <span>{streak}日 連続</span>
          </div>
        </div>
      </div>

      <style>{`
        .header-bar {
          display: flex;
          flex-direction: column;
          gap: 16px;
          border-bottom: 3px solid var(--color-border);
        }
        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .logo-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .logo-icon {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          background: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
        }
        .app-title {
          font-size: 1.4rem;
          font-weight: 900;
          letter-spacing: -0.02em;
          color: var(--color-text-main);
          line-height: 1.2;
          display: flex;
          flex-direction: column;
        }
        .app-subtitle {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-text-muted);
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .btn-icon-toggle {
          min-height: 44px;
          padding: 8px 14px;
          border-radius: 12px;
          border: 1.5px solid var(--color-border);
          background: rgba(255, 255, 255, 0.9);
          font-family: var(--font-family);
          font-weight: 700;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-icon-toggle.active {
          background: var(--color-primary);
          color: #FFFFFF;
          border-color: var(--color-primary);
        }
        .header-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          padding-top: 12px;
          border-top: 1px dashed var(--color-border);
        }
        .profile-switcher {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .switcher-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-text-muted);
        }
        .profile-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          min-height: 48px;
          border-radius: 999px;
          border: 2px solid var(--color-border);
          background: rgba(255, 255, 255, 0.8);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .profile-chip.selected {
          border-color: var(--color-primary);
          background: #FFFFFF;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }
        .chip-avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          object-fit: cover;
        }
        .chip-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .chip-name {
          font-size: 0.9rem;
          font-weight: 800;
          line-height: 1.1;
        }
        .chip-grade {
          font-size: 0.7rem;
          color: var(--color-text-muted);
          font-weight: 600;
        }
        .stats-pills {
          display: flex;
          gap: 8px;
        }
        .star-pill {
          background: #FFFBEB;
          color: #B45309;
          border-color: #FCD34D;
        }
        .streak-pill {
          background: #FFF1F2;
          color: #BE123C;
          border-color: #FECDD3;
        }
      `}</style>
    </header>
  );
};
