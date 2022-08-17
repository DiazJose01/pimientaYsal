const products = require('../data/product');

module.exports = {
    detail : (req,res) => {
     
        let product = products.find(product => product.id === +req.params.id)
       

        return res.render('detalleMenu', {
            product
        })
    }
}