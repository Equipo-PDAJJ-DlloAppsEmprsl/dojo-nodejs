const express = require("express");
const app = express();
const uri = require('./app/config/db.config.js');
const getToken = require('./app/services/token.service.js');

const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);

mongoose.connect(uri, (err, res) => {
 
    if (err) throw err;
    console.log("Base de datos online")
 }); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}.`);
});

app.get('/', async function (req, res) {
    res.send('Espoti fai')
    const token = await getToken();
    console.log(token);
  })