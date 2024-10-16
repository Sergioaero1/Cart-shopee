import * as cartService from "./service/cart.js"
import createItem from "./service/item.js";

const cart = [];

console.log("This is your Shopee cart");

const item1 = await createItem("Manto do SPFC Masculino", 452.95, 20);
const item2 = await createItem("Manto do Flamengo Masculino", 472.45, 30);
// const item3 = await createItem("Manto do SPFC Feminio", 352.25, 17);
// const item4 = await createItem("Manto do Flamengo Feminino", 362.77, 13);
// const item5 = await createItem("Manto do SPFC Infantil", 252.06, 25);
// const item6 = await createItem("Manto do Flamengo Masculino", 228.95, 20);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

console.log("Shopee cart total is:");
await cartService.calculateTotal(myCart);

