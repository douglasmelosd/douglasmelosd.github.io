import { NavLink, Routes, Route } from 'react-router-dom';
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

  return (
    <>
      <nav className="navbar" aria-label="Navegação principal">
        <ul className="nav-links">
          {navigationLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                end={to === '/'}
                to={to}
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
    </>
  )
}

export default App
