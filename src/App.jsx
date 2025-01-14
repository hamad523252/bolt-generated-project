import React from 'react'
    import { Routes, Route, Link } from 'react-router-dom'
    import Morning from './pages/Morning'
    import Evening from './pages/Evening'
    import './App.css'

    function App() {
      return (
        <div className="container">
          <nav className="navigation">
            <Link to="/morning" className="nav-link">
              أذكار الصباح
            </Link>
            <Link to="/evening" className="nav-link">
              أذكار المساء
            </Link>
          </nav>

          <Routes>
            <Route path="/morning" element={<Morning />} />
            <Route path="/evening" element={<Evening />} />
            <Route path="*" element={<Morning />} />
          </Routes>
        </div>
      )
    }

    export default App
