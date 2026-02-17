function findProductPrice(products, name) {
  // Your code here
  for (let product of products) {
    if (product.name === name) {
      return product.price
    }
  }
  return -1
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Apple"));
console.log(findProductPrice(products, "Cherry"));
console.log(findProductPrice(products, "Rambutan"));
console.log(findProductPrice(products, "Durian")); // Output: -1

function findProductPrice2(products, name) {
  // Your code here
  let product = products.find(p => p.name === name);
  return product ? product.price : -1;
}

console.log(findProductPrice2(products, "Banana")); // Output: 0.8
console.log(findProductPrice2(products, "Apple"));
console.log(findProductPrice2(products, "Cherry"));
console.log(findProductPrice2(products, "Rambutan"));
console.log(findProductPrice2(products, "Durian")); // Output: -1