import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ComoFunciona from './pages/ComoFunciona'
import TiposTurbinas from './pages/TiposTurbinas'
import Vantagens from './pages/Vantagens'
import Desafios from './pages/Desafios'

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/como-funciona"
        element={<ComoFunciona />}
      />
      <Route
        path="/tipos"
        element={<TiposTurbinas />}
      />
      <Route
        path="/vantagens"
        element={<Vantagens />}
      />
      <Route
        path="/desafios"
        element={<Desafios />}
      />
    </Routes>
  )
}
