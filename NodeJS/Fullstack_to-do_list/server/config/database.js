const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/toDoList",
    /*{
        useNewUrlParser: true,
       useUnifiedTopology: true,
       useFindAndModify: false,
       useCreateIndex: true, 
   }*/
);
const db = mongoose.connection;

db.on("error", err => { console.log("Ha fallado la conexión a mongo.", err) });

db.once("open", () => console.log("La conexión con mongo ha ido bien."));