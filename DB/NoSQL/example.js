//Inserciones en Mongodb:

//Insertamos el documento user1 en la base de datos:
//En la terminal: - Abrimos la shell de MongoDB con "mongo"
//                - show dbs (vemos las db)
//                - use nombre_db (seleccionamos la db)
//                - show collections (vemos las colecciones/tablas de la db seleccionada)
//                - Escribimos el objeto a insertar y enter:
user1 = { Fname: "Test", Lname: "User", Age: 30, Gender: "M", Country: "US" }
//                - Escribimos lo siguiente para insertar el objeto y enter:
db.users.insert(user1)
//                - Podemos hacerlo con bucles:
for (var i = 1; i <= 20; i++) { db.providers.insert({ "Name": "Provider" + i, "stock": 1000 + i, "Country": "China" }) }
//Insertar varios
db.users.insertMany([
    { "_id": ObjectId(), "Name": "object id" },
    { "_id": 10, "Name": "explicit id" }
])
//buscar en las colecciones
db.users.find({ "Name": "explicit id" }, { Name: 1, id: 0 })
//Esto me mostraría el nombre pero no el id (1 y 0 son true o false)