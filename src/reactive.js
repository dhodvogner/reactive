import { notify } from "./watch.js";

const proxyHandlers = {
  get: (state, prop) => {
    console.log(`[State] get: ${prop}`, state);
    // TODO: handle neasted objects
    // if (typeof state[prop] === "object" && state[prop] !== null)
    //   return new Proxy(state[prop], proxyHandlers);
    // else
    return state[prop];
  },
  set: (state, prop, value) => {
    console.log(`[State] set: ${prop} => ${value}`, state);
    state[prop] = value;
    notify(state);
    return true;
  }
};

export const reactive = state => {
  return new Proxy(state, proxyHandlers);
};
