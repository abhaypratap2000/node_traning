const express = require("express");
const Student = require("./models/models");
const path = require("path")
require("./db/dbconn");
const router = require("./routers/routes.js");
const bodyparser = require("body-parser")
const { body, validationResult } = require('express-validator');

const app = express();

const port = process.env.PORT || 2500;
// process env port ||3000 means : whatever is in the environment variable PORT or 3000 if there's nothing there so you pass that to app. Listen , or to app.set('port'.....), and that make s your server able to accept a "What port to listen on " parameter from the environment.

app.use(express.json());
app.use(bodyparser.urlencoded());
app.use("/", router);

app.listen(port, () => {
    console.log(`Connection sucessfull on ${port}`);
    console.log(`Server started at http://localhost:${port}`)
})