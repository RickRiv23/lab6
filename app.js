const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("assets"));

//  routes
app.get("/", function(req, res){
    res.render("index.ejs");
    console.log("index route");
});
app.get("/index.html", function(req, res){
    res.render("index.html");
    console.log("index route");
});

app.get("/mercury", function(req, res){
    res.render("mercury.ejs");
    console.log("mercury route");
});

app.get("/venus", function(req, res){
    res.render("venus.ejs");
    console.log("venus route");
});

app.get("/mars", function(req, res){
    res.render("mars.ejs");
    console.log("mars route");
});

//  server listener
app.listen("8080", "127.0.0.1", function(){
    console.log("Express Server is Running...");
});

// Herkou Listener
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Running Express Server...");
});
