import * as cartService from "./service/cart.js"
import createItem from "./service/item.js";

const cart = [];
const myWishListItem = [];

// Criando itens para depois add, remover, ...
const item1 = await createItem("Manto do SPFC Masculino", 402.99, 49);
const item2 = await createItem("Manto do Flamengo Masculino", 452.99, 35);
const item3 = await createItem("Manto do SPFC Feminio", 352.25, 17);
const item4 = await createItem("Manto do Flamengo Feminino", 362.77, 13);
const item5 = await createItem("Manto do SPFC Infantil", 252.06, 25);
const item6 = await createItem("Manto do Flamengo Infantil", 228.95, 26);

// add itens ao carrinho
await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);
await cartService.addItem(cart, item3);
await cartService.addItem(cart, item4);
await cartService.addItem(cart, item5);
await cartService.addItem(cart, item6);

// remover/diminuir itens
await cartService.removeItem(cart, item1);
await cartService.removeItem(cart, item3);
await cartService.removeItem(cart, item3);
await cartService.removeItem(cart, item5);
await cartService.removeItem(cart, item6);
await cartService.removeItem(cart, item6);

// add a lista de desejos
//console.log(`\n Minha lista de desejos: \n`);
//await cartService.myWishListItem(cart, item1);

await cartService.displayCart(cart);

// deletar itens do carrinho
//await cartService.deleteItem(cart, item1.name);
//await cartService.deleteItem(cart, item2.name);

await cartService.calculateTotal(cart);

