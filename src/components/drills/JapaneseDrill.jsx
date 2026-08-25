import React, { useState } from 'react';
import { CheckCircle2, XCircle, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { JAPANESE_QUESTIONS } from '../../data/japaneseQuestions';
import { FuriganaText } from '../FuriganaText';
import { audio } from '../../utils/audio';
import confetti from 'canvas-confetti';

export const JapaneseDrill = ({ profile, showFurigana, onRewardStars }) => {
  const gradeNum = profile.gradeNum;
  const questions = JAPANESE_QUESTIONS[gradeNum] || JAPANESE_QUESTIONS[1];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentQ = questions[currentIndex];

  const handleSelect = (idx) => {
    if (isSubmitted) return;
    setSelectedOption(idx);
    setIsSubmitted(true);

    if (idx === currentQ.correctIndex) {
      setIsCorrect(true);
      audio.playCorrect();
      onRewardStars(2);
    } else {
      setIsCorrect(false);
      audio.playWrong();
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
      setIsCorrect(false);
    } else {
      audio.playFanfare();
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      onRewardStars(5);
      alert('🎉 国語・漢字ドリル全問クリア！漢字マスターですね！');
      setCurrentIndex(0);
      setSelectedOption(null);
      setIsSubmitted(false);
      setIsCorrect(false);
    }
  };

  return (
    <div className="card-large japanese-drill-container">
      {/* Header Tag */}
      <div className="drill-header">
        <div className="drill-tag">
          <BookOpen size={20} color="var(--color-primary)" />
          <span>{profile.grade} 国語・漢字</span>
          <span className="question-counter">問 {currentIndex + 1} / {questions.length}</span>
        </div>
      </div>

      {/* Question Header */}
      <h3 className="question-title">
        <FuriganaText htmlContent={currentQ.rubiedTitle} plainText={currentQ.title} showFurigana={showFurigana} />
      </h3>

      <div className="question-card-body">
        <FuriganaText htmlContent={currentQ.rubiedQuestion} plainText={currentQ.question} showFurigana={showFurigana} />
      </div>

      {/* Choice Options */}
      <div className="japanese-options-grid">
        {currentQ.options.map((opt, idx) => {
          let stateClass = '';
          if (isSubmitted) {
            if (idx === currentQ.correctIndex) stateClass = 'correct';
            else if (idx === selectedOption) stateClass = 'wrong';
          }

          return (
            <button
              key={idx}
              className={`jp-choice-btn ${stateClass} ${selectedOption === idx ? 'selected' : ''}`}
              onClick={() => handleSelect(idx)}
              disabled={isSubmitted}
            >
              <span className="opt-index-badge">{idx + 1}</span>
              <span className="opt-text">{opt}</span>
              {isSubmitted && idx === currentQ.correctIndex && <CheckCircle2 size={24} color="#2EC4B6" />}
              {isSubmitted && idx === selectedOption && idx !== currentQ.correctIndex && <XCircle size={24} color="#E71D36" />}
            </button>
          );
        })}
      </div>

      {/* Feedback & Explanation */}
      {isSubmitted && (
        <div className={`explanation-card ${isCorrect ? 'is-correct' : 'is-wrong'}`}>
          <div className="feedback-status">
            {isCorrect ? (
              <>
                <CheckCircle2 size={26} color="#2EC4B6" />
                <span className="feedback-text correct">正解！ よく覚えていますね！ (+2★)</span>
              </>
            ) : (
              <>
                <XCircle size={26} color="#E71D36" />
                <span className="feedback-text wrong">惜しい！ 解説を読んでしっかり覚えよう</span>
              </>
            )}
          </div>

          <p className="explanation-body">{currentQ.explanation}</p>

          <button className="btn-primary btn-next-q" onClick={handleNext}>
            <span>{currentIndex < questions.length - 1 ? '次の問題へ' : '全問完了！クリア'}</span>
            <ArrowRight size={20} />
          </button>
        </div>
      )}

      <style>{`
        .japanese-drill-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .drill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 10px;
        }
        .drill-tag {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 800;
          color: var(--color-primary);
        }
        .question-counter {
          background: rgba(0, 0, 0, 0.06);
          padding: 2px 10px;
          border-radius: 999px;
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }
        .question-title {
          font-size: 1.3rem;
          font-weight: 900;
          color: var(--color-text-main);
        }
        .question-card-body {
          font-size: 1.15rem;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.7);
          padding: 16px;
          border-radius: 18px;
          border: 1.5px solid var(--color-border);
          line-height: 1.6;
        }
        .japanese-options-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 6px;
        }
        .jp-choice-btn {
          min-height: 52px;
          padding: 12px 20px;
          border-radius: 18px;
          border: 2px solid var(--color-border);
          background: #FFFFFF;
          font-family: var(--font-family);
          font-weight: 800;
          font-size: 1.05rem;
          color: var(--color-text-main);
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }
        .jp-choice-btn:hover:not(:disabled) {
          border-color: var(--color-primary);
          transform: translateX(4px);
        }
        .opt-index-badge {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 900;
          flex-shrink: 0;
        }
        .opt-text {
          flex: 1;
        }
        .jp-choice-btn.correct {
          background: #E6FFFA;
          border-color: #2EC4B6;
          color: #0F766E;
        }
        .jp-choice-btn.wrong {
          background: #FFF5F5;
          border-color: #E71D36;
          color: #9B1C1C;
        }
        .explanation-card {
          border-radius: 20px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          animation: fadeIn 0.3s ease-out;
        }
        .explanation-card.is-correct {
          background: #E6FFFA;
          border: 1.5px solid #2EC4B6;
        }
        .explanation-card.is-wrong {
          background: #FFF5F5;
          border: 1.5px solid #FEB2B2;
        }
        .feedback-status {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .feedback-text {
          font-size: 1.15rem;
          font-weight: 900;
        }
        .feedback-text.correct { color: #0F766E; }
        .feedback-text.wrong { color: #9B1C1C; }
        .explanation-body {
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.5;
        }
        .btn-next-q {
          align-self: flex-end;
          margin-top: 8px;
        }
      `}</style>
    </div>
  );
};
