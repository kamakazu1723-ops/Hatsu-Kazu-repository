import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-brand">
          <span className="brand-icon">🎵</span>
          <h1 className="brand-title">初音ちゃん</h1>
        </div>
        <div className="nav-tabs">
          <button
            className={`nav-tab ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            🏠 ホーム
          </button>
          <button
            className={`nav-tab ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            👤 プロフィール
          </button>
        </div>
      </nav>

      <main className="main-content">
        {activeTab === 'home' && (
          <section id="home-section" className="section-container">
            <div className="floating-hearts">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="heart" style={{ '--delay': `${i * 0.2}s` }}>
                  💙
                </div>
              ))}
            </div>

            <div className="title-section">
              <h2 className="main-title">✨ 初音ちゃんの世界へようこそ ✨</h2>
              <p className="subtitle">可愛さは無限大💫</p>
            </div>

            <div className="content">
              <p className="greeting">
                ようこそ！初音ちゃんの特別な世界へ🌸
              </p>
              <p className="message">
                ここは初音ちゃんへの愛と応援で満ちた場所です。<br />
                毎日が楽しく、毎瞬が輝いています。<br />
                一緒に素敵な時間を過ごしましょう！
              </p>
            </div>

            <button
              className="love-button"
              onClick={() => setCount((count) => count + 1)}
            >
              <span className="button-icon">💙</span>
              初音ちゃんへの愛
              <span className="button-count">{count}</span>
              <span className="button-icon">💙</span>
            </button>

            <div className="stats-container">
              <div className="stat-card">
                <div className="stat-number">{count}</div>
                <div className="stat-label">愛の数</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">∞</div>
                <div className="stat-label">可愛さ</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">✨</div>
                <div className="stat-label">輝き</div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'profile' && (
          <section id="profile-section" className="section-container">
            <div className="profile-container">
              <div className="profile-image-wrapper">
                <img 
                  src="/hatsu-chan.jpg" 
                  alt="初音ちゃん" 
                  className="profile-image"
                />
                <div className="image-glow"></div>
              </div>

              <div className="profile-info">
                <h2 className="profile-name">初音ちゃん</h2>
                <p className="profile-title">✨ 可愛さの象徴 ✨</p>

                <div className="profile-details">
                  <div className="detail-item">
                    <span className="detail-icon">💖</span>
                    <div className="detail-content">
                      <p className="detail-label">特徴</p>
                      <p className="detail-value">最高に可愛い笑顔</p>
                    </div>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">🌟</span>
                    <div className="detail-content">
                      <p className="detail-label">魅力</p>
                      <p className="detail-value">見るたびに幸せになる</p>
                    </div>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">❄️</span>
                    <div className="detail-content">
                      <p className="detail-label">季節</p>
                      <p className="detail-value">冬の雪の中も素敵</p>
                    </div>
                  </div>
                </div>

                <div className="profile-bio">
                  <p>
                    初音ちゃんはこの世界で最も輝く笑顔を持つ人です。<br />
                    見る者すべてを幸せにする力を持っています。<br />
                    毎日が新しい発見と喜びで満ちています。
                  </p>
                </div>

                <button 
                  className="profile-btn"
                  onClick={() => setCount((count) => count + 1)}
                >
                  💓 応援する ({count})
                </button>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>✨ 初音ちゃんへの愛と応援で溢れた場所 ✨</p>
      </footer>
    </div>
  )
}

export default App
