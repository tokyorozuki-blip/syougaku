import React, { useState } from 'react';
import { CheckCircle2, XCircle, RefreshCw, HelpCircle, ArrowRight, Star } from 'lucide-react';
import { MATH_QUESTIONS } from '../../data/mathQuestions';
import { FuriganaText } from '../FuriganaText';
import { audio } from '../../utils/audio';
import confetti from 'canvas-confetti';

export const MathDrill = ({ profile, showFurigana, onRewardStars }) => {
  const gradeNum = profile.gradeNum;
  const questions = MATH_QUESTIONS[gradeNum] || MATH_QUESTIONS[1];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [userHissanInput, setUserHissanInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentQ = questions[currentIndex];

  const handleChoiceSubmit = (index) => {
    if (isSubmitted) return;
    setSelectedOption(index);
    setIsSubmitted(true);

    if (index === currentQ.correctIndex) {
      setIsCorrect(true);
      audio.playCorrect();
      onRewardStars(2);
    } else {
      setIsCorrect(false);
      audio.playWrong();
    }
  };

  const handleHissanSubmit = (e) => {
    e.preventDefault();
    if (isSubmitted || !userHissanInput.trim()) return;

    setIsSubmitted(true);
    const cleanAnswer = userHissanInput.trim();
    if (cleanAnswer === currentQ.correctAnswer) {
      setIsCorrect(true);
      audio.playCorrect();
      onRewardStars(3);
    } else {
      setIsCorrect(false);
      audio.playWrong();
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setUserHissanInput('');
      setShowHint(false);
      setIsSubmitted(false);
      setIsCorrect(false);
    } else {
      // Completed all questions in math!
      audio.playFanfare();
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      onRewardStars(5);
      alert('🎉 算数ドリルを全問達成しました！素晴らしいです！');
      setCurrentIndex(0);
      setSelectedOption(null);
      setUserHissanInput('');
      setShowHint(false);
      setIsSubmitted(false);
      setIsCorrect(false);
    }
  };

  return (
    <div className="card-large math-drill-container">
      {/* Header Info */}
      <div className="drill-header">
        <div className="drill-tag">
          <span>{profile.grade} 算数・筆算</span>
          <span className="question-counter">問 {currentIndex + 1} / {questions.length}</span>
        </div>
        <button className="btn-hint" onClick={() => setShowHint(!showHint)}>
          <HelpCircle size={18} />
          <span>ヒント {showHint ? 'を隠す' : 'を見る'}</span>
        </button>
      </div>

      {/* Question Title & Text */}
      <h3 className="question-title">
        <FuriganaText htmlContent={currentQ.rubiedTitle} plainText={currentQ.title} showFurigana={showFurigana} />
      </h3>

      <p className="question-body">
        <FuriganaText htmlContent={currentQ.rubiedQuestion} plainText={currentQ.question} showFurigana={showFurigana} />
      </p>

      {/* Hint Box */}
      {showHint && (
        <div className="hint-box">
          💡 <strong>解き方のヒント:</strong>位（くらい）をそろえて、一の位から順番に計算していこう！
        </div>
      )}

      {/* Choice Type Question (Grade 1 & Word Problems) */}
      {currentQ.type === 'choice' && (
        <div className="choice-grid">
          {currentQ.options.map((opt, idx) => {
            let stateClass = '';
            if (isSubmitted) {
              if (idx === currentQ.correctIndex) stateClass = 'correct';
              else if (idx === selectedOption) stateClass = 'wrong';
            }

            return (
              <button
                key={idx}
                className={`choice-button ${stateClass} ${selectedOption === idx ? 'selected' : ''}`}
                onClick={() => handleChoiceSubmit(idx)}
                disabled={isSubmitted}
              >
                <span>{opt}</span>
                {isSubmitted && idx === currentQ.correctIndex && <CheckCircle2 size={22} color="#2EC4B6" />}
                {isSubmitted && idx === selectedOption && idx !== currentQ.correctIndex && <XCircle size={22} color="#E71D36" />}
              </button>
            );
          })}
        </div>
      )}

      {/* Interactive Hissan (Column Calculation Grid) for Grade 4 */}
      {currentQ.type === 'hissan' && (
        <div className="hissan-interactive-wrapper">
          <div className="hissan-card">
            <div className="hissan-header-row">
              <span className="hissan-op">{currentQ.op}</span>
              <span className="hissan-num1">{currentQ.num1}</span>
            </div>
            <div className="hissan-num2-row">
              <span className="hissan-num2">{currentQ.num2}</span>
            </div>
            <div className="hissan-line"></div>

            {/* Answer Input Grid */}
            <form onSubmit={handleHissanSubmit} className="hissan-form">
              <div className="hissan-input-group">
                <input
                  type="number"
                  className={`hissan-input ${isSubmitted ? (isCorrect ? 'correct' : 'wrong') : ''}`}
                  placeholder="答えを入力"
                  value={userHissanInput}
                  onChange={(e) => setUserHissanInput(e.target.value)}
                  disabled={isSubmitted}
                  autoFocus
                />
                <button type="submit" className="btn-primary btn-submit-hissan" disabled={isSubmitted || !userHissanInput}>
                  判定する
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Feedback & Explanation */}
      {isSubmitted && (
        <div className={`explanation-card ${isCorrect ? 'is-correct' : 'is-wrong'}`}>
          <div className="feedback-status">
            {isCorrect ? (
              <>
                <CheckCircle2 size={26} color="#2EC4B6" />
                <span className="feedback-text correct">正解！ すばらしいです！ (+{currentQ.type === 'hissan' ? '3' : '2'}★)</span>
              </>
            ) : (
              <>
                <XCircle size={26} color="#E71D36" />
                <span className="feedback-text wrong">惜しい！ もう一度考え方を確かめよう</span>
              </>
            )}
          </div>

          <p className="explanation-body">{currentQ.explanation}</p>

          <button className="btn-primary btn-next-q" onClick={handleNext}>
            <span>{currentIndex < questions.length - 1 ? '次の問題へ' : '全問達成！完了'}</span>
            <ArrowRight size={20} />
          </button>
        </div>
      )}

      <style>{`
        .math-drill-container {
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
        .btn-hint {
          display: flex;
          align-items: center;
          gap: 4px;
          background: none;
          border: none;
          color: var(--color-primary);
          font-family: var(--font-family);
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
        }
        .question-title {
          font-size: 1.3rem;
          font-weight: 900;
          color: var(--color-text-main);
        }
        .question-body {
          font-size: 1.1rem;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.6);
          padding: 14px;
          border-radius: 16px;
          border: 1px solid var(--color-border);
        }
        .hint-box {
          background: #FFFBEB;
          border: 1.5px dashed #FCD34D;
          color: #B45309;
          padding: 12px;
          border-radius: 14px;
          font-size: 0.9rem;
          font-weight: 700;
        }
        .choice-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 12px;
          margin-top: 8px;
        }
        .choice-button {
          min-height: 54px;
          padding: 12px 18px;
          border-radius: 18px;
          border: 2px solid var(--color-border);
          background: #FFFFFF;
          font-family: var(--font-family);
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--color-text-main);
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .choice-button:hover:not(:disabled) {
          border-color: var(--color-primary);
          transform: translateY(-2px);
        }
        .choice-button.correct {
          background: #E6FFFA;
          border-color: #2EC4B6;
          color: #0F766E;
        }
        .choice-button.wrong {
          background: #FFF5F5;
          border-color: #E71D36;
          color: #9B1C1C;
        }
        .hissan-interactive-wrapper {
          display: flex;
          justify-content: center;
          padding: 16px 0;
        }
        .hissan-card {
          background: #FFFFFF;
          border: 2.5px solid var(--color-primary);
          border-radius: 24px;
          padding: 24px 36px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
          font-family: 'Courier New', Courier, monospace, var(--font-family);
        }
        .hissan-header-row, .hissan-num2-row {
          font-size: 2.2rem;
          font-weight: 900;
          letter-spacing: 0.25em;
          color: #1A202C;
          display: flex;
          gap: 16px;
        }
        .hissan-op {
          color: var(--color-primary);
          margin-right: 12px;
        }
        .hissan-line {
          width: 100%;
          height: 4px;
          background: #1A202C;
          border-radius: 2px;
          margin: 6px 0;
        }
        .hissan-form {
          width: 100%;
          margin-top: 10px;
        }
        .hissan-input-group {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .hissan-input {
          width: 140px;
          height: 52px;
          border-radius: 16px;
          border: 2.5px solid var(--color-border);
          font-family: var(--font-family);
          font-size: 1.6rem;
          font-weight: 900;
          text-align: center;
          outline: none;
          transition: border-color 0.2s ease;
        }
        .hissan-input:focus {
          border-color: var(--color-primary);
        }
        .hissan-input.correct {
          border-color: #2EC4B6;
          background: #E6FFFA;
        }
        .hissan-input.wrong {
          border-color: #E71D36;
          background: #FFF5F5;
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
