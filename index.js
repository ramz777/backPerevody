const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json());
app.use(require('./routes/courses.route'));
app.use(require('./routes/directions.route'));
app.use(require('./routes/disciplines.route'));

mongoose
.connect('mongodb+srv://Ramzan:z070399z@cluster0.lhgp8fj.mongodb.net/transfer')
.then(()=> console.log('MongoDB connect')).catch(err=>console.log(err))

app.listen(3003, () => {
    console.log('server ok');
})