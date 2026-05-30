import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import HowWorks from './pages/HowWorks'
import TurbinesTypes from './pages/TurbinesTypes'
import Benefits from './pages/Benefits'
import Challenges from './pages/Challenges'

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/how-works"
        element={<HowWorks />}
      />
      <Route
        path="/types"
        element={<TurbinesTypes />}
      />
      <Route
        path="/benefits"
        element={<Benefits />}
      />
      <Route
        path="/challenges"
        element={<Challenges />}
      />
    </Routes>
  )
}
