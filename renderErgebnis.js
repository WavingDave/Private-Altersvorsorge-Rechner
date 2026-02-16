// rederErgebnis.js

import { formatEuro } from "./formatEuro.js";

export function renderErgebnis(dom, result) {
  if (result.error) {
    dom.error.textContent = result.error;
    return;
  }

  dom.ergebnis.innerHTML = `
    <p><strong>Sparjahre:</strong> ${result.sparJahre}</p>
    <p><strong>Eigenbeitrag:</strong> ${formatEuro(result.gesamtEigenanteil)}</p>
    <p><strong>Grundförderung:</strong> ${formatEuro(result.gesamtGrundZuschuss)}</p>
    <p><strong>Kinderförderung:</strong> ${formatEuro(result.gesamtKinderZuschuss)}</p>
    <p><strong>Gesamtförderung:</strong> ${formatEuro(result.gesamtFoerderung)}</p>
    <p><strong>Kapital ohne Rendite:</strong> ${formatEuro(result.kapitalOhneRendite)}</p>
    <p><strong>Kapital mit Rendite (7% p.a.):</strong> ${formatEuro(result.kapital)}</p>
  `;
}
