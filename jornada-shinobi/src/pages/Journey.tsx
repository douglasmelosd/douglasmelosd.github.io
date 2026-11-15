import { Link } from "react-router-dom";
import { careerMissions } from "../data";

export default function Journey() {
  return (
    <section className="journey-section">
      <header className="journey-heading">
        <p className="journey-kicker">ARQUIVO DE MISSÕES</p>
        <h2>Minha trajetória ninja</h2>
        <p>
          Da formação em Computação às missões de suporte, desenvolvimento,
          automação e Inteligência Artificial.
        </p>
      </header>

      <ol className="mission-grid">
        {careerMissions.map((mission, index) => (
          <li key={mission.id}>
            <article className="card mission-card">
              <div className="mission-card-header">
                <span className="mission-rank">Missão {mission.rank}</span>
                <span className="mission-number" aria-label={`Etapa ${index + 1}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3>{mission.title}</h3>
              <p className="mut mission-focus">{mission.focus}</p>
              <p>{mission.description}</p>
              <ul className="mission-highlights">
                {mission.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              {mission.tools.length > 0 && (
                <div className="mission-tools" aria-label="Tecnologias e ferramentas">
                  {mission.tools.map((tool) => (
                    <span className="chip" key={tool}>{tool}</span>
                  ))}
                </div>
              )}
            </article>
          </li>
        ))}
      </ol>

      <p className="journey-note">
        Os ranks são uma referência narrativa ao universo de Naruto, não uma avaliação de senioridade.
      </p>
      <Link className="journey-home-link" to="/">← Voltar ao início</Link>
    </section>
  );
}
