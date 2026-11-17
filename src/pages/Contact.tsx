import type { ReactNode } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import { contacts } from '../data';
import type { ContactName } from '../data';

const contactLogos: Record<ContactName, ReactNode> = {
  GitHub: <FaGithub className="contact-icon contact-icon-github" aria-hidden="true" />,
  LinkedIn: <FaLinkedin className="contact-icon contact-icon-linkedin" aria-hidden="true" />,
  WhatsApp: <FaWhatsapp className="contact-icon contact-icon-whatsapp" aria-hidden="true" />,
  'E-mail': <SiGmail className="contact-icon contact-icon-gmail" aria-hidden="true" />,
};

export default function Contacts() {
  return (
    <section id="contatos" className="contacts-section">
      <header className="contacts-intro">
        <h2>Contatos</h2>
        <p>Toda grande jornada começa com uma conexão. Envie sua mensagem e vamos iniciar uma nova missão!</p>
      </header>
      <div className="grid">
        {contacts.map((c) => (
          <a
            className="card contact"
            key={c.name}
            href={c.href}
            target={c.external ? "_blank" : undefined}
            rel={c.external ? "noopener noreferrer" : undefined}
          >
            <div className="contact-heading">
              {contactLogos[c.name]}
              <h3>{c.name}</h3>
            </div>
            <p className="mut">{c.description}</p>
            <span>{c.label}</span>
          </a>
        ))}
      </div>
    </section>
  )
}