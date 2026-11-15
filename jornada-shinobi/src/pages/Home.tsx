import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
        <nav>
            <Link to="/about">Sobre mim</Link>
            <Link to="/skills">Habilidades</Link>
            <Link to="/facets">Facetas</Link>
            <Link to="/projects">Projetos</Link>
            <Link to="/contact">Contato</Link>
        </nav>
    </div>
  )
}
