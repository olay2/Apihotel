const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require('path');
var cors = require('cors')
const routerNav = require("./src/index");



const app = express();

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
app.set('trust proxy', 1);


// var corsOptions = {
//   origin: [*],
//   AllowMethods: "'OPTIONS,POST,GET,DELETE'",
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

app.use(cors())
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 3006

app.use(express.json())

app.listen(port, () => {
  console.log("Hosting on port:" + port);
});
app.use("/", routerNav);
app.get("*", (req, res) => {
  res.json({ "message": "Welcome1" });
});

module.exports = app;