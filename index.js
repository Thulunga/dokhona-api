const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const productRouter = require('./routes/product');
const cartRouter = require('./routes/cart');
const orderRouter = require('./routes/order')


dotenv.config();


let port = process.env.PORT || 3000;

mongoose.connect(
    process.env.MONGO_URL, { useNewUrlParser: true }
    ).then(() => {
        console.log('Connected to database');
    }).catch(err => {
        console.log(err);
    });



app.use(express.json());
app.get('/', (req, res) => {
    res.send(`<h1>Hi Alien</h1>`);
})


app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
app.use('/api/orders', orderRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})



