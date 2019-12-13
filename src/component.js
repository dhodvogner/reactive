import { reactive } from "./reactive.js";
import { watch, notify } from "./watch.js";
import { render } from "./render.js";

export const component = context => {
  const element = document.createElement("div");
  element.id = context.id;
  element.context = context;

  context.state = reactive({
    id: context.id,
    ...context.state
  });

  watch(context.state, state => {
    render(element, context.template(state), context);
  });

  notify(context.state);

  document.body.appendChild(element);

  return element;
};
