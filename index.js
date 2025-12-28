const express = require('express');
const app = express();
const chatRoutes = require("./route/chat");
require("dotenv").config();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));


app.use(chatRoutes);


app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render('chat');
});


app.listen(8000, () => {
    console.log("Server is Running!");
});
