const ProductModel=require('../models/Product');
module.exports.findAllProducts=async () => {
    try{
        const products=await ProductModel.find();
        return products;
    } catch(err){
        throw new Error('Could not retreive products');
    }
    
};