// 1. Create the inventory as a Map
const inventory = new Map([
    ['apples', 500],
    ['bananas', 300],
    ['oranges', 200]
]);

// 2. Add a new product to the inventory
inventory.set('grapes', 150);

// 3. Update the stored quantity of an existing product
inventory.set('bananas', 350);

// 4. Retrieve and display the quantity of a specific product
console.log("Quantity of apples:", inventory.get('apples'));

// 5. Check whether a particular product exists and display the result
console.log("Does 'oranges' exist in inventory?", inventory.has('oranges'));

// 6. Remove one product from the inventory
inventory.delete('oranges');

// 7. Display the current number of product entries
console.log("Current unique product entries count:", inventory.size);

// 8 & 9. Display all product names, quantities, and print in readable format using Map iteration
console.log("\n--- Current Inventory Status ---");
inventory.forEach((quantity, product) => {
    console.log(`Product: ${product} | Quantity: ${quantity}`);
});

// 10. Empty the inventory and display its final size
inventory.clear();
console.log("\nInventory cleared. Final size:", inventory.size);
