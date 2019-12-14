const watchers = new Map();

/**
 * Notify watchers on state.__id
 * @param {*} state
 */
export const notify = state => {
  console.log("[Notify]", state.__id);
  if (watchers.has(state.__id)) {
    const fns = watchers.get(state.__id);
    fns.forEach(fn => {
      fn(state);
    });
  }
};

/**
 * Watch state for changes
 * @param {*} state
 * @param {*} fn
 */
export const watch = (state, fn) => {
  if (watchers.has(state.__id)) {
    watchers.set(state.__id, [...watchers.get(state.__id), fn]);
  } else {
    watchers.set(state.__id, [fn]);
  }
};
