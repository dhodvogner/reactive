const watchers = [];

export const notify = state => {
  watchers.forEach(watch => {
    console.log(watch.state.id, state.id, watch.state.id === state.id);
    if (watch.state.id === state.id) {
      // TODO: I'm not sure about this...
      watch.fn(state);
    }
  });
};

export const watch = (state, fn) => {
  watchers.push({
    state,
    fn
  });
};
