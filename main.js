import "./style.css";
import store from "./data";
import { decrement, increment } from "./data/counter.js";
import { addTodo } from "./data/todo.js";
import { voegKleur, veranderKleur } from "./data/kleuren.js";

function render() {
  document.querySelector("#app").innerHTML = `<h1>${
    store.getState().counterState.counter
  }</h1>`;

  document.querySelector("ul.todos").innerHTML = store
    .getState()
    .todoState.map((todo) => `<li>${todo.todo}</li>`)
    .join("");

  document.querySelector("ul#kleuren").innerHTML = store
    .getState()
    .kleurState.map((kleur) => {
      // console.log(kleur.id);
      // console.log(kleur.hexcode);
      // console.log(kleur.kleur);
      return `<li>
      <span id="kpreview" style="background-color: ${kleur.hexcode}">&nbsp;</span>
      <p style="color: ${kleur.hexcode}" contentEditable>${kleur.kleur} </p>
      <input value="${kleur.hexcode}" data-id="${kleur.id}" type="color" name="kleur" class="hexcode" />
      </li>`;
    })
    .join("");
}

render();
store.subscribe(render);
// store.subscribe((render) => {
//   console.log("Store changed!", store.getState());
// });

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

////////////UI LOGICA VOOR KLEUREN:
/***
 * This example demonstrates how to dynamically update a colorpicker value with oninput.
 */
document.querySelector("ul#kleuren").addEventListener("change", (e) => {
  if (e.target.classList.contains("kpicker")) {
    store.dispatch(
      veranderKleur({ id: e.target.dataset.id, hexcode: e.target.value })
    );
  }
});

const kform = document.querySelector("#kform");
kform.onsubmit = function (e) {
  e.preventDefault();
  store.dispatch(
    voegKleur({
      kleur: kform.elements["kleur"].value,
      hexcode: kform.elements["hexcode"].value,
    })
  );
  kform.reset();
};

// console.log(store.kleurState());
