
import { useState } from "react";
import { professionalFacets } from "../data";

export default function Facets() {
  const [activeFacetId, setActiveFacetId] = useState(professionalFacets[0].id);
  const activeFacet = professionalFacets.find((facet) => facet.id === activeFacetId);

  return (
    <section className="facets-section">
      <header className="facets-heading">
        <p className="facets-kicker">CONTRATOS DE HENGE</p>
        <h2>Facetas além da TI</h2>
        <p>
          Diferentes habilidades, diferentes caminhos, uma única identidade.
          Cada experiência representa um contrato firmado durante minha jornada.
        </p>
      </header>

      <div className="facet-tabs" aria-label="Selecione uma faceta">
        {professionalFacets.map((facet, index) => (
          <button
            aria-pressed={activeFacetId === facet.id}
            className={`facet-tab${activeFacetId === facet.id ? " active" : ""}`}
            key={facet.id}
            onClick={() => setActiveFacetId(facet.id)}
            type="button"
          >
            Contrato {String(index + 1).padStart(2, "0")}: {facet.role}
          </button>
        ))}
      </div>

      {activeFacet ? (
        <article className="henge-card facet-panel" aria-live="polite">
          <p className="henge-label">Henge: {activeFacet.role}</p>
          <h3>{activeFacet.title}</h3>
          <p><strong>Histórico.</strong> {activeFacet.history}</p>
          <p><strong>Habilidades e técnicas.</strong> {activeFacet.skills}</p>
          <p><strong>Conquistas.</strong> {activeFacet.achievements}</p>
        </article>
      ) : (
        <p role="alert">Não foi possível carregar esta faceta.</p>
      )}
    </section>
  );
}
