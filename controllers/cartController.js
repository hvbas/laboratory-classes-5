const Product = require("../models/Product");
const Cart = require("../models/Cart");
const { STATUS_CODE } = require("../constants/statusCode");

exports.addProductToCart = (request, response) => {
  try {
    // Önce ürünü ekle
    Product.add(request.body);
    // Sonra sepete ekle
    const productName = request.body.name;
    Cart.add(productName);
    response.status(STATUS_CODE.FOUND).redirect("/products/new");
  } catch (error) {
    console.error(error);
    response.status(400).send(error.message);
  }
};

exports.getProductsCount = () => {
  return Cart.getProductsQuantity();
};
