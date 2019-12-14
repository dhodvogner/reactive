import { component } from "../src/index.js";

component({
  name: "counter",
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
  name: "counter2",
  state: {
    count: 0
  },
  template(state) {
    return `
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <h3>${state.count}</h3>
      `;
  },
  increment() {
    this.state.count++;
  },
  decrement() {
    this.state.count--;
  }
});

component({
  name: "counter3",
  state: {
    count: 0
  },
  template(state) {
    return `
    <div class="buttons">
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
    <div class="number">
      <h1>${state.count}</h1>
    </div>
    `;
  },
  increment() {
    this.state.count++;
  },
  decrement() {
    this.state.count--;
  }
});
