//TIENDA ONLINE

//creamos la coleccion customers insertando varios documentos directamente
db.customers.insertMany([
    {
        name: "Clark",
        lastName: "Kent",
        address: "Calle Larios",
        email: "ckent@gmail.com",
        phoneNumber: "123456789",
        shoppingCart: []
    }, {
        name: "Peter",
        lastName: "Parker",
        address: "Calle Marmoles",
        email: "pparker@gmail.com",
        phoneNumber: "321654999",
        shoppingCart: []
    }, {
        name: "Bruce",
        lastName: "Wayne",
        address: "Calle Ghotam",
        email: "bwayne@gmail.com",
        phoneNumber: "111222444",
        shoppingCart: []
    }
]);
//creamos la coleccion products insertando varios documentos directamente
db.products.insertMany([
    {
        name: "Chair",
        brand: "Ikea",
        category: "Home",
        price: 20
    }, {
        name: "Jeans",
        brand: "Levy's",
        category: "clothes",
        price: 80
    }, {
        name: "Computer",
        brand: "Dell",
        category: "electronics",
        price: 600
    }
]);
//Guardamos los products en un array  para poder usar sus elementos en la shell
//esta variable se manitene mientras esté abierta la shell si cierro se borra
const products = db.products.find().toArray();

//Actualizamos la colección customers añadiendo el campo shoppingCart
db.customers.update(
    { name: "Clark" },
    {
        $set: {
            shoppingCart: [
                {
                    product_id: products[0]._id,
                    quantity: 4
                }, {
                    product_id: products[1]._id,
                    quantity: 1
                }
            ]
        }
    }
);

db.customers.update(
    { name: "Bruce" },
    {
        $set: {
            shoppingCart:
            {
                product_id: products[2]._id,
                quantity: 1
            }
        }
    }
);
//para que sea más cómodo desde la shell, guardamos los clientes tb en un array
const customers = db.customers.find().toArray();

//creamos la colección de facturas creando varias con los respectivos identificadores
db.invoices.insertMany(
    [
        {
            products_id: [products[0]._id, products[1]._id],
            customer_id: customers[0]._id,
            date: new Date()
        }, {
            products_id: [products[2]._id],
            customer_id: customers[2]._id,
            date: new Date()
        }
    ]
);