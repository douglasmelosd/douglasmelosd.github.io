import { projects } from '../data';

export default function Projects() {
  return (
    <section id="projetos">
      <h2>Projetos</h2>
      <div className="grid">
        {projects.length > 0 ? (
          projects.map((p) => (
            <article className="card" key={p.mission}>
              <span className="rank" aria-label={`Rank ${p.rank}`}>{p.rank}</span>
              <h3>{p.mission}</h3>
              <p className="mut">{p.status} · {p.area}</p>
              <p>{p.description}</p>
              <div>
                {p.techs.map((t) => (
                  <span className="chip" key={t}>{t}</span>
                ))}
              </div>
              {p.repo && (
                <p>
                  <a href={p.repo} target="_blank" rel="noopener noreferrer">Repositório</a>
                </p>
              )}
            </article>
          ))
        ) : (
          <p className="mut">Em breve.</p>
        )}
      </div>
    </section>
  )
}