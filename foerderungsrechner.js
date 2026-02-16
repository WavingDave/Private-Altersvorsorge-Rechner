// foerderungsrechner.js

import { getInputValues } from "./getInputValues.js";
import { validateInputs } from "./validateInputs.js";
import { berechnungFoerderung } from "./berechnungFoerderung.js";
import { getKinderAlter } from "./getKinderAlter.js";
import { renderKinderInputs } from "./renderKinderInputs.js";
import { renderErgebnis } from "./renderErgebnis.js";

const dom = {
  alter: document.getElementById("alter"),
  sparrate: document.getElementById("sparrate"),
  startjahr: document.getElementById("startjahr"),
  kinder: document.getElementById("kinder"),
  error: document.getElementById("error"),
  ergebnis: document.getElementById("ergebnis"),
  kinderAlterContainer: document.getElementById("kinderAlterContainer"),
  berechnenBtn: document.getElementById("berechnenBtn"),
};

init();

function init() {
  dom.kinder.addEventListener("input", () => renderKinderInputs(dom));
  dom.berechnenBtn.addEventListener("click", berechnen);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") berechnen();
  });
}

function berechnen() {
  dom.error.style.display = "none";
  dom.ergebnis.style.display = "none";
  dom.error.textContent = "";
  dom.ergebnis.innerHTML = "";

  const inputs = getInputValues(dom);
  const kinderAlter = getKinderAlter(dom);

  const error = validateInputs({ ...inputs, kinderAlter });
  if (error) {
    dom.error.textContent = error;
    dom.error.style.display = "block"; // Sichtbar machen
    return;
  }

  const result = berechnungFoerderung({
    ...inputs,
    kinderAlter,
  });

  if (result.error) {
    dom.error.textContent = result.error;
    dom.error.style.display = "block"; // Sichtbar machen
    return;
  }

  renderErgebnis(dom, result);
  dom.ergebnis.style.display = "block"; // Ergebnis sichtbar
}
