// const people = [
//     { name: 'John', age: 30 },
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 40 },
//   ]

//   const allAge = people.map((person) => person.age) //{name: "Jhon", age: 30}
//     console.log(allAge)    

//   const JhonAge = people[0]
//   const AliceAge = people[1]
//   const BobAge = people[2]

// console.log(JhonAge.age,AliceAge.age,BobAge.age)


// const cartItems = [
//     { name: 'Apple', price: 2, quantity: 3 },
//     { name: 'Banana', price: 8, quantity: 5 },
//     { name: 'Orange', price: 6, quantity: 2 },
//   ]

//price * quantity = 2 * 3 = 6;
//[6,40,12] 

// const conculate = cartItems.map((product) => product.price * product.quantity)
// console.log(conculate)


// const discount = cartItems.map((product) => ({...product,totalPrice:80}));
// console.log(discount)

// const productsWithTotalPrice = cartItems.map((product) => ({...product,totalPrice: product.price * product.quantity}))
// console.log(productsWithTotalPrice)


// const cartItems = [
//     { name: 'Apple', price: 88, quantity: 3 },
//     { name: 'Banana', price: 50, quantity: 5 },
//     { name: 'Orange', price: 6, quantity: 2 },
//     { name: 'Coconat', price: 90, quantity: 2 },
//     { name: 'Peach', price: 45, quantity: 2 },
//     { name: 'PineApple', price: 6, quantity: 2 },
//   ]

//   const fillteredItems = cartItems.filter((products) => products.price >= 50)
//   console.log(fillteredItems)

// const fillteredItems = cartItems.filter((products) => products.price > 40 && products.price < 60)
//   console.log(fillteredItems)


// const items = ['Apples', 'Bananas', 'Oranges', 'Grapes']
// const div = document.createElement("div")
// const ul = document.createElement("ul")
// const li = document.createElement("li")
// const itemsAdd = items.map((item) => `<li>${item}</li>`).join('')
// const ulElement = document.getElementById('productList')
// ulElement.innerHTML = itemsAdd
// console.log(itemsAdd)





// const cartItems = [
//   { name: 'Apple', price: 120, quantity: 3 },
//   { name: 'Banana', price: 50, quantity: 5 },
//   { name: 'Orange', price: 6, quantity: 2 },
//   { name: 'PineApple', price: 2, quantity: 2 },
//   { name: 'Coconut', price: 90, quantity: 2 },
//   { name: 'Peach', price: 45, quantity: 2 },
// ]


// const divCartItem = document.getElementById("productsCards")
// const h2CartItem = document.createElement("h2")
// const ulCartItem = document.createElement("ul")
// const liCartItem = document.createElement("li")
// const itemsAddH2 = cartItems.map((product) => `<div><h2>${product.name}<h2><p>Price:${product.price}<p><p>Quantity:${product.quantity}<p><div>`).join('')
// divCartItem.innerHTML = itemsAddH2
// itemsAddH2.style = "displey-flex"
// const itemsAddUl = cartItems.map((product) => `<ul>${product.price}<ul>`)
// divCartItem.innerHTML = itemsAddUl
// const itemsAddLi = cartItems.map((product) => `<li>${product.quantity}<li>`)
// divCartItem.innerHTML = itemsAddLi
// console.log(itemsAddH2,itemsAddUl,itemsAddLi)


// const divCartItem = document.getElementById("productsCards");
// // Создание h2 элемента
// const h1CartItem = document.createElement("h1");
// h1CartItem.textContent = "Our Products";
// divCartItem.appendChild(h1CartItem);
// // Создание ul элемента
// const ulCartItem = document.createElement("ul");
// // Добавление li элементов в ul элемент
// cartItems.forEach((product) => {
//     const h2CartItem = document.createElement("h2");
//     h2CartItem.textContent = `${product.name}`;
//     const li = document.createElement("li");
//     li.textContent = `Price: ${product.price}, Quantity: ${product.quantity}`;
//     ulCartItem.appendChild(h2CartItem)
//     ulCartItem.appendChild(li);
// });
// divCartItem.appendChild(ulCartItem);

import {
  newId
} from './util.js'
import {
  cartItems
} from './productj.js'

const productContainer = document.getElementById('productsContainer');

// добавляем id
const cartItemsWithIndex = cartItems.map((product, index) => ({
  ...product,
  id: newId(),
}));

// обновление списка товаров
function updateProducts(sortedArray) {
  const productsHTML = sortedArray.map(
    (product) => `
    <div class="productCard">
      <h2>${product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Amount: ${product.quantity}</p>
      <button class="addToCartButton">В корзину</button>
    </div>`
  ).join('');

  productContainer.innerHTML = productsHTML;
}

updateProducts(cartItemsWithIndex); // Инициализация списка
// другая по down-yes
const sortButton = document.getElementById('sortButton');
sortButton.addEventListener('click', () => {
  cartItemsWithIndex.sort((a, b) => a.price - b.price);
  updateProducts(cartItemsWithIndex);
});
// другая по up-yes
const sortButton2 = document.getElementById('sortButton2');
sortButton2.addEventListener('click', () => {
  cartItemsWithIndex.sort((a, b) => b.price - a.price);
  updateProducts(cartItemsWithIndex);
});


// в карточке добаить кпопку в корзину
const productList = document.getElementById('productList');
// Добавляем обработчики событий для кнопок "В корзину"
const addToCartButtons = document.querySelectorAll('.addToCartButton');
addToCartButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Добавьте код для добавления товара в корзину по индексу index
    console.log(`Товар ${cartItemsWithIndex[index].name} добавлен в корзину`);
  });
});

// выводить общее количество товаров
const resultQuantity = document.getElementById('resultQuantity')
const totalSum = cartItems.reduce((accumulator, object) => {
  return accumulator + object.quantity
}, 0)
resultQuantity.textContent = totalSum;

// через функцию reduce выводить общую сумму товаров(price)
const resultPrice = document.getElementById('resultPrice')
const totalPrice = cartItems.reduce((accumulator, object) => {
  return accumulator + object.price;
}, 0);
resultPrice.textContent = totalPrice


















//VOZMOZNASTI ZASUNUTJ SHTOTA V MASIV
// const apple = { name: 'Apple', price: 2, quantity: 3 }

// apple.discount = 60;
// console.log(apple)

// const newApple = {...apple, discount:80}
// console.log(newApple)