// Calculate the total cost of the products in a shopping cart

const cart = [
    { name: "laptop", price: 100000, quantity: 1 },
    { name: "shirt", price: 100, quantity: 10 },
    { name: "mobile", price: 40000, quantity: 1 },
]

function totalCost(carts) {
    let total = 0;
    for (const element of carts) {
        total = total + element.price * element.quantity;
    }
    return total
}
let x1 = totalCost(cart);
console.log(x1);