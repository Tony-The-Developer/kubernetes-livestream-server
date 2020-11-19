const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.use(express.json())

const users = []

//Routes
const authRoute = require('./routes/auth');
//Route Middleware
app.use('/api/', authRoute);


require('./app')

app.listen(3000, () => console.log('Server Is Running'));
