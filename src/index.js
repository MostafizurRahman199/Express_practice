const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const hbs = require('hbs');

//build in middleware
console.log();
const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname + '../templates/views');
const partialsPath = path.join(__dirname + '../templates/partials');


//to set the view engine
app.use('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartial(partialsPath);

// app.use(express.static(staticPath));
// app.use(express.static(path))

app.get('/', (req, res) => {

    res.render('index', {
        channelName: "Mostafiz",
    });
})



app.get("/about", (req, res) => {
    res.render('about');
})


app.get("*", (req, res) => {
    res.render("404", {
        errorcomment: "Opps page could not found",
    });
})

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
})