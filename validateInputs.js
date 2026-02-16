// validateInputs.js

export function validateInputs({
  alter,
  sparrate,
  startJahr,
  kinder,
  kinderAlter,
}) {
  if (!alter || !sparrate) {
    return "Bitte alle Pflichtfelder korrekt ausfüllen.";
  }

  if (alter < 0 || alter >= 67) {
    return "Alter muss zwischen 0 und 66 liegen.";
  }

  if (sparrate <= 0 || sparrate > 570) {
    return "Sparrate muss zwischen 1 € und 570 € liegen.";
  }

  if (startJahr <= 2026 || startJahr > 2100) {
    return "Startjahr muss zwischen 2027 und 2100 liegen.";
  }

  if (kinder > 0) {
    if (kinderAlter.length !== kinder) {
      return "Bitte für jedes Kind ein Alter angeben.";
    }

    if (kinderAlter.some((a) => isNaN(a) || a < 0 || a > 17)) {
      return "Kinderalter muss zwischen 0 und 17 liegen.";
    }
  }

  return null;
}
