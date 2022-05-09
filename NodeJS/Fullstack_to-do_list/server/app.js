require("./config/settings");
require("./config/database");

const express = require("express");
const app = express();
const toDos = require("./routes/toDos");
const cors = require("cors");

app.use(express.json());
//parsea/transforma un json en objeto javascript donde se necesite
//Es un middleware. Se pone antes de los endpoints.
app.use(cors());
app.use("/toDo", toDos);

app.listen(process.env.PORT,
    () => {console.log(`webserver listening at port ${process.env.PORT}`);
    });
