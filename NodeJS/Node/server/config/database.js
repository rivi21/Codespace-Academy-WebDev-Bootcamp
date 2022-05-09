const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/users");

const db = mongoose.connection;

db.on("error", error => console.log("Ha fallado la conexion a mongo", error));
db.once("open", () => console.log("La conexion con mongo es correcta"));