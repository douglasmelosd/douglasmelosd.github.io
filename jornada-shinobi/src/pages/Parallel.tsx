import { useState } from "react";
import { parallels } from "../data";
import ParallelCard from "./ParallelCard";

export default function Parallel() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const selectedParallel = parallels.find((parallel) => parallel.theme === selectedTheme);

  return (
    <div>
        <section id="paralelo">
            <h2>Comparativo:</h2>
            <div className="grid parallel-grid">
                {parallels.map((p) => (
                    <ParallelCard
                      parallel={p}
                      key={p.theme}
                      visible={selectedTheme === p.theme}
                      onToggle={() => setSelectedTheme((current) => current === p.theme ? null : p.theme)}
                    />
                ))}
            </div>
            {selectedParallel && (
              <article className="card parallel-comparison" id="parallel-comparison" aria-live="polite">
                <div className="parallel-comparison-copy">
                  <p className="mut"><span className="who">Naruto</span>{selectedParallel.naruto}</p>
                  <p className="mut"><span className="who">Douglas</span>{selectedParallel.douglas}</p>
                </div>
                {selectedParallel.image && (
                  <img
                    className="card_img"
                    src={selectedParallel.image}
                    alt={`Ilustração: ${selectedParallel.theme}`}
                  />
                )}
              </article>
            )}
        </section>
    </div>
  )
}
