import type { Parallel } from "../data";

export default function ParallelCard({
    parallel,
    visible,
    onToggle,
}: {
    parallel: Parallel,
    visible: boolean,
    onToggle: () => void,
}) {
    return (
        <article className="card parallel-card">
            <h3>{parallel.theme}</h3>
            <button
                className="parallel-toggle"
                type="button"
                aria-expanded={visible}
                aria-controls={visible ? "parallel-comparison" : undefined}
                onClick={onToggle}
            >
                {visible ? "Ocultar" : "Ver comparação"}
            </button>
        </article>
    );
}