import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import FPage from './pages/FPage'  
import SPage from './pages/SPage'
import TPage from './pages/TPage'
import FourthPage from './pages/FourthPage'
import { Link } from 'react-router-dom'
import "./App.css"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first" element={<FPage />} />
        <Route path="/second" element={<SPage />} />
        <Route path="/third" element={<TPage />} />
        <Route path="/fourth" element={<FourthPage />} />
      </Routes>
      <div className="pagination mt-10">
        <Link to="/">Home</Link>
        <Link to="/first">1</Link>
        <Link to="/second">2</Link>
        <Link to="/third">3</Link>
        <Link to="/fourth">4</Link>
      </div>
    </div>
  )
}

export default App
