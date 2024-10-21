async function addItem(userCart, item) {
    userCart.push(item);
}

async function myWishListItem(userCart, item) {
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

// remover/diminuir um item
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p) => p.name === item.name); // encontrar o indice do item
    // caso não encontre o ittem...
    if(indexFound == -1) {
        console.log(`Item não encontrado`);
        return; //se essa condição,  return para evitar execultar os if abaixo
    }

    // se item > 1, subtrair um item. 
    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1
        return; //se essa condição,  return para evitar execultar os if abaixo
    }

    // Se item = 1, deletar o item
    if(userCart[indexFound.quantity == 1]) {
        userCart.splice(indexFound, 1); // splice = cortar. Vai cortar 1 em indexFound
        return;
    }
}


async function displayCart(userCart) {
    console.log("SHOPEE CART LIST:");
    userCart.forEach((item, index) => {
        console.log(`\n ${index +1}. ${item.name} - R$ ${item.price}  |  ${item.quantity}  Unidades |  subtotal = ${item.subtotal()}`);
    });
}

export {addItem, calculateTotal, deleteItem, removeItem, displayCart, myWishListItem};

