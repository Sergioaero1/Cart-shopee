async function createItem(name, price, quantity) {
 return{
    name,
    price,
    quantity,
    subtotal: () => price * quantity, // arrow function - pesquisar
 };
}

export default createItem;