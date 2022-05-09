import List from "./List";

export default function Shop(props) {
    //Aquí podemos escribir Js normal
    const shop = {
        electronics: [
            { id: 27, product: "Televisor", brand: "LG", model: "XP7302", price: 399 },
            { id: 28, product: "Equipo hI-fI", brand: "Samsung", model: "VF235", price: 179 },
            { id: 29, product: "Televisor", brand: "Sony", model: "Bravia-175", price: 498 },
        ],
        groceries: [
            { id: 30, product: "Galletas", brand: "María", price: 0.90 },
            { id: 31, product: "Ensalada", brand: "Imizurra", price: 1.30 },
            { id: 32, product: "Patatas", brand: "MkCaain", price: 0.90 },
            { id: 33, product: "Pasta", brand: "Gallo", price: 0.90 },
        ],
        pets: [
            { id: 34, product: "Croquetas para gato", brand: "Purina", price: 4.90 },
            { id: 35, product: "Arena de gato", brand: "Limpior", price: 1.10 },
        ]
    };
    //Dentro del return devolvemos el jsx 
    return (
        <>
            <List category="electronics" product={shop.electronics} />
            <List category="groceries" product={shop.groceries} />
            <List category="pets" product={shop.pets} />
        </>
    )
}