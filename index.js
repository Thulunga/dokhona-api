const express = require('express');
const app = express();
const mongoose = require('mongoose');


let port = process.env.PORT || 3000;

mongoose.connect(
    'mongodb+srv://Thulunga:Tbasum398@cluster0.szsdt.mongodb.net/dokhona?retryWrites=true&w=majority', { useNewUrlParser: true }
    ).then(() => {
        console.log('Connected to database');
    }).catch(err => {
        console.log(err);
    });

app.get('/', (req, res) => {
    res.send('Hello World Thulunga Basumatary what are you doing!');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


