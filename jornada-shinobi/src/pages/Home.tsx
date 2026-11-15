export default function Home() {
  return (
    <div>
        <section className="home-section">
          <h2 className="home-title">Quem sou eu?</h2>
          <div className="home-layout">
            <div className="home-intro">
              <article className="home-quote">
                <blockquote>“Eu não me importo em ficar como Genin para o resto da minha vida!”</blockquote>
                <p>Não se trata de permanecer iniciante. Trata-se de nunca perder a vontade de aprender.</p>
              </article>

              <article className="home-quote">
                <blockquote>“Desista de tentar me fazer desistir!”</blockquote>
                <p>Você ganhou um destino. Mas com ele, também ganhou a escolha de mudá-lo se ele não te agrada.</p>
              </article>

              <article className="home-quote">
                <blockquote>“Não existem atalhos para se tornar Hokage.”</blockquote>
                <p>
                  O processo é como a curva de aprendizado de um algoritmo de Inteligência Artificial:
                  é longo, com tentativa, erro, etapas e ajustes. Sem qualidade, cortar caminho pode
                  fazer você alucinar e se perder.
                </p>
              </article>
            </div>

            <aside className="profile-infobox" aria-labelledby="profile-title">
              <h3 id="profile-title">Douglas Melo</h3>
              <figure>
                <img
                  src="/assets/myself.png"
                  alt="Retrato de Douglas Melo Silva"
                />
                <figcaption>Douglas Melo Silva</figcaption>
              </figure>
              <dl>
                <div>
                  <dt>Nome completo</dt>
                  <dd>Douglas Melo Silva</dd>
                </div>
                <div>
                  <dt>Nascimento</dt>
                  <dd>6 de setembro de 1997, Rio de Janeiro, RJ</dd>
                </div>
                <div>
                  <dt>País</dt>
                  <dd>Brasil</dd>
                </div>
                <div>
                  <dt>Ocupação</dt>
                  <dd>Auxiliar de Tecnologia da Informação na G&amp;P Tecnologia</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>
    </div>
  )
}
