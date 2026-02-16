// renderKinderInputs.js

export function renderKinderInputs(dom) {
  const kinder = Number(dom.kinder.value);
  dom.kinderAlterContainer.innerHTML = "";

  if (kinder < 1) return;

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < kinder; i++) {
    const wrapper = document.createElement("div");
    wrapper.className = "kinderInputWrapper";

    wrapper.innerHTML = `
      <label for="kind-${i}">Kind ${i + 1}</label>
      <input id="kind-${i}" type="number" min="0" max="17" class="kinderAlterInput">
    `;

    fragment.appendChild(wrapper);
  }

  dom.kinderAlterContainer.appendChild(fragment);
}
