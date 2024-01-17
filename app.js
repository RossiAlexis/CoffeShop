import Router from "./services/Router.js";
import Store from "./services/Store.js";

window.app = {};

app.store = Store;

window.addEventListener("DOMContentLoaded", () => {
  Router.init();
});
