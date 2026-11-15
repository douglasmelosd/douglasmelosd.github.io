import { contacts } from '../data';

export default function Contacts() {
  return (
    <section id="contatos">
      <h2>Contatos</h2>
      <p className="mut">Toda grande jornada começa com uma conexão. Envie sua mensagem e vamos iniciar uma nova missão!</p>
      <div className="grid">
        {contacts.map((c) => (
          <a
            className="card contact"
            key={c.name}
            href={c.href}
            target={c.external ? "_blank" : undefined}
            rel={c.external ? "noopener noreferrer" : undefined}
          >
            <h3>{c.name}</h3>
            <p className="mut">{c.description}</p>
            <span>{c.label}</span>
          </a>
        ))}
      </div>
    </section>
  )
}