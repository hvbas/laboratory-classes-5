const Product = require("../models/Product");
const Cart = require("../models/Cart");
const { MENU_LINKS } = require("../constants/navigation");
const { STATUS_CODE } = require("../constants/statusCode");
const cartController = require("./cartController");

exports.getProductsView = (request, response) => {
  const products = Product.getAll();

  response.render("products.ejs", {
    headTitle: "Shop - Products",
    path: "/",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products",
    products,
    cartCount: cartController.getProductsCount(),
  });
};

exports.getAddProductView = (request, response) => {
  response.render("add-product.ejs", {
    headTitle: "Shop - Add product",
    path: "/add",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products/add",
    cartCount: cartController.getProductsCount(),
  });
};

exports.getNewProductView = (request, response) => {
  const newestProduct = Product.getLast();

  response.render("new-product.ejs", {
    headTitle: "Shop - New product",
    path: "/new",
    activeLinkPath: "/products/new",
    menuLinks: MENU_LINKS,
    newestProduct,
    cartCount: cartController.getProductsCount(),
  });
};

exports.getProductView = (request, response) => {
  const name = request.params.name;
  const product = Product.findByName(name);

  response.render("product.ejs", {
    headTitle: "Shop - Product",
    path: `/products/${name}`,
    activeLinkPath: `/products/${name}`,
    menuLinks: MENU_LINKS,
    product,
    cartCount: cartController.getProductsCount(),
  });
};

exports.deleteProduct = (request, response) => {
  const name = request.params.name;
  Product.deleteByName(name);

  response.status(STATUS_CODE.OK).json({ success: true });
};
