async function addItem(userCart, item) {
    userCart.push(item);
}

async function calculateTotal(userCart) {
    console.log(`\n Shopee cart total is:`);
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`💲Total:${result}`);
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name );

    if(index !== -1 ) {
        userCart.splice(index, 1);
    }
}

async function removeItem(userCart, index) {}


async function displayCart(userCart) {
    console.log("SHOPEE CART LIST:");
    userCart.forEach((item, index) => {
        console.log(`\n ${index +1}. ${item.name} - R$ ${item.price}  |  ${item.quantity}  Unidades |  subtotal = ${item.subtotal()}`);
    });
}

export {addItem, calculateTotal, deleteItem, removeItem, displayCart};

