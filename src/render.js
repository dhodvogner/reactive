import { bindEnvent } from "./bind.js";

/**
 * Renders the given template based on the provided context
 * @param {HTMLElement} root
 * @param {string} template
 * @param {any} context
 */
export const render = (root, template, context) => {
  root.innerHTML = template; // TODO: not re-render all components?

  bindEnvent(root, context);
};
