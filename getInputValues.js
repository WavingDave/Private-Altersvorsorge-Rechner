// getInputValues.js

export function getInputValues(dom) {
  return {
    alter: Number(dom.alter.value),
    sparrate: Number(dom.sparrate.value),
    startJahr: Number(dom.startjahr.value),
    kinder: Number(dom.kinder.value),
  };
}
