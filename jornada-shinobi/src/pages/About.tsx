import { parallels } from "../data";

export default function About() {
  return (
    <div>
        <section id="sobre">
            <h2>Sobre mim:</h2>
            <div className="grid">
                {parallels.map((p) => (
                    <article className="card" key={p.theme}>
                        <h3>{p.theme}</h3>
                        <p className="mut">{p.naruto}</p>
                        <p className="mut">{p.douglas}</p>
                    </article>
                ))}
            </div>
        </section>
    </div>
  )
}
