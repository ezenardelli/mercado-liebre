<<<<<<< HEAD
const express = require("express");  

const app = express ();             

const path = require("path");           


app.listen(3001, () => {
    console.log("servidor a la escucha del puerto 3001");
}); 

const publicPath = path.resolve(__dirname, "./Public");
app.use( express.static(publicPath) );

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./Views/index.html"));
});
app.get("/Views/index.html", (req, res) => {
    res.sendFile(path.join(__dirname, "./Views/index.html"));
});
app.get("/registro", (req, res) => {
    res.sendFile(path.join(__dirname, "./Views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "./Views/login.html"));
});
=======
const express = require("express");  

const app = express ();             

const path = require("path");           


app.listen(3001, () => {
    console.log("servidor a la escucha del puerto 3001");
}); 

const publicPath = path.resolve(__dirname, "./Public");
app.use( express.static(publicPath) );

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./Views/index.html"));
});
app.get("/Views/index.html", (req, res) => {
    res.sendFile(path.join(__dirname, "./Views/index.html"));
});
app.get("/registro", (req, res) => {
    res.sendFile(path.join(__dirname, "./Views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "./Views/login.html"));
});
>>>>>>> edb9d34cd349de1b5b742dfb79ba8511a3702468
