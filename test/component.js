import { component } from "../src/index.js";

component({
  id: "counter",
  state: {
    count: 0
  },
  template(state) {
    return `<button @click="increment" count="${state.count}">${state.count}</button>`;
  },
  increment() {
    this.state.count++;
  }
});

component({
  id: "counter2",
  state: {
    count: 0
  },
  template(state) {
    return `
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <h1>${state.count}</h1>
      `;
  },
  increment() {
    this.state.count++;
  },
  decrement() {
    this.state.count--;
  }
});
