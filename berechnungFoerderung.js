// berechnungFoerderung.js

export function berechnungFoerderung({
  alter,
  sparrate,
  startJahr,
  kinderAlter,
}) {
  const renteneintritt = 67;
  const rendite = 0.07;

  const sparJahre = renteneintritt - alter;
  if (sparJahre <= 0) {
    return { error: "Ansparphase ist nicht möglich." };
  }

  let kapital = 0;
  let kapitalOhneRendite = 0;
  let gesamtEigenanteil = 0;
  let gesamtGrundZuschuss = 0;
  let gesamtKinderZuschuss = 0;

  const max1 = 1200;
  const max2 = 1800;

  for (let i = 0; i < sparJahre; i++) {
    const jahr = startJahr + i;
    const jahresSparbetrag = sparrate * 12;

    gesamtEigenanteil += jahresSparbetrag;

    const grundsatz = jahr >= 2029 ? 0.35 : 0.3;

    let grund = 0;

    if (jahresSparbetrag <= max1) {
      grund = jahresSparbetrag * grundsatz;
    } else {
      grund = max1 * grundsatz;
      const rest = Math.min(jahresSparbetrag - max1, max2 - max1);
      grund += rest * 0.2;
    }

    const kinderUnter18 = kinderAlter.filter((a) => a + i < 18).length;

    const kinderFoerderung =
      Math.min(jahresSparbetrag, max1) * kinderUnter18 * 0.25;

    gesamtGrundZuschuss += grund;
    gesamtKinderZuschuss += kinderFoerderung;

    const jahresGesamt = jahresSparbetrag + grund + kinderFoerderung;

    kapitalOhneRendite += jahresGesamt;
    kapital = kapital * (1 + rendite) + jahresGesamt;
  }

  return {
    sparJahre,
    gesamtEigenanteil,
    gesamtGrundZuschuss,
    gesamtKinderZuschuss,
    gesamtFoerderung: gesamtGrundZuschuss + gesamtKinderZuschuss,
    kapitalOhneRendite,
    kapital,
  };
}
