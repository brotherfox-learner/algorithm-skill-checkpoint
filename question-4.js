// วิธีที่ 1 Nested Loop
function sortProductsByPrice(products) {
  // Your code here (Bubble sort)
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products.length - i - 1; j++) {
      if (products[j].price > products[j + 1].price) {
        let temp = products[j];
        products[j] = products[j + 1];
        products[j + 1] = temp;
      }
    }
  }
  return products
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
  { name: "Date", price: 1.5 },
];
console.log(sortProductsByPrice(products));

// Output: [
//   { name: 'Banana', price: 0.8 },
//   { name: 'Apple', price: 1.2 },
//   { name: 'Date', price: 1.5 },
//   { name: 'Cherry', price: 2.5 }
// ]

// วิธีที่ 2 Built in
function sortProductsByPrice2(products) {
  // .sort Built in
  return products.sort((a,b)=> a.price - b.price)
}

console.log(sortProductsByPrice2(products));
