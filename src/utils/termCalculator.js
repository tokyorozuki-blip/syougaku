// Realtime Academic Term & School Year Calculator
export const getSchoolTermInfo = (targetDate = new Date()) => {
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1; // 1-12
  const day = targetDate.getDate();

  // Calculate School Grade Year (Starts April 1st)
  const schoolYear = month >= 4 ? year : year - 1;

  let termName = '';
  let termIcon = '';
  let bgGradient = '';

  if (month === 4 || month === 5 || month === 6 || (month === 7 && day <= 31)) {
    termName = '🏫 1学期';
    termIcon = 'fa-book-open';
    bgGradient = 'from-emerald-500 to-teal-600';
  } else if (month === 8) {
    termName = '☀️ 夏休み';
    termIcon = 'fa-sun';
    bgGradient = 'from-amber-400 to-orange-500';
  } else if (month === 9 || month === 10 || month === 11 || (month === 12 && day <= 24)) {
    termName = '🏫 2学期';
    termIcon = 'fa-pen-ruler';
    bgGradient = 'from-blue-500 to-indigo-600';
  } else if ((month === 12 && day >= 25) || (month === 1 && day <= 10)) {
    termName = '❄️ 冬休み';
    termIcon = 'fa-snowflake';
    bgGradient = 'from-cyan-500 to-blue-600';
  } else if ((month === 1 && day > 10) || month === 2 || (month === 3 && day <= 20)) {
    termName = '🏫 3学期';
    termIcon = 'fa-graduation-cap';
    bgGradient = 'from-purple-500 to-pink-600';
  } else {
    termName = '🌸 春休み';
    termIcon = 'fa-seedling';
    bgGradient = 'from-pink-400 to-rose-500';
  }

  return { schoolYear, month, day, termName, termIcon, bgGradient };
};
