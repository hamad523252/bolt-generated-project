import React, { useState, useEffect } from 'react'
    import { Routes, Route, Link, useLocation } from 'react-router-dom'
    import Morning from './pages/Morning'
    import Evening from './pages/Evening'
    import { FaMoon, FaSun, FaArrowUp } from 'react-icons/fa'
    import './App.css'

    function App() {
      const [darkMode, setDarkMode] = useState(false)
      const [showScroll, setShowScroll] = useState(false)

      const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        document.body.classList.toggle('dark-mode')
      }

      const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
          setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
          setShowScroll(false)
        }
      }

      const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }

      useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)
        return () => window.removeEventListener('scroll', checkScrollTop)
      }, [showScroll])

      return (
        <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
          <button 
            className="floating-button"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {showScroll && (
            <button 
              className="back-to-top"
              onClick={scrollTop}
              aria-label="Back to top"
            >
              <FaArrowUp />
            </button>
          )}

          <NavBar />

          <Routes>
            <Route path="/morning" element={<Morning />} />
            <Route path="/evening" element={<Evening />} />
            <Route path="*" element={<Morning />} />
          </Routes>
        </div>
      )
    }

    function NavBar() {
      const location = useLocation()

      return (
        <nav className="navigation">
          <Link 
            to="/morning" 
            className={`nav-link ${location.pathname === '/morning' ? 'active' : ''}`}
          >
            أذكار الصباح
          </Link>
          <Link 
            to="/evening" 
            className={`nav-link ${location.pathname === '/evening' ? 'active' : ''}`}
          >
            أذكار المساء
          </Link>
        </nav>
      )
    }

    export default App
