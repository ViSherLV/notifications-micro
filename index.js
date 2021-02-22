const mongoose = require("mongoose");
const express = require("express");
var cors = require('cors');
const {sendNotifications} = require('./modules')
const app = express();
const { SendGrid } = require('./utils/SendGrid');
const {getUsers} = require('./mongo/helpers');
app.use(cors())
app.use(express.static(__dirname + "/public"));
SendGrid.initialize()
require('./routes')(app);
mongoose.connect("mongodb+srv://visher:chatbot@cluster0.mxirp.mongodb.net/NewsWebsite?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }, function (err) {
    if (err) return console.log(err);
    app.listen(3002, async function () {
        //await getUsers()
        //await sendNotifications()
        console.log("Сервер ожидает подключения...");
    });
    // SendGrid.sendMessage({})

});


