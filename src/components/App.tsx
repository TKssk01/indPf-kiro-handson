import { useState } from 'react'
import '../index.css'

const services = [
  { icon: '🏠', title: '住宅ローン', desc: '変動金利 年0.475%〜', color: '#e8f0fe' },
  { icon: '💳', title: 'カードローン', desc: '年1.5%〜14.6%', color: '#fef3e0' },
  { icon: '🏦', title: '口座開設', desc: '最短即日開設', color: '#e8f5e9' },
  { icon: '💻', title: 'ネットバンキング', desc: '24時間お取引', color: '#f3e5f5' },
]

const news = [
  { date: '2026.04.25', text: 'ゴールデンウィーク期間中の営業のご案内' },
  { date: '2026.04.20', text: '住宅ローン金利引き下げキャンペーン実施中' },
  { date: '2026.04.15', text: 'スマートフォンアプリ リニューアルのお知らせ' },
  { date: '2026.04.10', text: 'インターネットバンキング メンテナンスのお知らせ（5/3）' },
]

const faqs = [
  { category: '住宅ローン', items: [
    { q: '住宅ローンの金利タイプにはどのような種類がありますか？', a: '変動金利型、固定金利期間選択型、全期間固定金利型の3種類があります。' },
    { q: '住宅ローンの審査にはどのくらいの期間がかかりますか？', a: '仮審査は最短即日〜3営業日、本審査は1〜2週間程度です。' },
    { q: '繰り上げ返済はいつでもできますか？', a: 'はい、一部繰り上げ返済と全額繰り上げ返済の両方に対応しています。' },
  ]},
  { category: 'カードローン', items: [
    { q: 'カードローンの金利を教えてください。', a: '年1.5%〜14.6%（変動金利）です。ご利用限度額に応じて適用金利が異なります。' },
    { q: '申し込みから利用開始まで、どのくらいかかりますか？', a: 'Web申込の場合、最短即日〜3営業日で審査結果をお知らせします。' },
  ]},
  { category: '口座・預金', items: [
    { q: '口座開設に必要な書類は？', a: '本人確認書類（運転免許証、マイナンバーカード等）が必要です。' },
    { q: '口座開設にかかる時間は？', a: 'オンライン申込の場合、最短即日〜3営業日で完了します。' },
  ]},
]

function App() {
  const [expandedQ, setExpandedQ] = useState<string | null>(null)

  return (
    <div style={{ minHeight: '100vh', background: '#f5f6fa' }}>
      {/* Header */}
      <header style={{ background: '#0d1b4c', color: 'white', padding: '0 32px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ fontWeight: 'bold', fontSize: 20, letterSpacing: 1 }}>東京★スター銀行</div>
        <nav style={{ display: 'flex', gap: 28, fontSize: 14 }}>
          {['個人のお客さま', '法人のお客さま', '店舗・ATM', 'お問い合わせ'].map(item => (
            <span key={item} style={{ cursor: 'pointer', opacity: 0.85 }}>{item}</span>
          ))}
        </nav>
      </header>

      {/* Hero Banner */}
      <div style={{ background: 'linear-gradient(135deg, #0d1b4c 0%, #1e3a8a 50%, #3b82f6 100%)', color: 'white', textAlign: 'center', padding: '64px 24px' }}>
        <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12 }}>あなたの未来を、ともに。</h1>
        <p style={{ fontSize: 16, opacity: 0.8, marginBottom: 32 }}>東京スター銀行は、お客さま一人ひとりに寄り添った金融サービスを提供します。</p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{ padding: '14px 32px', borderRadius: 8, border: '2px solid white', background: 'transparent', color: 'white', fontSize: 15, cursor: 'pointer', fontWeight: 600 }}>
            口座開設はこちら
          </button>
          <button style={{ padding: '14px 32px', borderRadius: 8, border: 'none', background: '#f59e0b', color: 'white', fontSize: 15, cursor: 'pointer', fontWeight: 600 }}>
            ローンシミュレーション
          </button>
        </div>
      </div>

      {/* Services */}
      <div style={{ maxWidth: 1000, margin: '-40px auto 0', padding: '0 24px', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {services.map(s => (
            <div key={s.title} style={{ background: 'white', borderRadius: 12, padding: 24, textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', cursor: 'pointer' }}>
              <div style={{ fontSize: 36, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{s.title}</div>
              <div style={{ color: '#1e3a8a', fontSize: 13, fontWeight: 500 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* News */}
      <div style={{ maxWidth: 1000, margin: '48px auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: 22, color: '#0d1b4c', marginBottom: 16, borderLeft: '4px solid #1e3a8a', paddingLeft: 12 }}>お知らせ</h2>
        <div style={{ background: 'white', borderRadius: 12, boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
          {news.map((n, i) => (
            <div key={i} style={{ padding: '14px 20px', borderBottom: i < news.length - 1 ? '1px solid #f0f0f0' : 'none', display: 'flex', gap: 16, alignItems: 'center', cursor: 'pointer' }}>
              <span style={{ color: '#888', fontSize: 13, flexShrink: 0 }}>{n.date}</span>
              <span style={{ fontSize: 14 }}>{n.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{ maxWidth: 1000, margin: '48px auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: 22, color: '#0d1b4c', marginBottom: 16, borderLeft: '4px solid #1e3a8a', paddingLeft: 12 }}>よくあるご質問</h2>
        {faqs.map(section => (
          <div key={section.category} style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: 16, color: '#1e3a8a', marginBottom: 8 }}>{section.category}</h3>
            {section.items.map(faq => (
              <div
                key={faq.q}
                onClick={() => setExpandedQ(expandedQ === faq.q ? null : faq.q)}
                style={{ padding: '14px 20px', margin: '6px 0', background: 'white', borderRadius: 8, cursor: 'pointer', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ background: '#0d1b4c', color: 'white', borderRadius: '50%', width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 'bold', flexShrink: 0 }}>Q</span>
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{faq.q}</span>
                  <span style={{ marginLeft: 'auto', color: '#aaa', flexShrink: 0 }}>{expandedQ === faq.q ? '▲' : '▼'}</span>
                </div>
                {expandedQ === faq.q && (
                  <div style={{ marginTop: 10, paddingLeft: 36, color: '#555', fontSize: 14, lineHeight: 1.7 }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer style={{ background: '#0d1b4c', color: 'rgba(255,255,255,0.5)', padding: '32px 24px', marginTop: 48 }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div style={{ color: 'white', fontWeight: 'bold', fontSize: 16, marginBottom: 12 }}>東京★スター銀行</div>
            <div style={{ fontSize: 12, lineHeight: 1.8 }}>
              〒107-8480 東京都港区赤坂2-3-5<br/>
              お客さま相談室: 0120-XXX-XXX
            </div>
          </div>
          <div style={{ display: 'flex', gap: 32, fontSize: 13 }}>
            <div>
              <div style={{ color: 'white', fontWeight: 600, marginBottom: 8 }}>サービス</div>
              <div style={{ lineHeight: 2 }}>住宅ローン<br/>カードローン<br/>口座開設</div>
            </div>
            <div>
              <div style={{ color: 'white', fontWeight: 600, marginBottom: 8 }}>サポート</div>
              <div style={{ lineHeight: 2 }}>よくあるご質問<br/>お問い合わせ<br/>店舗・ATM</div>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: 1000, margin: '24px auto 0', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: 12, textAlign: 'center' }}>
          © 2026 東京スター銀行（デモ用）
        </div>
      </footer>
    </div>
  )
}

export default App
