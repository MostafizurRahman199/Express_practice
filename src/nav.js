const express = require("express");
const app = express();
const port = 4000;
app.get("/", (req, res) => {
    res.send("Hello now u are home page");
})

app.get("/about", (req, res) => {
    res.send("Hello now u are about page");
})

app.get("/profile", (req, res) => {
    res.send("Hello now u are profile page");
})

app.get("/contact", (req, res) => {
    res.send("Hello now u are contact page");
})

app.listen(4000, () => {
    console.log(`listing to the port number ${port}`)
})