export const MATH_QUESTIONS = {
  1: [
    {
      id: 'm1_1',
      title: 'かずの たしざん',
      rubiedTitle: '<ruby>数<rt>かず</rt></ruby>の たしざん',
      question: 'りんごが 3こ あります。おあねえちゃんから 4こ もらいました。あわせて なんこ に なったかな？',
      rubiedQuestion: 'りんごが 3こ あります。おあねえちゃんから 4こ もらいました。あわせて なんこ に なったかな？ 🍎🍎🍎 + 🍎🍎🍎🍎',
      type: 'choice',
      options: ['5こ', '6こ', '7こ', '8こ'],
      correctIndex: 2,
      explanation: '3 + 4 = 7（しち / ななこ）だね！ よくできました！'
    },
    {
      id: 'm1_2',
      title: 'ひきざん ドリル',
      rubiedTitle: 'ひきざん ドリル',
      question: 'キャンディが 9こ ありました。3こ たべました。のこりは なんこ かな？',
      rubiedQuestion: 'キャンディが 9こ ありました。3こ たべました。のこりは なんこ かな？ 🍬🍬🍬🍬🍬🍬🍬🍬🍬 - 🍬🍬🍬',
      type: 'choice',
      options: ['4こ', '5こ', '6こ', '7こ'],
      correctIndex: 2,
      explanation: '9 - 3 = 6（ろっこ）だね！'
    },
    {
      id: 'm1_3',
      title: 'おおきい かず くらべ',
      rubiedTitle: '<ruby>大<rt>おお</rt></ruby>きい <ruby>数<rt>かず</rt></ruby> くらべ',
      question: '「15」と「18」は、どちらが おおきいかな？',
      rubiedQuestion: '「15」と「18」は、どちらが <ruby>大<rt>おお</rt></ruby>きいかな？',
      type: 'choice',
      options: ['15', '18', 'おなじ'],
      correctIndex: 1,
      explanation: '18の ほうが 3 おおきいね！'
    },
    {
      id: 'm1_4',
      title: 'くりあがる たしざん',
      rubiedTitle: 'くりあがる たしざん',
      question: '8 + 5 = つぎの うち どれかな？',
      rubiedQuestion: '8 + 5 は つぎの うち どれかな？',
      type: 'choice',
      options: ['11', '12', '13', '14'],
      correctIndex: 2,
      explanation: '8に 2を たして 10をつくり、のこりの 3を たすと 13になるよ！'
    }
  ],
  4: [
    {
      id: 'm4_hissan_1',
      title: 'たし算の筆算（3けた＋3けた）',
      question: '次の筆算の答えを完成させましょう。',
      type: 'hissan',
      num1: '448',
      num2: '375',
      op: '+',
      // 448 + 375 = 823
      digits: [
        { label: '百の位', val: '8', carry: '1' },
        { label: '十の位', val: '2', carry: '1' },
        { label: '一の位', val: '3', carry: '0' }
      ],
      correctAnswer: '823',
      explanation: '一の位: 8+5=13（1くり上がり）。十の位: 4+7+1=12（1くり上がり）。百の位: 4+3+1=8。答えは823です。'
    },
    {
      id: 'm4_hissan_2',
      title: '引き算の筆算（繰り下がりあり）',
      question: '次の筆算の答えを完成させましょう。',
      type: 'hissan',
      num1: '832',
      num2: '459',
      op: '-',
      // 832 - 459 = 373
      digits: [
        { label: '百の位', val: '3' },
        { label: '十の位', val: '7' },
        { label: '一の位', val: '3' }
      ],
      correctAnswer: '373',
      explanation: '一の位: 2から9は引けないので十の位から借りて 12-9=3。十の位: 2から5は引けないので百の位から借りて 12-5=7。百の位: 7-4=3。答えは373です。'
    },
    {
      id: 'm4_hissan_3',
      title: '掛け算の筆算（3けた×2けた）',
      question: '128 × 34 を筆算で計算しましょう。',
      type: 'hissan',
      num1: '128',
      num2: '34',
      op: '×',
      digits: [
        { label: '千の位', val: '4' },
        { label: '百の位', val: '3' },
        { label: '十の位', val: '5' },
        { label: '一の位', val: '2' }
      ],
      correctAnswer: '4352',
      explanation: '128×4 = 512、128×30 = 3840。あわせると 512 + 3840 = 4352 となります！'
    },
    {
      id: 'm4_word_1',
      title: '文章題（大きな数と割合・分配）',
      question: 'ゆずちゃんは本を1冊読むことにしました。1日目に全体の 1/4 を読み、2日目に残りの半分の30ページを読みました。この本は全部で何ページありますか？',
      type: 'choice',
      options: ['60ページ', '80ページ', '90ページ', '100ページ'],
      correctIndex: 1,
      explanation: '残りの半分が30ページなので、2日目を読む前の残りは 30×2 = 60ページです。これが全体の 3/4（1 - 1/4）にあたるため、全体は 60 ÷ 3 × 4 = 80ページです！'
    }
  ]
};
