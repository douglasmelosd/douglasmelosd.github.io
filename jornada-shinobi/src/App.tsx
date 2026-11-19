import { useState } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { FaBars, FaXmark } from 'react-icons/fa6';
import './App.css'
import Home from './pages/Home';
import Parallel from './pages/Parallel';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Facets from './pages/Facets';
import About from './pages/About';
import Journey from './pages/Journey';

const navigationLinks = [
  { to: '/', label: 'Início' },
  { to: '/about', label: 'Sobre mim' },
  { to: '/journey', label: 'Trajetória' },
  { to: '/parallel', label: 'Paralelo' },
  { to: '/skills', label: 'Habilidades' },
  { to: '/facets', label: 'Facetas' },
  { to: '/projects', label: 'Projetos' },
  { to: '/contact', label: 'Contato' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar" aria-label="Navegação principal" translate="no">
        <button
          className="navbar-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Fechar menu principal' : 'Abrir menu principal'}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen
            ? <FaXmark aria-hidden="true" />
            : <FaBars aria-hidden="true" />}
        </button>
        <ul id="primary-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          {navigationLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                end={to === '/'}
                to={to}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/parallel" element={<Parallel />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/facets" element={<Facets />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Douglas Melo Silva · Jornada Shinobi</p>
      </footer>
    </>
  )
}

export default App
