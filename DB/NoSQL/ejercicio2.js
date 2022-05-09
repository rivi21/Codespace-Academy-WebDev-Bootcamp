// CHAT
//new Date(2021, 0, 21, 20, 25, 05) El orden es de mas grande a mas pequeño
//es decir: Año, Mes, Día, Hora, Minuto, Segundo)
db.users.insertMany([
    {
        userName: "player1",
        email: "p1@gmail.com",
        password: "111111",
        birthdate: new Date(2002, 1, 15),
        lastLogin: new Date(2021, 0, 10, 20, 25, 05),
        status: {
            online: false,
            available: false
        },
        contacts: []
    },
    {
        userName: "player2",
        email: "p2@gmail.com",
        password: "222222",
        birthdate: new Date(2000, 1, 15),
        lastLogin: new Date(2021, 11, 30, 10, 15, 05),
        status: {
            online: false,
            available: true
        },
        contacts: []
    },
    {
        userName: "player3",
        email: "p3@gmail.com",
        password: "333333",
        birthdate: new Date(2003, 5, 14),
        lastLogin: new Date(2022, 0, 10, 16, 22, 11),
        status: {
            online: true,
            available: false
        },
        contacts: []
    },
    {
        userName: "player4",
        email: "p4@gmail.com",
        password: "444444",
        birthdate: new Date(1999, 6, 28),
        lastLogin: new Date(2022, 0, 12, 12, 03, 40),
        status: {
            online: true,
            available: true
        },
        contacts: []
    }
])
const users = db.users.find().toArray()
//Rellenamos el campo contacts de cada user
db.users.update({ _id: users[0]._id }, { $set: { contacts: [users[1]._id, users[2]._id, users[3]._id] } });
db.users.update({ _id: users[1]._id }, { $set: { contacts: [users[0]._id, users[2]._id] } });
db.users.update({ _id: users[2]._id }, { $set: { contacts: [users[0]._id, users[1]._id] } });
db.users.update({ _id: users[3]._id }, { $set: { contacts: [users[0]._id] } });

//creamos colección chats
db.chats.insertMany(
    [
        {
            members:
                [users[0]._id, users[1]._id, users[2]._id],
            messages: [
                { from: users[0]._id, body: "Hola, ¿quedamos el viernes?", createAt: new Date(2022, 0, 2, 18, 15, 30) },
                { from: users[1]._id, body: "Vale", createAt: new Date(2022, 0, 2, 18, 20, 30) },
                { from: users[2]._id, body: "Me uno", createAt: new Date(2022, 0, 2, 18, 20, 50) },
            ]
        },
        {
            members:
                [users[1]._id, users[3]._id],
            messages: [
                { from: users[3]._id, body: "Tienes hecho el 7 de React?", createAt: new Date(2022, 0, 2, 18, 17, 20) },
                { from: users[0]._id, body: "Casi, me falta la paginación", createAt: new Date(2022, 0, 2, 18, 17, 44) }
            ]
        }
    ]
);