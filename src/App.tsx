import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
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
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />
      <Route
        path="/como-funciona"
        element={
          <>
            <Navbar />
            <ComoFunciona />
          </>
        }
      />
      <Route
        path="/tipos"
        element={
          <>
            <Navbar />
            <TiposTurbinas />
          </>
        }
      />
      <Route
        path="/vantagens"
        element={
          <>
            <Navbar />
            <Vantagens />
          </>
        }
      />
      <Route
        path="/desafios"
        element={
          <>
            <Navbar />
            <Desafios />
          </>
        }
      />
    </Routes>
  )
}
