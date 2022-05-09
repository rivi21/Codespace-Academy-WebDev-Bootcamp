require("./config/config.js");
require("./config/database");

const express = require("express");
const app = express();

const users = require("./routes/users");

app.use(express.json());

app.use("/users", users);


app.listen(process.env.PORT, () => {
    console.log(`web server listening at port ${process.env.PORT}`);
});