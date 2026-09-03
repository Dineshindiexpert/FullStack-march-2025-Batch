// Task 2
// Create a class Product with:
// Properties:
// •	id
// •	name
// •	price
// •	quantity

// Methods:
// getTotalPrice() → returns price * quantity
// updateQuantity(qty) → updates product quantity
// getProductDetails() → returns formatted product info


class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  // returns price * quantity
  getTotalPrice() {
    return this.price * this.quantity;
  }

  // updates product quantity
  updateQuantity(qty) {
    this.quantity = qty;
  }

  // returns formatted product info
  getProductDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`;
  }
}

// Usage
const product1 = new Product(1, "Laptop", 55500, 2);

console.log(product1.getProductDetails());
console.log("Total Price:", product1.getTotalPrice());

product1.updateQuantity(3);
console.log(product1.getProductDetails());
console.log("Total Price:", product1.getTotalPrice());

