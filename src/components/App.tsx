import { useState } from 'react'
import '../index.css'

const categories = [
  { id: 'all', label: 'すべて', emoji: '' },
  { id: 'housing', label: '住宅ローン', emoji: '🏠' },
  { id: 'card', label: 'カードローン', emoji: '💳' },
  { id: 'account', label: '口座・預金', emoji: '🏦' },
  { id: 'internet', label: 'インターネットバンキング', emoji: '💻' },
  { id: 'cardloan', label: 'カード・ローン', emoji: '🔖' },
]

const faqs = [
  {
    category: 'housing',
    title: '住宅ローン',
    emoji: '🏠',
    items: [
      { q: '住宅ローンの金利タイプにはどのような種類がありますか？', a: '変動金利型、固定金利期間選択型、全期間固定金利型の3種類があります。変動金利は年0.475%〜、固定金利（10年）は年1.5%〜となっています。', tag: '人気' },
      { q: '住宅ローンの審査にはどのくらいの期間がかかりますか？', a: '仮審査は最短即日〜3営業日、本審査は1〜2週間程度です。必要書類が揃っている場合はよりスムーズに進みます。', tag: '' },
      { q: '繰り上げ返済はいつでもできますか？手数料はかかりますか？', a: 'はい、一部繰り上げ返済と全額繰り上げ返済の両方に対応しています。手数料は商品によって異なります。', tag: '' },
      { q: '住宅ローンの借り換えを検討しています。どのような手続きが必要ですか？', a: '借り換え審査の申込、必要書類の提出、審査通過後に契約手続きとなります。お近くの窓口またはWebでご相談ください。', tag: '' },
      { q: '団体信用生命保険（団信）への加入は必須ですか？', a: '原則として団信への加入が必要です。健康状態によっては加入できない場合もございます。', tag: '重要' },
    ]
  },
  {
    category: 'card',
    title: 'カードローン',
    emoji: '💳',
    items: [
      { q: 'スターワンカードローンの金利（利率）を教えてください。', a: '年1.5%〜14.6%（変動金利）です。ご利用限度額に応じて適用金利が異なります。', tag: '人気' },
      { q: 'カードローンの申し込みから利用開始まで、どのくらいかかりますか？', a: 'Web申込の場合、最短即日〜3営業日で審査結果をお知らせします。', tag: '' },
      { q: 'カードローンの返済方法は？', a: '毎月の約定返済（口座引落）のほか、ATMやインターネットバンキングからの随時返済も可能です。', tag: '' },
    ]
  },
  {
    category: 'account',
    title: '口座・預金',
    emoji: '🏦',
    items: [
      { q: '口座開設に必要な書類は？', a: '本人確認書類（運転免許証、マイナンバーカード等）が必要です。オンラインでの口座開設も可能です。', tag: '' },
      { q: '口座開設にかかる時間は？', a: 'オンライン申込の場合、最短即日〜3営業日で口座開設が完了します。', tag: '' },
    ]
  },
  {
    category: 'internet',
    title: 'インターネットバンキング',
    emoji: '💻',
    items: [
      { q: 'インターネットバンキングの利用登録方法は？', a: 'キャッシュカードと届出電話番号があれば、Webから即時登録できます。', tag: '' },
      { q: '振込の上限額は変更できますか？', a: 'はい、インターネットバンキングの設定画面から1日あたりの振込上限額を変更できます。', tag: '' },
    ]
  },
]

function App() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedQ, setExpandedQ] = useState<string | null>(null)

  const filteredFaqs = faqs
    .filter(section => activeCategory === 'all' || section.category === activeCategory)
    .map(section => ({
      ...section,
      items: section.items.filter(item =>
        searchQuery === '' || item.q.includes(searchQuery) || item.a.includes(searchQuery)
      )
    }))
    .filter(section => section.items.length > 0)

  return (
    <div style={{ minHeight: '100vh', background: '#f5f6fa' }}>
      {/* Header */}
      <header style={{ background: '#1a2b6d', color: 'white', padding: '0 24px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontWeight: 'bold', fontSize: 18 }}>東京★スター銀行</div>
        <nav style={{ display: 'flex', gap: 24, fontSize: 14 }}>
          <span>個人のお客さま</span>
          <span>法人のお客さま</span>
          <span>店舗・ATM</span>
          <span>お問い合わせ</span>
        </nav>
      </header>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #1a2b6d 0%, #2d4aaa 100%)', color: 'white', textAlign: 'center', padding: '48px 24px' }}>
        <h1 style={{ fontSize: 32, marginBottom: 8 }}>よくあるご質問（FAQ）</h1>
        <p style={{ opacity: 0.8, marginBottom: 24 }}>お客さまからよくいただくご質問をまとめました。</p>
        <div style={{ maxWidth: 600, margin: '0 auto', display: 'flex', gap: 8 }}>
          <input
            type="text"
            placeholder="キーワードで検索（例：住宅ローン 金利）"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{ flex: 1, padding: '12px 16px', borderRadius: 8, border: 'none', fontSize: 15 }}
          />
          <button style={{ padding: '12px 24px', borderRadius: 8, border: 'none', background: '#f5a623', color: 'white', fontWeight: 'bold', cursor: 'pointer', fontSize: 15 }}>
            検索
          </button>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '32px 24px' }}>
        {/* Category tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '8px 20px',
                borderRadius: 24,
                border: activeCategory === cat.id ? 'none' : '1px solid #ddd',
                background: activeCategory === cat.id ? '#1a2b6d' : 'white',
                color: activeCategory === cat.id ? 'white' : '#333',
                cursor: 'pointer',
                fontSize: 14,
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ sections */}
        {filteredFaqs.map(section => (
          <div key={section.category} style={{ marginBottom: 40 }}>
            <h2 style={{ color: '#1a2b6d', borderBottom: '3px solid #1a2b6d', paddingBottom: 8, fontSize: 20 }}>
              {section.emoji} {section.title}
            </h2>
            {section.items.map(faq => (
              <div
                key={faq.q}
                onClick={() => setExpandedQ(expandedQ === faq.q ? null : faq.q)}
                style={{
                  padding: '16px 20px',
                  margin: '8px 0',
                  background: 'white',
                  borderRadius: 8,
                  cursor: 'pointer',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ background: '#1a2b6d', color: 'white', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 'bold', flexShrink: 0 }}>Q</span>
                  <span style={{ fontWeight: 500 }}>{faq.q}</span>
                  {faq.tag && (
                    <span style={{
                      fontSize: 11,
                      padding: '2px 8px',
                      borderRadius: 4,
                      background: faq.tag === '人気' ? '#fff3cd' : '#f8d7da',
                      color: faq.tag === '人気' ? '#856404' : '#721c24',
                      flexShrink: 0,
                    }}>
                      {faq.tag}
                    </span>
                  )}
                </div>
                {expandedQ === faq.q && (
                  <div style={{ marginTop: 12, paddingLeft: 40, color: '#555', lineHeight: 1.7 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer style={{ background: '#1a2b6d', color: 'rgba(255,255,255,0.6)', textAlign: 'center', padding: 24, fontSize: 13 }}>
        © 2026 東京スター銀行 FAQ（デモ用）
      </footer>
    </div>
  )
}

export default App
