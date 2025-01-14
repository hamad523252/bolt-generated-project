import React, { useState } from 'react'
    import eveningAdhkar from '../data/evening.json'
    import DhikrCard from '../components/DhikrCard'
    import '../App.css'

    function Evening() {
      return (
        <div>
          <h1>أذكار المساء</h1>
          <div className="adhkar-list">
            {eveningAdhkar.map((dhikr, index) => (
              <DhikrCard key={index} dhikr={dhikr} />
            ))}
          </div>
        </div>
      )
    }

    export default Evening
