// Original array of order amounts
const orderAmounts = [1200, 450, 3000, 750, 1500, 250, 4200, 900];

// 1. First order amount greater than 2000
const firstOrderOver2000 = orderAmounts.find(amount => amount > 2000);

// 2. Separate list containing all orders greater than 1000
const ordersOver1000 = orderAmounts.filter(amount => amount > 1000);

// 3. Combined total of all order amounts
const totalSales = orderAmounts.reduce((total, amount) => total + amount, 0);

// Displaying the results clearly in the console
console.log("Original Order Amounts:", orderAmounts);
console.log("First order amount greater than 2000:", firstOrderOver2000);
console.log("Orders greater than 1000:", ordersOver1000);
console.log("Combined total of all orders:", totalSales);
