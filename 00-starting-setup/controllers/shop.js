const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
  .then(([rows,fieldData])=>{
    res.render('shop/index', {
      prods: rows,
      pageTitle: 'Shop',
      path: '/'
  });
  })
  .catch(err=> console.log(err));
};

exports.getProduct = (req,res,next)=>{
  const productId = req.params.productId;
  Product.findByID(productId)
  .then(([product])=>{
    res.render('shop/product-detail',{
      product: product[0],
      pageTitle: product.title,
      path: '/products'
    })
  })
  .catch(err =>{console.log(err)});
};
exports.getIndex = (req, res, next) => {
  Product.fetchAll()
  .then(([rows,fieldData])=>{
    res.render('shop/index', {
      prods: rows,
      pageTitle: 'Shop',
      path: '/'
  });
  })
  .catch(err=> console.log(err));
}

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
