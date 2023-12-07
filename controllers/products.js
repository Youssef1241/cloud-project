const productsService=require('../services/products');
module.exports.getProducts=async (req,res)=>{
    try{
        const products=await productsService.findAllProducts();
        res.send({ products });
    } catch(err){
        res.status(500);
        res.send({
            error:err
        });
    }
};