const config = require("./config.js");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

app.use(require("body-parser").json());
app.use(require("body-parser").urlencoded({ extended: false }));
app.use(express.static("public"));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.set('view engine', 'ejs');
app.use(express.static('static'));
app.use(express.static('assets'));

app.get("/", (req, res) => {
    return res.render("index", { version: require("./package.json").version });
});

app.get("/api/docs", (req, res) => {
    return res.render("docs");
});

app.get("/api/ping", (req, res) => {
    return res.send({ response: "Pong!", message: "Hello World!" });
});

app.get("/api/something", (req, res) => {
    return res.send({ message: "Make a post request for this endpoint." });
});

app.post("/api/something", (req, res) => {
    return res.send({ yourPostRequestData: req.body });
});

app.get("/api/auth", (req, res) => {
    if (!req.headers.authorization) return res.send({ msg: "no authorization?" });
    if (req.headers.authorization !== "abcABC123") return res.send({ msg: "invalid authorization?" });
    else res.send({ msg: "Valid Authorization" });
});

app.post("/api/auth", (req, res) => {
    if (!req.headers.authorization) return res.send({ msg: "no authorization?" });
    if (req.headers.authorization !== "abcABC123") return res.send({ msg: "invalid authorization?" });
    else res.send({ msg: "Valid Authorization" });
});

app.get("*", (req, res) => {
    return res.render("404");
});

server.listen(config.port, () => {
    console.log(`Server started at *${config.port}`);
});
