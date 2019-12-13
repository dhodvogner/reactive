/**
 * Renders the given template based on the provided context
 * @param {HTMLElement} root
 * @param {string} template
 * @param {any} context
 */
export const render = (root, template, context) => {
  root.innerHTML = template; // TODO: not re-render all components?

  root.childNodes.forEach(node => {
    if (node.attributes) {
      for (let i = 0; i < node.attributes.length; i++) {
        const attribute = node.attributes.item(i);
        if (attribute.name.startsWith("@")) {
          const event = attribute.name.substring(1, attribute.name.length);
          node.addEventListener(event, context[attribute.value].bind(context));
        }
      }
    }
  });
};
