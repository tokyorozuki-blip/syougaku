import React from 'react';
import { Award, Target, Sparkles } from 'lucide-react';
import { FuriganaText } from './FuriganaText';

export const ProfileCard = ({ profile, showFurigana }) => {
  return (
    <div className="card-large profile-card">
      <div className="profile-card-content">
        <div className="avatar-wrapper">
          <img src={profile.avatar} alt={profile.name} className="profile-avatar" />
          <span className="grade-badge">{profile.grade}</span>
        </div>

        <div className="profile-text-group">
          <div className="name-row">
            <h2 className="profile-name">{profile.name} の学習部屋</h2>
            <span className="school-pill">
              <Target size={14} />
              {profile.targetSchool}
            </span>
          </div>

          <p className="profile-quote">
            <Sparkles size={16} color="var(--color-primary)" />
            <span>「{profile.quote}」</span>
          </p>

          <div className="profile-focus">
            <Award size={16} color="var(--color-primary)" />
            <span className="focus-label">今週の学習目標:</span>
            <span className="focus-text">
              {profile.id === 'minato' ? (
                <FuriganaText
                  htmlContent="<ruby>基礎計算<rt>きそけいさん</rt></ruby>と ひらがな・カタカナを マスターしよう！"
                  showFurigana={showFurigana}
                />
              ) : (
                '小4の先取り筆算（3けた・4けた）と操山中・大安寺中等の適性検査思考力ドリル！'
              )}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .profile-card {
          background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%);
          border-left: 6px solid var(--color-primary);
        }
        .profile-card-content {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .avatar-wrapper {
          position: relative;
          flex-shrink: 0;
        }
        .profile-avatar {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--color-primary);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
        }
        .grade-badge {
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--color-primary);
          color: #FFFFFF;
          font-size: 0.7rem;
          font-weight: 800;
          padding: 2px 10px;
          border-radius: 999px;
          white-space: nowrap;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }
        .profile-text-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        .name-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .profile-name {
          font-size: 1.35rem;
          font-weight: 900;
          color: var(--color-text-main);
        }
        .school-pill {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.78rem;
          font-weight: 800;
          background: rgba(0, 168, 150, 0.1);
          color: var(--color-primary);
          padding: 4px 10px;
          border-radius: 999px;
        }
        .profile-quote {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text-main);
        }
        .profile-focus {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          background: rgba(255, 255, 255, 0.7);
          padding: 6px 12px;
          border-radius: 12px;
          border: 1px solid var(--color-border);
          flex-wrap: wrap;
        }
        .focus-label {
          font-weight: 800;
          color: var(--color-primary);
        }
        .focus-text {
          font-weight: 600;
          color: var(--color-text-main);
        }
      `}</style>
    </div>
  );
};
