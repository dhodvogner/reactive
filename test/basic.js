import { reactive, watch, render, notify } from "../src/index.js";

const state = reactive({
  count: 0
});

const context = {
  increment() {
    state.count++;
  }
};

watch(state, newState => {
  render(
    document.getElementById("basic"),
    `<button @click="increment" count="${newState.count}">${newState.count}</button>`,
    context
  );
});

notify(state);
