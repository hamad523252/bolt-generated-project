import React from 'react'
    import morning1 from '../data/morning1.json'
    import morning2 from '../data/morning2.json'
    import morning3 from '../data/morning3.json'
    import morning4 from '../data/morning4.json'
    import morning5 from '../data/morning5.json'
    import morning6 from '../data/morning6.json'
    import DhikrCard from '../components/DhikrCard'
    import '../App.css'

    function Morning() {
      const allMorningAdhkar = [
        ...morning1,
        ...morning2,
        ...morning3,
        ...morning4,
        ...morning5,
        ...morning6
      ]

      return (
        <div>
          <h1>أذكار الصباح</h1>
          <div className="adhkar-list">
            {allMorningAdhkar.map((dhikr, index) => (
              <DhikrCard key={index} dhikr={dhikr} />
            ))}
          </div>
        </div>
      )
    }

    export default Morning
