import "./style.css";
import store from "./data";
import { decrement, increment } from "./data/counter.js";
import { addTodo } from "./data/todo.js";

function render() {
  document.querySelector("#app").innerHTML = `<h1>${
    store.getState().counterState.counter
  }</h1>`;

  document.querySelector("#ul").innerHTML = store
    .getState()
    .todoState.map((todo) => `<li>${todo.todo}</li>`)
    .join("");
}

render();

store.subscribe(render);

document.getElementById("dec").onclick = function () {
  store.dispatch(decrement());
};

document.getElementById("inc").onclick = function () {
  store.dispatch(increment());
};

const form = document.querySelector("form");
form.onsubmit = function (e) {
  e.preventDefault();
  store.dispatch(addTodo(form.elements["veld"].value));
  form.reset();
};
