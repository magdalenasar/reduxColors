import "./style.css";
import store from "./data";
import { decrement, increment } from "./data/counter.js";
import { addTodo } from "./data/todo.js";
import { voegKleur } from "./data/kleuren.js";

function render() {
  document.querySelector("#app").innerHTML = `<h1>${
    store.getState().counterState.counter
  }</h1>`;

  document.querySelector("ul.todos").innerHTML = store
    .getState()
    .todoState.map((todo) => `<li>${todo.todo}</li>`)
    .join("");

  document.querySelector("ul.kleuren").innerHTML = store
    .getState()
    .kleurState.map((kleur) => `<li>${kleur.hexcode} ${kleur.kleur}</li>`)
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

const form = document.querySelector("form.todos");
form.onsubmit = function (e) {
  e.preventDefault();
  store.dispatch(addTodo(form.elements["veld"].value));
  form.reset();
};

//  colors:

const kleurForm = document.querySelector("form.kleuren");
kleurForm.onsubmit = function (e) {
  e.preventDefault();
  store.dispatch(voegKleur(kleurForm.elements["kleur-naam"].value));
  kleurForm.reset();
};
document.querySelector("#voegKleur").onclick = function () {};
