import React, { useState } from 'react'
    import morningAdhkar from './data/morning.json'
    import eveningAdhkar from './data/evening.json'
    import './App.css'

    function App() {
      const [isMorning, setIsMorning] = useState(true)
      const currentAdhkar = isMorning ? morningAdhkar : eveningAdhkar

      return (
        <div className="container">
          <div className="header">
            <h1>أذكار {isMorning ? 'الصباح' : 'المساء'}</h1>
            <button 
              className="toggle-btn"
              onClick={() => setIsMorning(!isMorning)}
            >
              التبديل إلى أذكار {isMorning ? 'المساء' : 'الصباح'}
            </button>
          </div>

          <div className="adhkar-list">
            {currentAdhkar.map((dhikr, index) => (
              <DhikrCard key={index} dhikr={dhikr} />
            ))}
          </div>
        </div>
      )
    }

    function DhikrCard({ dhikr }) {
      const [count, setCount] = useState(0)
      const [isAnimating, setIsAnimating] = useState(false)

      const handleCount = () => {
        if (count < dhikr.repeat) {
          setCount((prev) => prev + 1)
          setIsAnimating(true)
          setTimeout(() => setIsAnimating(false), 300)
        }
      }

      return (
        <div className="dhikr-card">
          <div className="dhikr-text">
            <p>{dhikr.text}</p>
          </div>
          <div className="counter-container">
            <div className={`count-display ${isAnimating ? 'bounce' : ''}`}>
              {count} / {dhikr.repeat}
            </div>
            <button 
              className={`count-btn ${count >= dhikr.repeat ? 'completed' : ''}`}
              onClick={handleCount}
              disabled={count >= dhikr.repeat}
            >
              {count >= dhikr.repeat ? 'تم' : 'عداد'}
            </button>
          </div>
        </div>
      )
    }

    export default App
