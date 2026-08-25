import React from 'react';

export const TargetSchoolGuide = () => {
  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 text-white rounded-3xl p-8 shadow-xl">
        <span className="bg-amber-400 text-amber-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
          岡山県立中高一貫校 受検対策ガイド
        </span>
        <h2 className="text-3xl font-black mt-3">岡山県立中高一貫校 2校ガイド</h2>
        <p className="text-sm text-purple-200 mt-2 max-w-2xl">
          岡山県を代表する公立中高一貫校2校の学校生活、探究学習、学食名物、および最新の受検過去問情報を完全網羅！
        </p>
      </div>

      {/* 2 Schools Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Okayama Sozan Junior High School */}
        <div className="bg-white rounded-3xl p-6 border-2 border-pink-100 shadow-md space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center text-2xl text-pink-600 font-black">
              A
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">県立A中学校</h3>
              <p className="text-xs text-slate-500 font-bold">併設型中高一貫校 / 岡山市中区</p>
            </div>
          </div>

          <div className="space-y-3 text-xs text-slate-700">
            <div className="p-3 bg-pink-50 rounded-xl">
              <div className="font-bold text-pink-900 mb-1">🌟 特色ある探究学習「未来航路」</div>
              <p>自ら問いを立て論理的に発信する探究プログラム。適性検査Ⅰ・Ⅱで求められる表現力の源泉です。</p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl">
              <div className="font-bold text-slate-900 mb-1">🎪 学校祭「松柏祭（しょうはくさい）」</div>
              <p>中高合同で開催される感動の文化祭・体育祭。クラス一丸となった劇や展示が大人気！</p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl">
              <div className="font-bold text-slate-900 mb-1">🍱 学食名物「唐揚げ丼 ＆ 日踊りランチ」</div>
              <p>安くてボリューム満点！サクサクのジューシーな唐揚げ丼は在校生のソウルフード。</p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl">
              <div className="font-bold text-slate-900 mb-1">🗣️ 在校生・保護者の生の声</div>
              <p className="italic">「先輩たちがとても優しく、自発的に勉強する習慣が自然と身につきました！」（中2女子）</p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="https://www.pref.okayama.jp/page/848225.html"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 bg-pink-500 hover:bg-pink-600 text-white font-extrabold text-xs rounded-xl shadow transition text-center block"
            >
              🔗 岡山県教育委員会 公式受検情報ページへ
            </a>
          </div>
        </div>

        {/* Okayama Daianji Secondary Education School */}
        <div className="bg-white rounded-3xl p-6 border-2 border-purple-100 shadow-md space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-2xl text-purple-700 font-black">
              B
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">県立B中等教育学校</h3>
              <p className="text-xs text-slate-500 font-bold">中等教育学校 (6年完全一貫) / 岡山市北区</p>
            </div>
          </div>

          <div className="space-y-3 text-xs text-slate-700">
            <div className="p-3 bg-purple-50 rounded-xl">
              <div className="font-bold text-purple-900 mb-1">🌏 英語スピーキング ＆ 豪州研修</div>
              <p>国際理解教育に特化。オーストラリア語学研修やChromebookを活用した先端SSH学び。</p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl">
              <div className="font-bold text-slate-900 mb-1">🎪 学校祭「白鷺祭（はくろさい）」</div>
              <p>白鷺の如く気高く美しい文化祭・体育祭。フェンシング部やディベート部の実演も圧巻！</p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl">
              <div className="font-bold text-slate-900 mb-1">🍜 学食名物「特製ラーメン ＆ カレー」</div>
              <p>出汁の効いた特製ラーメンと本格辛口カレーは、午後の授業へのパワーの源。</p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl">
              <div className="font-bold text-slate-900 mb-1">🗣️ 在校生・保護者の生の声</div>
              <p className="italic">「高校受験がない分、自分のやりたい英語研究に打ち込めるのが最高の魅力です。」（前期生男子）</p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="https://www.pref.okayama.jp/page/848225.html"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs rounded-xl shadow transition text-center block"
            >
              🔗 過去問 ＆ 公式受検ページへ
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
