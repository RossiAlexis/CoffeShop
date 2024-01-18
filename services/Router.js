const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        const url = event.target.getAttribute("href");
        Router.go(url);
      });
    });

    window.addEventListener("popstate", (event) => {
      Router.go(event.state.route, false);
    });

    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log(`going to ${route}`);

    if (addToHistory) {
      history.pushState({ route }, null, route);
    }

    let pageElement = null;
    switch (route) {
      case "/":
        pageElement = document.createElement("menu-page");
        pageElement.textContent = "Main Menu";
        break;
      case "/order":
        pageElement = document.createElement("order-page");
        break;
      default:
        if (route.startsWith("/product-")) {
          pageElement = document.createElement("details-page");
          const paramID = route.substring(route.lastIndexOf("-") + 1);
          pageElement.dataset.id = paramID;
        }
    }
    if (pageElement) {
      const main = document.querySelector("main");
      main.children[0]?.remove();
      main.appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};

export default Router;
