import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { TermCalendar } from './components/TermCalendar';
import { AdvanceCourseSelector } from './components/AdvanceCourseSelector';
import { GradeSelector } from './components/GradeSelector';
import { SubjectCards } from './components/SubjectCards';
import { QuestionCard } from './components/QuestionCard';
import { ExplanationModal } from './components/ExplanationModal';
import { TargetSchoolGuide } from './components/TargetSchoolGuide';
import { StatsAndSync } from './components/StatsAndSync';
import { getSchoolTermInfo } from './utils/termCalculator';
import { playSFX } from './utils/audioEffects';
import { QUESTIONS_DB } from './data/questionsDatabase';

export function App() {
  // User Profile State: 'minato' (Grade 1 / Sakura Pink) or 'yuzu' (Grade 4 / Violet)
  const [profile, setProfile] = useState(() => localStorage.getItem('chuju_profile') || 'minato');

  // User Stats State
  const [stats, setStats] = useState(() => {
    const saved = localStorage.getItem(`chuju_stats_${profile}`);
    return saved ? JSON.parse(saved) : { level: 1, xp: 0, coins: 5, tickets: 0, totalAnswered: 0, totalCorrect: 0 };
  });

  // Navigation Tab State: 'home', 'exercise', 'revenge', 'guide', 'stats'
  const [activeTab, setActiveTab] = useState('home');

  // Filtering States
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState('normal');

  // Exercising State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [showExplanationModal, setShowExplanationModal] = useState(false);

  // Revenge List State
  const [revengeIds, setRevengeIds] = useState(() => {
    const saved = localStorage.getItem(`chuju_revenge_${profile}`);
    return saved ? JSON.parse(saved) : [];
  });

  // Save profile changes
  useEffect(() => {
    localStorage.setItem('chuju_profile', profile);
    const saved = localStorage.getItem(`chuju_stats_${profile}`);
    setStats(saved ? JSON.parse(saved) : { level: 1, xp: 0, coins: 5, tickets: 0, totalAnswered: 0, totalCorrect: 0 });
    const savedRevenge = localStorage.getItem(`chuju_revenge_${profile}`);
    setRevengeIds(savedRevenge ? JSON.parse(savedRevenge) : []);
  }, [profile]);

  // Save stats
  useEffect(() => {
    localStorage.setItem(`chuju_stats_${profile}`, JSON.stringify(stats));
  }, [stats, profile]);

  // Save revenge list
  useEffect(() => {
    localStorage.setItem(`chuju_revenge_${profile}`, JSON.stringify(revengeIds));
  }, [revengeIds, profile]);

  // Realtime Academic Term
  const termInfo = useMemo(() => getSchoolTermInfo(), []);

  // Filter Questions
  const filteredQuestions = useMemo(() => {
    let list = QUESTIONS_DB;

    if (selectedSubject !== 'all') {
      list = list.filter(q => q.subjectId === selectedSubject);
    }
    if (selectedGrade !== 'all') {
      list = list.filter(q => q.grade === Number(selectedGrade));
    }
    if (selectedDifficulty !== 'all') {
      list = list.filter(q => q.difficulty === selectedDifficulty);
    }
    if (activeTab === 'revenge') {
      list = list.filter(q => revengeIds.includes(q.id));
    }

    return list;
  }, [selectedSubject, selectedGrade, selectedDifficulty, activeTab, revengeIds]);

  const currentQ = filteredQuestions[currentQuestionIndex] || filteredQuestions[0];

  // Option Choice Handler
  const handleOptionClick = (opt) => {
    if (isAnswered) return;
    setSelectedOption(opt);
    setIsAnswered(true);

    const correct = opt === currentQ.answer;
    setIsCorrect(correct);

    if (correct) {
      playSFX('correct');
      const coinEarned = selectedCourse === 'advance_3' ? 4 : selectedCourse === 'advance_2' ? 2 : 1;
      const ticketEarned = selectedCourse === 'advance_3' ? 4 : selectedCourse === 'advance_2' ? 2 : selectedCourse === 'advance_1' ? 1 : 0;
      
      setStats(prev => {
        const newXp = prev.xp + 25;
        const newLevel = Math.floor(newXp / 100) + 1;
        if (newLevel > prev.level) {
          playSFX('levelup');
        }
        return {
          ...prev,
          xp: newXp,
          level: newLevel,
          coins: prev.coins + coinEarned,
          tickets: prev.tickets + ticketEarned,
          totalAnswered: prev.totalAnswered + 1,
          totalCorrect: prev.totalCorrect + 1
        };
      });

      if (activeTab === 'revenge') {
        setRevengeIds(prev => prev.filter(id => id !== currentQ.id));
      }
    } else {
      playSFX('wrong');
      setStats(prev => ({ ...prev, totalAnswered: prev.totalAnswered + 1 }));
      if (!revengeIds.includes(currentQ.id)) {
        setRevengeIds(prev => [...prev, currentQ.id]);
      }
    }
  };

  // Next Question Handler
  const handleNextQuestion = () => {
    setIsAnswered(false);
    setSelectedOption(null);
    setIsCorrect(null);
    setShowHint(false);
    setShowExplanationModal(false);
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setCurrentQuestionIndex(0);
    }
  };

  const isMinato = profile === 'minato';
  const enableFurigana = isMinato;

  return (
    <div className={`min-h-screen ${isMinato ? 'theme-minato bg-rose-50/50' : 'theme-yuzu bg-purple-50/50'}`}>
      <Header profile={profile} setProfile={setProfile} stats={stats} />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} profile={profile} revengeCount={revengeIds.length} />

      <main className="max-w-6xl mx-auto px-4 py-6">
        <TermCalendar termInfo={termInfo} profile={profile} />

        {/* HOME TAB */}
        {activeTab === 'home' && (
          <div className="space-y-6">
            <AdvanceCourseSelector
              selectedCourse={selectedCourse}
              setSelectedCourse={setSelectedCourse}
              onStartExercise={() => setActiveTab('exercise')}
            />
            <GradeSelector
              selectedGrade={selectedGrade}
              setSelectedGrade={setSelectedGrade}
              profile={profile}
              onStartExercise={() => setActiveTab('exercise')}
            />
            <SubjectCards
              setSelectedSubject={setSelectedSubject}
              onStartExercise={() => setActiveTab('exercise')}
            />
          </div>
        )}

        {/* EXERCISE / REVENGE TABS */}
        {(activeTab === 'exercise' || activeTab === 'revenge') && (
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Question Filters */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                <select
                  value={selectedSubject}
                  onChange={(e) => setSelectedSubject(e.target.value)}
                  className="px-3 py-1.5 bg-slate-100 border border-slate-300 rounded-xl text-xs font-bold"
                >
                  <option value="all">全教科 (2,500問)</option>
                  <option value="math">📐 算数</option>
                  <option value="japanese">✏️ 国語</option>
                  <option value="science">🧪 理科</option>
                  <option value="social">🗾 社会</option>
                  <option value="exam">🎓 適性検査</option>
                </select>

                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="px-3 py-1.5 bg-slate-100 border border-slate-300 rounded-xl text-xs font-bold"
                >
                  <option value="all">すべての難易度</option>
                  <option value="basic">🟢 基礎</option>
                  <option value="medium">🟡 中級</option>
                  <option value="advanced">🔴 応用・受検</option>
                </select>
              </div>

              <div className="text-xs font-extrabold text-slate-500">
                該当問題: <span className="text-pink-600 text-sm font-black">{filteredQuestions.length}</span> 問
              </div>
            </div>

            {/* Question Renderer */}
            {filteredQuestions.length > 0 && currentQ ? (
              <QuestionCard
                currentQ={currentQ}
                currentQuestionIndex={currentQuestionIndex}
                totalQuestions={filteredQuestions.length}
                enableFurigana={enableFurigana}
                isMinato={isMinato}
                selectedOption={selectedOption}
                isAnswered={isAnswered}
                isCorrect={isCorrect}
                showHint={showHint}
                setShowHint={setShowHint}
                onOptionClick={handleOptionClick}
                onNextQuestion={handleNextQuestion}
                onOpenExplanationModal={() => setShowExplanationModal(true)}
              />
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
                <div className="text-5xl mb-3">🌟</div>
                <h3 className="text-xl font-bold text-slate-800">問題がありません</h3>
                <p className="text-xs text-slate-500 mt-1">条件を変更するか、すべてのリベンジ問題をクリアしました！</p>
              </div>
            )}
          </div>
        )}

        {/* TARGET SCHOOL GUIDE TAB */}
        {activeTab === 'guide' && <TargetSchoolGuide />}

        {/* STATS & SYNC TAB */}
        {activeTab === 'stats' && <StatsAndSync profile={profile} stats={stats} />}

      </main>

      {/* EXPLANATION MODAL */}
      {showExplanationModal && currentQ && (
        <ExplanationModal
          currentQ={currentQ}
          enableFurigana={enableFurigana}
          onClose={() => setShowExplanationModal(false)}
        />
      )}

      <footer className="mt-16 py-8 border-t border-slate-200 text-center text-xs font-bold text-slate-400">
        <p>© 2026 岡山中受ナビ Okayama Chuju Navi - All Rights Reserved.</p>
        <p className="mt-1">岡山県立操山中学校 ＆ 岡山県立大安寺中等教育学校 受検対策プロジェクト</p>
      </footer>
    </div>
  );
}

export default App;
