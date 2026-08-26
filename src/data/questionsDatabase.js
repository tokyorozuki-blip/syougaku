// Dynamic Question Engine with Topic Integration & Math Generators

// Utility: Random Integer Generator
const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Utility: Shuffle Array
const shuffleArray = (arr) => {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

// --- DYNAMIC MATH QUESTION GENERATOR ---
const generateMathQuestion = (grade, index) => {
  const qType = index % 6; // 6種類以上の計算パターン
  let qText = '';
  let options = [];
  let answerStr = '';
  let hint = '';
  let explanation = '';
  let topicId = 'math_calc';
  let diagram = null;
  let difficulty = 'basic';

  if (grade === 1) {
    topicId = 'math_calc';
    if (qType === 0) {
      const a = randInt(1, 9);
      const b = randInt(1, 9);
      const ans = a + b;
      qText = `${a} ＋ ${b} は いくつですか？`;
      answerStr = `${ans}`;
      options = shuffleArray([answerStr, `${ans + 1}`, `${ans - 1 > 0 ? ans - 1 : ans + 2}`, `${ans + 3}`]);
      hint = '指や絵を使ってあわせて数えてみよう！';
      explanation = `${a} ＋ ${b} ＝ ${ans} です。`;
    } else if (qType === 1) {
      const a = randInt(5, 15);
      const b = randInt(1, a - 1);
      const ans = a - b;
      qText = `${a} － ${b} は いくつですか？`;
      answerStr = `${ans}`;
      options = shuffleArray([answerStr, `${ans + 1}`, `${ans - 1 >= 0 ? ans - 1 : ans + 2}`, `${ans + 3}`]);
      hint = `${a}個から${b}個引くと残りは何個かな？`;
      explanation = `${a} － ${b} ＝ ${ans} です。`;
    } else if (qType === 2) {
      const a = randInt(1, 8);
      const ans = 10 - a;
      qText = `${a} に あと いくつ たすと 10 に なりますか？`;
      answerStr = `${ans}`;
      options = shuffleArray([answerStr, `${ans + 1}`, `${ans + 2}`, `${ans - 1 > 0 ? ans - 1 : ans + 3}`]);
      hint = '10のまとまりを作ろう！';
      explanation = `${a} ＋ ${ans} ＝ 10 になります。`;
    } else if (qType === 3) {
      const a = randInt(2, 9);
      const b = randInt(1, 9);
      const ans = a + b;
      qText = `りんごが ${a}こ あります。おともだちから ${b}こ もらいました。あわせて なんこ？`;
      answerStr = `${ans}こ`;
      options = shuffleArray([answerStr, `${ans + 1}こ`, `${ans - 1}こ`, `${ans + 2}こ`]);
      hint = 'もらった分をたし算しよう！';
      explanation = `${a} ＋ ${b} ＝ ${ans}こ になります。`;
    } else if (qType === 4) {
      const a = randInt(10, 20);
      const b = randInt(10, 20);
      if (a === b) {
        qText = `「${a}」と「${b}」は どちらが おおきいですか？`;
        answerStr = 'おなじ';
        options = ['おなじ', `「${a}」のほうが大きい`, `「${b}」のほうが大きい`].slice(0, 3);
      } else {
        const big = Math.max(a, b);
        qText = `「${a}」と「${b}」は どちらが おおきいですか？`;
        answerStr = `「${big}」`;
        options = shuffleArray([`「${a}」`, `「${b}」`, 'おなじ']);
      }
      hint = '数直線や位の大きさをくらべてみよう！';
      explanation = `数字が大きいのは 「${answerStr}」 です。`;
    } else {
      const a = randInt(5, 9);
      const b = randInt(5, 9);
      const ans = a + b;
      qText = `くりあがりの ある たしざん： ${a} ＋ ${b} ＝ つぎの うち どれかな？`;
      answerStr = `${ans}`;
      options = shuffleArray([answerStr, `${ans + 1}`, `${ans - 1}`, `${ans + 2}`]);
      hint = '10のまとまりを作ってから残りを足そう！';
      explanation = `${a} ＋ ${b} ＝ ${ans} です。`;
    }
  } else if (grade === 2) {
    if (qType === 0 || qType === 1) {
      topicId = 'math_calc';
      const m = randInt(2, 9);
      const n = randInt(1, 9);
      const ans = m * n;
      qText = `九九の計算： ${m} × ${n} は いくつですか？`;
      answerStr = `${ans}`;
      options = shuffleArray([answerStr, `${ans + m}`, `${ans - m > 0 ? ans - m : ans + 2}`, `${ans + 1}`]);
      hint = `九九の「${m}の段」を唱えてみよう！`;
      explanation = `${m} × ${n} ＝ ${ans} となります。`;
    } else if (qType === 2) {
      topicId = 'math_calc';
      const a = randInt(20, 60);
      const b = randInt(10, 30);
      const ans = a + b;
      qText = `${a} ＋ ${b} の計算の答えはどれですか？`;
      answerStr = `${ans}`;
      options = shuffleArray([answerStr, `${ans + 10}`, `${ans - 1}`, `${ans + 2}`]);
      hint = '十の位と一の位をそれぞれ足してみよう！';
      explanation = `${a} ＋ ${b} ＝ ${ans} です。`;
    } else if (qType === 3) {
      topicId = 'math_calc';
      const a = randInt(40, 90);
      const b = randInt(15, 35);
      const ans = a - b;
      qText = `${a} － ${b} の計算の答えはどれですか？`;
      answerStr = `${ans}`;
      options = shuffleArray([answerStr, `${ans - 10 > 0 ? ans - 10 : ans + 5}`, `${ans + 1}`, `${ans - 2}`]);
      hint = '一の位から順番に引いていこう！';
      explanation = `${a} － ${b} ＝ ${ans} です。`;
    } else if (qType === 4) {
      topicId = 'math_shape';
      const w = randInt(2, 8);
      const h = randInt(2, 8);
      const peri = (w + h) * 2;
      qText = `たて ${h}cm、よこ ${w}cm の長方形の「まわりの長さ」は何cmですか？`;
      answerStr = `${peri}cm`;
      options = shuffleArray([answerStr, `${w * h}cm`, `${peri + 2}cm`, `${peri - 2}cm`]);
      hint = 'たて＋よこ＋たて＋よこ の長さだよ！';
      explanation = `(${h} ＋ ${w}) × 2 ＝ ${peri}cm です。`;
    } else {
      topicId = 'math_calc';
      const val = randInt(100, 900);
      qText = `「${val}」は、100を何個あつめた数ですか？（100の位）`;
      answerStr = `${Math.floor(val / 100)}個`;
      options = shuffleArray([answerStr, `${Math.floor(val / 100) + 1}個`, `${Math.floor(val / 10)}個`, `${val}個`]);
      hint = '百の位の数字を見よう！';
      explanation = `${val} の百の位は ${Math.floor(val / 100)} なので ${Math.floor(val / 100)}個です。`;
    }
  } else if (grade === 3) {
    if (qType === 0) {
      topicId = 'math_calc';
      const a = randInt(15, 45);
      const b = randInt(2, 6);
      const quo = Math.floor(a / b);
      const rem = a % b;
      qText = `${a} ÷ ${b} の 計算の「あまり」は いくつですか？`;
      answerStr = `${rem}`;
      options = shuffleArray([answerStr, `${rem + 1}`, `${rem === 0 ? 2 : rem - 1}`, `${quo}`]);
      hint = `${b}の段で${a}を超えない一番近い数を探そう！`;
      explanation = `${a} ÷ ${b} ＝ ${quo} あまり ${rem} となります。`;
    } else if (qType === 1) {
      topicId = 'math_calc';
      const a = randInt(100, 450);
      const b = randInt(100, 450);
      const ans = a + b;
      diagram = 'hissan_board';
      qText = `3けたの筆算： ${a} ＋ ${b} の答えはいくつですか？`;
      answerStr = `${ans}`;
      options = shuffleArray([answerStr, `${ans + 10}`, `${ans - 10}`, `${ans + 100}`]);
      hint = '一の位から順番に繰り上がりに注意して計算しよう！';
      explanation = `${a} ＋ ${b} ＝ ${ans} となります。`;
    } else if (qType === 2) {
      topicId = 'math_shape';
      const side = randInt(3, 9);
      const ans = side * side;
      qText = `1辺が ${side}cm の正方形の面積は何㎠ですか？`;
      answerStr = `${ans} ㎠`;
      options = shuffleArray([answerStr, `${side * 4} ㎠`, `${ans + side} ㎠`, `${ans - 2} ㎠`]);
      hint = '正方形の面積 ＝ 1辺 × 1辺 だよ！';
      explanation = `${side} × ${side} ＝ ${ans}㎠ となります。`;
    } else if (qType === 3) {
      topicId = 'math_ratio';
      difficulty = 'medium';
      const totalMin = randInt(60, 150);
      const h = Math.floor(totalMin / 60);
      const m = totalMin % 60;
      qText = `${totalMin}分間 は 「何時間何分」 ですか？`;
      answerStr = `${h}時間${m}分`;
      options = shuffleArray([answerStr, `${h}時間${m + 10}分`, `${h + 1}時間${m}分`, `${h}時間${m === 0 ? 15 : m - 5}分`]);
      hint = '1時間は60分だよ！60分で1時間に繰り上げよう。';
      explanation = `${totalMin}分 ＝ 60分×${h} ＋ ${m}分 ＝ ${h}時間${m}分 です。`;
    } else {
      topicId = 'math_calc';
      const a = randInt(12, 48);
      const b = randInt(2, 8);
      const ans = a * b;
      qText = `${a} × ${b} の掛け算の答えはいくつですか？`;
      answerStr = `${ans}`;
      options = shuffleArray([answerStr, `${ans + b}`, `${ans - 10}`, `${ans + 10}`]);
      hint = `十の位(${Math.floor(a / 10) * 10}×${b}) と 一の位(${a % 10}×${b}) を足そう！`;
      explanation = `${a} × ${b} ＝ ${ans} です。`;
    }
  } else if (grade === 4) {
    if (qType === 0) {
      topicId = 'math_calc';
      const a = randInt(150, 450);
      const b = randInt(150, 450);
      const ans = a + b;
      diagram = 'hissan_board';
      qText = `筆算の計算： [${a}|さんびゃく] ＋ [${b}|にびゃく] の答えは？`;
      answerStr = `${ans}`;
      options = shuffleArray([answerStr, `${ans + 10}`, `${ans - 10}`, `${ans + 100}`]);
      hint = '一の位・十の位の繰り上がりに気をつけてね！';
      explanation = `${a} ＋ ${b} ＝ ${ans} となります。`;
    } else if (qType === 1) {
      topicId = 'math_shape';
      difficulty = 'medium';
      const w1 = randInt(3, 6);
      const h1 = randInt(8, 14);
      const w2 = randInt(6, 12);
      const h2 = randInt(4, 8);
      const ans = (w1 * h1) + (w2 * h2);
      diagram = 'l_shape';
      qText = `図のL字型の[複合図形|ふくごうずけい]（幅${w1}cm×高さ${h1}cmと幅${w2}cm×高さ${h2}cm）の[面積|めんせき]は何㎠ですか？`;
      answerStr = `${ans} ㎠`;
      options = shuffleArray([`${ans} ㎠`, `${ans + 12} ㎠`, `${ans - 8} ㎠`, `${(w1 + w2) * (h1 + h2)} ㎠`]);
      hint = '2つの長方形に分けて面積を計算して足そう！';
      explanation = `(${w1}×${h1}) ＋ (${w2}×${h2}) ＝ ${w1 * h1} ＋ ${w2 * h2} ＝ ${ans}㎠ となります。`;
    } else if (qType === 2) {
      topicId = 'math_ratio';
      difficulty = 'medium';
      const num = randInt(120, 480);
      const factor = 10;
      const ans = num / factor;
      qText = `${num} の 1/10 (10分の1) の大きさの数はいくつですか？`;
      answerStr = `${ans}`;
      options = shuffleArray([`${ans}`, `${ans * 100}`, `${ans / 10}`, `${num - 10}`]);
      hint = '小数点を左に1つ動かそう！';
      explanation = `${num} ÷ 10 ＝ ${ans} となります。`;
    } else if (qType === 3) {
      topicId = 'math_calc';
      const a = randInt(12, 35);
      const b = randInt(11, 29);
      const ans = a * b;
      diagram = 'hissan_board';
      qText = `2けた×2けたの筆算： ${a} × ${b} の答えはいくらですか？`;
      answerStr = `${ans}`;
      options = shuffleArray([`${ans}`, `${ans + 10}`, `${ans - 20}`, `${ans + 100}`]);
      hint = '位を揃えて2段階の掛け算を足し合わせよう！';
      explanation = `${a} × ${b} ＝ ${ans} です。`;
    } else {
      topicId = 'math_shape';
      const base = randInt(4, 12);
      const h = randInt(3, 10);
      const ans = base * h;
      qText = `底辺 ${base}cm、高さ ${h}cm の平行四辺形の面積は何㎠ですか？`;
      answerStr = `${ans} ㎠`;
      options = shuffleArray([`${ans} ㎠`, `${ans / 2} ㎠`, `${(base + h) * 2} ㎠`, `${ans + 5} ㎠`]);
      hint = '平行四辺形の面積 ＝ 底辺 × 高さ です！';
      explanation = `${base} × ${h} ＝ ${ans}㎠ となります。`;
    }
  } else if (grade === 5) {
    difficulty = 'medium';
    if (qType === 0 || qType === 1) {
      topicId = 'math_ratio';
      const originalPrice = randInt(10, 50) * 100;
      const discountPercent = randInt(1, 4) * 10; // 10%, 20%, 30%, 40%
      const discountRate = (100 - discountPercent) / 100;
      const ans = originalPrice * discountRate;
      qText = `定価 [${originalPrice}円|にせんえん] の服が [${discountPercent}％引き|さんじゅっぱいびき] で売られています。売り値は何円ですか？`;
      answerStr = `${ans}円`;
      options = shuffleArray([`${ans}円`, `${originalPrice * (discountPercent / 100)}円`, `${ans + 100}円`, `${ans - 200}円`]);
      hint = `定価の ${(100 - discountPercent)}％ (${discountRate}) のお値段だよ！`;
      explanation = `${originalPrice} × ${discountRate} ＝ ${ans}円 です。`;
    } else if (qType === 2) {
      topicId = 'math_shape';
      const b1 = randInt(4, 10);
      const b2 = randInt(6, 14);
      const h = randInt(4, 10);
      const ans = ((b1 + b2) * h) / 2;
      qText = `上底 ${b1}cm、下底 ${b2}cm、高さ ${h}cm の台形の面積は何㎠ですか？`;
      answerStr = `${ans} ㎠`;
      options = shuffleArray([`${ans} ㎠`, `${(b1 + b2) * h} ㎠`, `${ans + 10} ㎠`, `${ans - 5} ㎠`]);
      hint = '台形の面積 ＝ (上底 ＋ 下底) × 高さ ÷ 2';
      explanation = `(${b1} ＋ ${b2}) × ${h} ÷ 2 ＝ ${ans}㎠ です。`;
    } else if (qType === 3) {
      topicId = 'math_ratio';
      const a = randInt(60, 95);
      const b = randInt(60, 95);
      const c = randInt(60, 95);
      const avg = Math.round((a + b + c) / 3);
      qText = `3回のテストの点数が ${a}点、${b}点、${c}点 でした。平均点は約何点ですか？`;
      answerStr = `${avg}点`;
      options = shuffleArray([`${avg}点`, `${avg + 3}点`, `${avg - 4}点`, `${avg + 10}点`]);
      hint = '合計点 ÷ 回数(3) で求められるよ！';
      explanation = `(${a} ＋ ${b} ＋ ${c}) ÷ 3 ＝ ${avg}点 です。`;
    } else {
      topicId = 'math_calc';
      const a = randInt(1, 5);
      const b = randInt(1, 5);
      const d1 = a === 1 ? 2 : a;
      const d2 = b === 1 ? 3 : b + 1;
      const common = d1 * d2;
      const num = d2 + d1;
      qText = `異分母のたし算： 1/${d1} ＋ 1/${d2} の通分計算について正しいものはどれですか？`;
      answerStr = `${num}/${common}`;
      options = shuffleArray([`${num}/${common}`, `2/${d1 + d2}`, `${num + 1}/${common}`, `1/${common}`]);
      hint = '分母を共通の公倍数に揃えよう（通分）！';
      explanation = `分母を${common}に通分して分子を足すと ${num}/${common} となります。`;
    }
  } else {
    // Grade 6
    difficulty = 'advanced';
    if (qType === 0) {
      topicId = 'math_ratio';
      const n = randInt(3, 10);
      const ans = 3 * n + 1;
      diagram = 'matchstick';
      qText = `マッチ棒で正方形を横に並べて作ります。正方形を ${n} 個作るときに必要なマッチ棒の数は何本ですか？`;
      answerStr = `${ans}本`;
      options = shuffleArray([`${ans}本`, `${4 * n}本`, `${3 * n}本`, `${ans + 2}本`]);
      hint = '最初の1個は4本、2個目からは3本ずつ増えるね（3N ＋ 1）！';
      explanation = `3 × ${n} ＋ 1 ＝ ${ans}本 となります。`;
    } else if (qType === 1) {
      topicId = 'math_shape';
      const side = randInt(6, 12);
      const overlap = Math.floor(side / 2);
      const totalArea = (side * side * 2) - (overlap * overlap);
      diagram = 'origami';
      qText = `1辺 ${side}cm の正方形2枚が、縦${overlap}cm・横${overlap}cm 重なっています。全体（2枚合わせた形）の面積は何㎠ですか？`;
      answerStr = `${totalArea} ㎠`;
      options = shuffleArray([`${totalArea} ㎠`, `${side * side * 2} ㎠`, `${totalArea + overlap} ㎠`, `${totalArea - 10} ㎠`]);
      hint = '2枚の合計面積（正方形×2）から、重なっている正方形の面積を引こう！';
      explanation = `${side * side * 2} － ${overlap * overlap} ＝ ${totalArea}㎠ となります。`;
    } else if (qType === 2) {
      topicId = 'math_shape';
      diagram = 'cube_cut';
      qText = '1辺が 10cm の[立方体|りっぽうたい]を頂点を通る平面で斜めに切断したとき、切断面の形は何形になりますか？';
      answerStr = '三角形（正三角形）';
      options = ['三角形（正三角形）', '正方形', '長方形', 'ひし形'];
      hint = '3つの頂点を通る断面だよ！';
      explanation = '断面は「三角形（正三角形）」になります。';
    } else if (qType === 3) {
      topicId = 'math_ratio';
      const speed = randInt(40, 80);
      const hours = randInt(2, 5);
      const dist = speed * hours;
      qText = `時速 ${speed}km で走る自動車が ${hours}時間 進むと、道のりは何kmになりますか？`;
      answerStr = `${dist}km`;
      options = shuffleArray([`${dist}km`, `${dist + speed}km`, `${Math.round(dist / 2)}km`, `${dist - 20}km`]);
      hint = '道のり ＝ 速さ × 時間 （はじきの公式）';
      explanation = `${speed} × ${hours} ＝ ${dist}km です。`;
    } else {
      topicId = 'math_calc';
      const ratioA = randInt(2, 5);
      const ratioB = randInt(3, 7);
      const mult = randInt(4, 12);
      const realA = ratioA * mult;
      const realB = ratioB * mult;
      qText = `比の計算： 「${ratioA} ： ${ratioB}」 ＝ 「${realA} ： ▢」 の ▢ に入る数はいくつですか？`;
      answerStr = `${realB}`;
      options = shuffleArray([`${realB}`, `${realB + ratioB}`, `${realB - 2}`, `${realA + ratioB}`]);
      hint = `比の左側が何倍（${realA} ÷ ${ratioA} ＝ ${mult}倍）になっているか考えよう！`;
      explanation = `${realA} ÷ ${ratioA} ＝ ${mult}倍 なので、${ratioB} × ${mult} ＝ ${realB} です。`;
    }
  }

  return {
    id: `q_math_g${grade}_dyn_${index + 1}`,
    subjectId: 'math',
    subjectName: '📐 算数',
    topicId,
    grade,
    difficulty,
    question: qText,
    options,
    answer: answerStr,
    diagram,
    hint,
    explanation
  };
};

// --- RICH TEMPLATES FOR OTHER SUBJECTS ---
const JAPANESE_TEMPLATES = [
  { grade: 1, topicId: 'jp_kanji', diff: 'basic', q: '「[桜|さくら]」の [読み方|よみかた] は どれですか？', options: ['さくら', 'うめ', 'もも', 'きく'], a: 'さくら', hint: '春に咲くピンクのお花だよ。', explanation: '「桜」は「さくら」と読みます。' },
  { grade: 1, topicId: 'jp_kanji', diff: 'basic', q: '「[川|かわ]」の [読み方|よみかた] は どれですか？', options: ['かわ', 'やま', 'うみ', 'そら'], a: 'かわ', hint: '水が流れるところだよ。', explanation: '「川」は「かわ」と読みます。' },
  { grade: 2, topicId: 'jp_kanji', diff: 'basic', q: '次のうち、[同音異義語|どうおんいぎご]（読みが同じで意味がちがう言葉）の組み合わせはどれですか？', options: ['「機会」と「機械」', '「右」と「左」', '「大きい」と「高い」', '「学校」と「教室」'], a: '「機会」と「機械」', hint: 'どちらも「きかい」と読むね。', explanation: '「機会」と「機械」はどちらも「きかい」と読みます。' },
  { grade: 2, topicId: 'jp_kanji', diff: 'basic', q: '「[親切|しんせつ]」の反対の意味を持つ言葉（反対語）はどれですか？', options: ['不親切（ふしんせつ）', '丁寧（ていねい）', '親友（しんゆう）', '親切心'], a: '不親切（ふしんせつ）', hint: '「不」がつくと反対の意味になるよ。', explanation: '「親切」の反対語は「不親切」です。' },
  { grade: 3, topicId: 'jp_idiom', diff: 'medium', q: '慣用句「[猫|ねこ]の[手|て]も[借|か]りたい」の意味として正しいものはどれですか？', options: ['とても忙しくてだれでもいいから手伝ってほしい', '猫と遊ぶのがとても楽しい', '部屋がとても散らかっている', '手先が器用である'], a: 'とても忙しくてだれでもいいから手伝ってほしい', hint: '忙しい状態を表すよ。', explanation: '手助けが欲しいほど忙しい様子を意味します。' },
  { grade: 3, topicId: 'jp_idiom', diff: 'medium', q: '慣用句「[頭|あたま]を[抱|かか]える」の意味はどれですか？', options: ['解決方法がわからなくて困り果てる', '頭が痛くて熱がある', '帽子をかぶる', '頭を撫でてほめる'], a: '解決方法がわからなくて困り果てる', hint: '悩んでいる時のポーズだよ。', explanation: 'どうすれば良いか分からず悩むことです。' },
  { grade: 4, topicId: 'jp_idiom', diff: 'medium', q: 'ことわざ「[塵|ちり]も[積|つ]もれば[山|やま]となる」の意味はどれですか？', options: ['小事・わずかなことでも重なれば大きな成果になる', '部屋を掃除しないとゴミが山になる', '山登りは大変である', '大きな山も少しずつ崩れていく'], a: '小事・わずかなことでも重なれば大きな成果になる', hint: '少しずつの積み重ねが大切だね。', explanation: 'わずかなものでも積み重なれば大きなものになるという意味です。' },
  { grade: 4, topicId: 'jp_kanji', diff: 'medium', q: '「絶好の[キカイ|きかい]を逃す」の「キカイ」に当てはまる漢字はどれですか？', options: ['機会', '機械', '器械', '器物'], a: '機会', hint: 'チャンスという意味だよ！', explanation: 'チャンス・好機という意味なので「機会」です。' },
  { grade: 5, topicId: 'jp_idiom', diff: 'medium', q: '四字熟語「[一石二鳥|いっせきにちょう]」と同じ意味を持つ言葉はどれですか？', options: ['一挙両得（いっきょりょうとく）', '温故知新（おんこちしん）', '試行錯誤（しこうさくご）', '十人十色（じゅうにんといろ）'], a: '一挙両得（いっきょりょうとく）', hint: '1つの行動で2つの成果を得ること。', explanation: 'どちらも「1つの行動で2つの利益を得る」という意味です。' },
  { grade: 5, topicId: 'jp_express', diff: 'medium', q: '接続詞「しかし」と同じ働き（逆接）をする接続詞はどれですか？', options: ['だが', 'だから', 'また', 'つまり'], a: 'だが', hint: '前の内容と反対の内容をつなぐよ。', explanation: '「しかし」と「だが」はともに逆接の接続詞です。' },
  { grade: 6, topicId: 'jp_express', diff: 'advanced', q: '【適性検査 表現力記述】「地域の人々と挨拶を交わすことがなぜ大切か」について、適切な理由展開はどれですか？', options: ['互いの信頼感が深まり、地域の安全や防犯・温かいコミュニティ形成につながるから。', '挨拶をするとお小遣いがもらえるから。', '学校の先生に怒られないようにするため。', '挨拶は声の大きさを競うスポーツだから。'], a: '互いの信頼感が深まり、地域の安全や防犯・温かいコミュニティ形成につながるから。', hint: '適性検査では論理的に答える必要があります。', explanation: '「防犯・信頼感・地域コミュニティの向上」という公的な理由を論理的に説明することが求められます。' }
];

const SCIENCE_TEMPLATES = [
  { grade: 1, topicId: 'sci_observe', diff: 'basic', q: '[朝顔|あさがお]の[花|はな]は いつ咲くことが多いですか？', options: ['朝', '昼', '夜', '夜中'], a: '朝', hint: '名前の通り朝に咲くよ！', explanation: '朝顔は早朝に綺麗な花を咲かせます。' },
  { grade: 2, topicId: 'sci_observe', diff: 'basic', q: '[虫めがね|むしめがね]で太陽の光を集めると、黒い紙はどうなりますか？', options: ['煙が出てこげはじめる', '凍りつく', '水にぬれる', '何も変わらない'], a: '煙が出てこげはじめる', hint: '光と熱が集まるよ！', explanation: '虫眼鏡で日光を一点に集めると高温になり、黒い紙から煙が出ます。' },
  { grade: 3, topicId: 'sci_observe', diff: 'basic', q: '[太陽|たいよう]の[動|うご]きについて正しいものはどれですか？', options: ['東から上り、南を通って、西へ沈む', '西から上り、南を通って、東へ沈む', '北から上り、東を通って、南へ沈む', '一日中ずっと動かない'], a: '東から上り、南を通って、西へ沈む', hint: '朝は東の空から太陽が顔を出すよ！', explanation: '太陽は東から上り、南を通り、西へ沈みます。' },
  { grade: 4, topicId: 'sci_circuit', diff: 'medium', q: '乾電池2個と豆電球2個を図のように[直列|ちょくれつ]につないだとき、明かりはどうなりますか？', options: ['乾電池1個の時よりもとても明るくなる', '乾電池1個の時よりも暗くなる', '明かりはつかない', '明るさは変わらない'], a: '乾電池1個の時よりもとても明るくなる', diagram: 'circuit', hint: '直列つなぎにすると電流が強くなるよ！', explanation: '乾電池を直列につなぐと電流が強く流れるため、とても明るくなります。' },
  { grade: 5, topicId: 'sci_circuit', diff: 'medium', q: '水が[沸騰|ふっとう]したときに出てくる「[湯気|ゆげ]」と「[水蒸気|すいじょうき]」の違いについて正しい説明はどれですか？', options: ['湯気は目に見える小さな水滴で、水蒸気は目に見えない気体である', '湯気が気体で、水蒸気が液体である', '湯気も水蒸気もどちらも目に見える', '湯気も水蒸気もどちらも氷である'], a: '湯気は目に見える小さな水滴で、水蒸気は目に見えない気体である', hint: '透明な部分が水蒸気だよ。', explanation: '水蒸気は気体なので目に見えません。白くなったものが湯気（水滴）です。' },
  { grade: 6, topicId: 'sci_astro', diff: 'advanced', q: '月と太陽の位置関係について、[満月|まんげつ]が見えるとき、太陽・地球・月はどのような順番で並んでいますか？', options: ['太陽 － 地球 － 月', '太陽 － 月 － 地球', '地球 － 太陽 － 月', '月 － 太陽 － 地球'], a: '太陽 － 地球 － 月', hint: '地球の後ろ側から受ける位置だよ。', explanation: '「太陽 － 地球 － 月」の順番にほぼ一直線に並んだときです。' }
];

const SOCIAL_TEMPLATES = [
  { grade: 1, topicId: 'soc_kurashi', diff: 'basic', q: '交番にいる、まちの安全をまもってくれる人はだれですか？', options: ['警察官（けいさつかん）', '消防士（しょうぼうし）', 'パイロット', 'コックさん'], a: '警察官（けいさつかん）', hint: '青い制服を着ているよ。', explanation: '交番にいて街の安全を守るのは警察官です。' },
  { grade: 2, topicId: 'soc_kurashi', diff: 'basic', q: '火事（かじ）のときに駆けつけて消火活動をする車は何ですか？', options: ['消防車（しょうぼうしゃ）', 'パトカー', '救急車（きゅうきゅうしゃ）', 'タクシー'], a: '消防車（しょうぼうしゃ）', hint: '赤い大きな車だよ！', explanation: '火事を消すためにやってくるのは消防車です。' },
  { grade: 3, topicId: 'soc_okayama', diff: 'basic', q: '岡山県が「[晴|は]れの[国|くに]おかやま」と呼ばれる最大の理由は何ですか？', options: ['降水量1mm未満の日数が全国トップクラスで雨が少ないから', '毎日台風が来るから', '日本で一番南にあるから', '一年中雪が降っているから'], a: '降水量1mm未満の日数が全国トップクラスで雨が少ないから', diagram: 'bar_chart', hint: '日照時間が長く、雨が少ない気候なんだよ。', explanation: '年間降水量が少なく、晴れの日が多いためです。' },
  { grade: 4, topicId: 'soc_okayama', diff: 'medium', q: '岡山県の「[岡山三大河川|おかやまさんだいかせん]」に含まれない川はどれですか？', options: ['吉野川（よしのがわ）', '旭川（あさひがわ）', '吉井川（よしいがわ）', '高梁川（たかはすがわ）'], a: '吉野川（よしのがわ）', diagram: 'river_map', hint: '旭川・吉井川・高梁川の3つだよ！', explanation: '岡山の三大河川は旭川・吉井川・高梁川です。' },
  { grade: 5, topicId: 'soc_okayama', diff: 'medium', q: '岡山県倉敷市と香川県坂出市を結び、1988年に開通した世界最大級の橋は何ですか？', options: ['瀬戸大橋（せとおおはし）', '明石海峡大橋', '関門橋', 'レインボーブリッジ'], a: '瀬戸大橋（せとおおはし）', hint: '道路と鉄道が走る巨大な橋だよ！', explanation: '本州と四国を結ぶ巨大な橋は「瀬戸大橋」です。' },
  { grade: 6, topicId: 'soc_history', diff: 'advanced', q: '岡山県備前市にあり、江戸時代に岡山藩主・池田光政が創設した「日本最古の庶民のための学校」は何ですか？', options: ['旧閑谷学校（きゅうしずたにかっこう）', '足利学校', '適塾', '弘道館'], a: '旧閑谷学校（きゅうしずたにかっこう）', hint: '国宝の講堂が有名な学問の殿堂だよ。', explanation: '旧閑谷学校は庶民教育のための世界最古の公立学校の一つです。' }
];

const EXAM_TEMPLATES = [
  { grade: 6, topicId: 'exam_logic', diff: 'advanced', q: '【適性検査Ⅰ 思考パズル】たろう、はなこ、じろうの3人が掃除と給食の当番を担当します。表の「？」に入る曜日は何曜日ですか？（条件：1人は同じ曜日に重複しない）', options: ['木曜日', '金曜日', '水曜日', '月曜日'], a: '金曜日', diagram: 'schedule_table', hint: '月・火・水・木・金の中で探そう！', explanation: '重複しないスケジュールを当てはめると「金曜日」となります。' },
  { grade: 6, topicId: 'exam_data', diff: 'advanced', q: '【適性検査Ⅱ 資料分析】岡山の年間降水量グラフ（約1100mm）と全国平均（約1700mm）を比較してわかる岡山の農業の工夫として適切なものはどれですか？', options: ['ため池や用水路（農業用水）を発達させて水を効率よく利用してきた', '雨が降らないので農業を一切行わない', '毎年海水をそのまま畑に撒いている', 'ハウス栽培だけで米を作っている'], a: 'ため池や用水路（農業用水）を発達させて水を効率よく利用してきた', diagram: 'bar_chart', hint: '雨が少ない地域での工夫を考えよう！', explanation: '降水量が少ないため、「ため池」や「用水路」を整備して農業を行ってきました。' },
  { grade: 6, topicId: 'exam_express', diff: 'advanced', q: '【適性検査 表現力記述】「環境問題に対して小学生ができる取り組み」について、最も適切な提案はどれですか？', options: ['マイバッグを持ち歩き、不要なプラスチックゴミを減らす意識を持つ。', '車を自分で買い替える。', '法律を自分で新しく作る。', '毎日電気を一切使わずに暮らす。'], a: 'マイバッグを持ち歩き、不要なプラスチックゴミを減らす意識を持つ。', hint: '小学生の身近な暮らしでできる実践的な提案を選ぼう！', explanation: 'マイバッグ持参やゴミ削減など身近で実践的な行動提案が適切です。' }
];

export const generateQuestionsDatabase = () => {
  const db = [];

  // 1. Math: Generate dynamic questions (500 per grade = 3,000 total)
  for (let g = 1; g <= 6; g++) {
    for (let i = 0; i < 500; i++) {
      db.push(generateMathQuestion(g, i));
    }
  }

  // Helper for static templates
  const addSubjectTemplates = (subjectId, subjectName, templates) => {
    for (let g = 1; g <= 6; g++) {
      let gradeTemplates = templates.filter(t => t.grade === g);
      if (gradeTemplates.length === 0) {
        gradeTemplates = templates;
      }

      for (let i = 0; i < 500; i++) {
        const base = gradeTemplates[i % gradeTemplates.length];
        const shuffledOptions = shuffleArray(base.options);
        db.push({
          id: `q_${subjectId}_g${g}_${i + 1}`,
          subjectId,
          subjectName,
          topicId: base.topicId,
          grade: g,
          difficulty: base.diff,
          question: base.q,
          options: shuffledOptions,
          answer: base.a,
          diagram: base.diagram || null,
          hint: base.hint,
          explanation: base.explanation
        });
      }
    }
  };

  // 2. Japanese
  addSubjectTemplates('japanese', '✏️ 国語', JAPANESE_TEMPLATES);

  // 3. Science
  addSubjectTemplates('science', '🧪 理科', SCIENCE_TEMPLATES);

  // 4. Social
  addSubjectTemplates('social', '🗾 社会', SOCIAL_TEMPLATES);

  // 5. Exam
  addSubjectTemplates('exam', '🎓 志望校受検適性検査', EXAM_TEMPLATES);

  return db;
};

export const QUESTIONS_DB = generateQuestionsDatabase();
