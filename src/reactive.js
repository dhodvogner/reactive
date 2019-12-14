import { notify } from "./watch.js";
import { uuidv4 } from "./utils.js";

const ENABLE_LOGS_REACTIVE = false;

const proxyHandlers = {
  get: (state, prop) => {
    if (ENABLE_LOGS_REACTIVE) console.log(`[State] get: ${prop}`, state);

    return state[prop];
  },
  set: (state, prop, value) => {
    if (ENABLE_LOGS_REACTIVE)
      console.log(`[State] set: ${prop} => ${value}`, state);

    if (prop === "__id") return false;

    state[prop] = value;
    notify(state);
    return true;
  }
};

/**
 * Create a rective state
 * @param {*} state
 */
export const reactive = state => {
  state.__id = uuidv4();
  return new Proxy(state, proxyHandlers);
};
