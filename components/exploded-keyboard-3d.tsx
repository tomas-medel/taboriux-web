import type { CSSProperties } from "react";

const rows = [14, 13, 12, 11] as const;

export function ExplodedKeyboard3D() {
  return (
    <div className="kb-stage">
      <input id="kb-open-toggle" type="checkbox" className="kb-toggle" />
      <label
        htmlFor="kb-open-toggle"
        className="kb-hit"
        aria-label="Vista 3D del teclado. Hover o clic para mostrar capas internas."
      />
      <div className="kb-glow kb-glow-a" />
      <div className="kb-glow kb-glow-b" />

      <div className="kb-object">
        <div className="kb-layer kb-chassis" />
        <div className="kb-layer kb-top-shell" />
        <div className="kb-layer kb-front-lip" />

        <div className="kb-layer kb-keycaps">
          <div className="kb-key-grid">
            {rows.map((count, row) => (
              <div key={row} className="kb-row">
                {Array.from({ length: count }).map((_, col) => (
                <span
                  key={`${row}-${col}`}
                  className="kb-key"
                  style={
                    {
                      "--kx": `${col - count / 2}`,
                      "--ky": `${row - rows.length / 2}`,
                      "--kindex": `${row * 20 + col}`
                    } as CSSProperties
                  }
                />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="kb-layer kb-switches" />
        <div className="kb-layer kb-pcb">
          <div className="kb-trace kb-trace-a" />
          <div className="kb-trace kb-trace-b" />
          <div className="kb-trace kb-trace-c" />
        </div>
        <div className="kb-layer kb-base" />
      </div>

    </div>
  );
}
