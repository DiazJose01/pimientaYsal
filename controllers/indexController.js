const products = require('../data/product');

module.exports = {
   index : (req, res, next) => {
       return  res.render('index', { 
          title: 'Home',
          products 
     });
      }
};