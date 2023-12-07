const express=require('express');
const dotenv=require('dotenv')
const initiateDBConnection=require('./.config/db');
const productsRouter=require('./routes/products');

dotenv.config({
    path:'./.config/.env'
});

const PORT=process.env.PORT;
const app=express();

app.use('/products',productsRouter);

app.listen(PORT,async ()=>{
    console.log(`Listening in port ${PORT}`);
    await initiateDBConnection();
});