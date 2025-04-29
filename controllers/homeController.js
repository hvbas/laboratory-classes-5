const { MENU_LINKS } = require("../constants/navigation");
const cartController = require("./cartController");

exports.getHomeView = (request, response) => {
  response.render("home.ejs", {
    headTitle: "Shop - Home",
    path: "/",
    activeLinkPath: "/",
    menuLinks: MENU_LINKS,
    cartCount: cartController.getProductsCount(),
  });
};
