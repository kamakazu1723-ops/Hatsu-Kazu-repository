import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="title-section">
          <h1 className="main-title">♪ 初音ちゃん ♪</h1>
          <p className="subtitle">可愛さは無限大💙</p>
        </div>
        <div className="content">
          <p className="greeting">
            ようこそ！初音ちゃんの世界へ✨
          </p>
          <p className="message">
            ここは初音ちゃんへの愛と応援で満ちた場所です。
            一緒に楽しい時間を過ごしましょう！
          </p>
        </div>
        <button
          className="love-button"
          onClick={() => setCount((count) => count + 1)}
        >
          💙 初音ちゃんへの愛 {count} 💙
        </button>
      </section>

      </>
  )
}

export default App
