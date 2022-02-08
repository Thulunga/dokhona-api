const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user');


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
    res.send(`<h1>Hi this is Thulunga Basumatary. You are well come here.</h1>`);
})


app.use('/api/users', userRouter);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})



