import * as cartService from "./service/cart.js"
import createItem from "./service/item.js";

const cart = [];
const myWishList = [];

console.log("This is your Shopee cart");

const item1 = await createItem("Manto do SPFC Masculino", 20.99, 1);
const item2 = await createItem("Manto do Flamengo Masculino", 39.99, 3);
const item3 = await createItem("Manto do SPFC Feminio", 352.25, 17);
const item4 = await createItem("Manto do Flamengo Feminino", 362.77, 13);
const item5 = await createItem("Manto do SPFC Infantil", 252.06, 25);
const item6 = await createItem("Manto do Flamengo Masculino", 228.95, 20);

// add itens ao carrinho
await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);
// await cartService.addItem(cart, item3);
// await cartService.addItem(cart, item4);
// await cartService.addItem(cart, item5);
// await cartService.addItem(cart, item6);

await cartService.displayCart(cart);

// deletar itens do carrinho
await cartService.deleteItem(cart, item1);
await cartService.deleteItem(cart, item2.name);

await cartService.calculateTotal(cart);

