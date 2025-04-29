const { LOGOUT_LINKS } = require("../constants/navigation");
const logger = require("../utils/logger");
const cartController = require("./cartController");

exports.getLogoutView = (request, response) => {
  response.render("logout.ejs", {
    headTitle: "Shop - Logout",
    path: "/logout",
    activeLinkPath: "/logout",
    menuLinks: LOGOUT_LINKS,
    cartCount: cartController.getProductsCount(),
  });
};

exports.killApplication = (request, response) => {
  logger.getProcessLog();
  process.exit();
};
