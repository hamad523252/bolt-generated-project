import React, { useState } from 'react'

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

    export default DhikrCard
