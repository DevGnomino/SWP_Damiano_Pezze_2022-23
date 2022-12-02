const items = [
    { name: "Bike", price: 600 },
    { name: "Baum", price: 50 },
    { name: "Mouse", price: 35 },
    { name: "Tastatur", price: 70 },
    { name: "Fernseher", price: 400 },
    { name: "Buch", price: 10 }
]

const filteredItems = items.filter((item) => {
    return item.price <= 100;
})
console.log(filteredItems);

const itemNames = items.map((item) => {
    return item.price;
})
console.log(itemNames);

const foundItem = items.find((item) => {
    return item.name === "Fernseher";
})
console.log(foundItem);

items.forEach((item) => {
    console.log(item.name);
})

const hasInexpensiveItems = items.some((item) => {
    return item.price <= 50;
})
console.log(hasInexpensiveItems);

const hasOnlyExpensiveItems = items.every((item) => {
    return item.price > 50;
})
console.log(hasOnlyExpensiveItems);

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0)
console.log(total);

const newItems = [1, 2, 3, 4, 5];
const includesSeven = items.includes(7);
console.log(includesSeven);