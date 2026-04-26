import '../index.css'

const faqs = [
  {
    category: '住宅ローンについて',
    items: [
      { q: '住宅ローンの金利はいくらですか？', a: '現在の住宅ローン金利は変動金利で年0.475%〜、固定金利（10年）で年1.5%〜となっています。金利は市場状況により変動します。' },
      { q: '住宅ローンの審査にはどのくらいかかりますか？', a: '通常、仮審査は最短即日〜3営業日、本審査は1〜2週間程度かかります。' },
      { q: '住宅ローンの繰り上げ返済はできますか？', a: 'はい、一部繰り上げ返済と全額繰り上げ返済の両方に対応しています。' },
    ]
  },
  {
    category: 'カードローンについて',
    items: [
      { q: 'カードローンの限度額はいくらですか？', a: 'カードローンの限度額は10万円〜500万円の範囲で、審査結果に基づいて決定されます。' },
      { q: 'カードローンの返済方法は？', a: '毎月の約定返済（口座引落）のほか、ATMやインターネットバンキングからの随時返済も可能です。' },
    ]
  },
  {
    category: '口座開設について',
    items: [
      { q: '口座開設に必要な書類は？', a: '本人確認書類（運転免許証、マイナンバーカード等）が必要です。オンラインでの口座開設も可能です。' },
      { q: '口座開設にかかる時間は？', a: 'オンライン申込の場合、最短即日〜3営業日で口座開設が完了します。' },
    ]
  }
]

function App() {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: 20, fontFamily: 'sans-serif' }}>
      <h1 style={{ borderBottom: '3px solid #0066cc', paddingBottom: 10 }}>
        ⭐ 東京スター銀行 FAQ
      </h1>
      <p style={{ color: '#666' }}>よくあるご質問をまとめています。</p>

      {faqs.map((section) => (
        <div key={section.category} style={{ marginBottom: 30 }}>
          <h2 style={{ color: '#0066cc' }}>{section.category}</h2>
          {section.items.map((faq) => (
            <details key={faq.q} style={{ marginBottom: 10, padding: 12, background: '#f8f9fa', borderRadius: 8 }}>
              <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>{faq.q}</summary>
              <p style={{ marginTop: 8, lineHeight: 1.6 }}>{faq.a}</p>
            </details>
          ))}
        </div>
      ))}

      <footer style={{ marginTop: 40, padding: 20, background: '#f0f0f0', borderRadius: 8, textAlign: 'center', color: '#999' }}>
        © 2026 東京スター銀行 FAQ（デモ用）
      </footer>
    </div>
  )
}

export default App
