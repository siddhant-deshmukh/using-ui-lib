import {insertCounterToElment} from "ui-lib/counter";
import { classModule, h, init } from "snabbdom";


const patch = init([
  classModule
])

window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("app");
  
  if (container) {
    // vnode = patch(container, view(data));
    // render();
    patch(container, h("div.main-container", [
      h("div#counter01"),
      h("div#counter02"),
      h("div#counter03"),
    ]))
    insertCounterToElment("counter01", 1)
    insertCounterToElment("counter02", 12)
    insertCounterToElment("counter03", 41)
  }
});