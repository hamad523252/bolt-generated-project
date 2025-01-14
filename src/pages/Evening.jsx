import React from 'react'
    import evening1 from '../data/evening1.json'
    import evening2 from '../data/evening2.json'
    import evening3 from '../data/evening3.json'
    import evening4 from '../data/evening4.json'
    import evening5 from '../data/evening5.json'
    import evening6 from '../data/evening6.json'
    import evening7 from '../data/evening7.json'
    import evening8 from '../data/evening8.json'
    import evening9 from '../data/evening9.json'
    import DhikrCard from '../components/DhikrCard'
    import '../App.css'

    function Evening() {
      const allEveningAdhkar = [
        ...evening1,
        ...evening2,
        ...evening3,
        ...evening4,
        ...evening5,
        ...evening6,
        ...evening7,
        ...evening8,
        ...evening9
      ]

      return (
        <div>
          <h1>أذكار المساء</h1>
          <div className="adhkar-list">
            {allEveningAdhkar.map((dhikr, index) => (
              <DhikrCard key={index} dhikr={dhikr} />
            ))}
          </div>
        </div>
      )
    }

    export default Evening
