/**
 * Vue like event binding: @{{event-name}}
 * @param {HTMLElement} root
 * @param {any} context
 */
export const bindEnvent = (root, context) => {
  // TODO: Think about how can this improved in performance!
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

    if (node.hasChildNodes) {
      bindEnvent(node, context);
    }
  });
};
