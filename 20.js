// Find the cheapest phone from an array of phone objects

const phones = [
    { name: "xiomi", price: 10000, storage: "10 gb" },
    { name: "walton", price: 5000, storage: "120 gb" },
    { name: "samsung", price: 100000, storage: "100 gb" },
]

function findCheapest(brands) {
    let cheapest = brands[0];
    for (let element of brands) {
        if (element.price < cheapest.price) {
            cheapest = element;
        }
    }
    return cheapest;
}
let x1 = findCheapest(phones);
console.log(x1.name, " ", x1.price);