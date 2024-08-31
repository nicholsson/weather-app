class DOMManipulator {
  #parent;
  constructor(parentElement) {
    this.#parent = document.querySelector(parentElement);
    if (!this.#parent) {
      throw new Error(`Error: ${parentElement} not found`);
    }
  }
  createElement(tag, id) {
    const element = document.createElement(tag);
    element.id = id;
  }
  append(element) {
    this.#parent.appendChild(element);
  }
}
