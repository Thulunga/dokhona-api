const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


let port = process.env.PORT || 3000;

mongoose.connect(
    process.env.MONGO_URL, { useNewUrlParser: true }
    ).then(() => {
        console.log('Connected to database');
    }).catch(err => {
        console.log(err);
    });

app.get('/', (req, res) => {
    res.send(process.env.MONGO_URL);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


