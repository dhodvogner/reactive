import { reactive } from "./reactive.js";
import { watch, notify } from "./watch.js";
import { render } from "./render.js";

/**
 * Create an reactive component
 * @param {*} context
 */
export const component = context => {
  const element = document.createElement("div");
  element.id = context.name;
  element.context = context;

  context.state = reactive({
    // TODO: deep copy!
    ...context.state
  });

  watch(context.state, state => {
    render(element, context.template(state), context);
  });

  notify(context.state);

  document.body.appendChild(element);

  return element;
};
