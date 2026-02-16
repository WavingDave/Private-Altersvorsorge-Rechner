// getKinderAlter.js

export function getKinderAlter(dom) {
  const inputs = dom.kinderAlterContainer.querySelectorAll(".kinderAlterInput");

  return Array.from(inputs).map((input) =>
    input.value === "" ? NaN : Number(input.value),
  );
}
