import { useState } from 'react'
import './App.css'
import hatsuneImage from '../image/hatsune-cha.jpg'

function App() {
  const [count, setCount] = useState(0)
  const [activeTab, setActiveTab] = useState('home')
  const [imageLoaded, setImageLoaded] = useState(false)

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
              <h2 className="main-title">🌙 初音ちゃんの夢日記 🌙</h2>
              <p className="subtitle">毎晩の素敵な夢の世界へ✨</p>
            </div>

            <div className="content">
              <p className="greeting">
                🌙 初音ちゃんの夢の世界へようこそ 🌙
              </p>
              <p className="message">
                ここは初音ちゃんが毎晩見る素敵な夢が詰まった特別な日記帳です。<br />
                キラキラした夢、ときめく冒険、温かい思い出…<br />
                初音ちゃんの夢物語を一緒に応援しましょう！
              </p>
            </div>

            <button
              className="love-button"
              onClick={() => setCount((count) => count + 1)}
            >
              <span className="button-icon">⭐</span>
              夢を応援した数
              <span className="button-count">{count}</span>
              <span className="button-icon">⭐</span>
            </button>

            <div className="stats-container">
              <div className="stat-card">
                <div className="stat-number">{count}</div>
                <div className="stat-label">応援数</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">🌈</div>
                <div className="stat-label">夢</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">💫</div>
                <div className="stat-label">希望</div>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'profile' && (
          <section id="profile-section" className="section-container">
            <div className="profile-container">
              <div className="profile-image-wrapper">
                {false && (
                  <>
                    <img 
                      src={hatsuneImage} 
                      alt="初音ちゃん" 
                      className="profile-image"
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageLoaded(false)}
                    />
                    <div className="image-glow"></div>
                  </>
                )}
                {!imageLoaded && (
                  <div className="profile-placeholder">
                    初音ちゃんの写真<br />
                    <span className="placeholder-emoji">💙</span>
                  </div>
                )}
              </div>

              <div className="profile-info">
                <h2 className="profile-name">初音ちゃん</h2>
                <p className="profile-title">🌙 夢日記の主人公 🌙</p>

                <div className="profile-details">
                  <div className="detail-item">
                    <span className="detail-icon">💭</span>
                    <div className="detail-content">
                      <p className="detail-label">最近の夢</p>
                      <p className="detail-value">キラキラした光の中を歌う</p>
                    </div>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">🌈</span>
                    <div className="detail-content">
                      <p className="detail-label">夢の色</p>
                      <p className="detail-value">青紫色の美しい世界</p>
                    </div>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">⭐</span>
                    <div className="detail-content">
                      <p className="detail-label">夢の想い</p>
                      <p className="detail-value">みんなに笑顔をもたらしたい</p>
                    </div>
                  </div>
                </div>

                <div className="profile-bio">
                  <p>
                    初音ちゃんの夢日記へようこそ。<br />
                    ここには毎晩、初音ちゃんが見た素敵な夢が記録されています。<br />
                    その夢の数々があなたの心を温かく照らしますように。
                  </p>
                </div>

                <button 
                  className="profile-btn"
                  onClick={() => setCount((count) => count + 1)}
                >
                  ⭐ 夢を応援する ({count})
                </button>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>🌙 初音ちゃんの夢日記へようこそ 🌙</p>
      </footer>
    </div>
  )
}

export default App
