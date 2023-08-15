
// 1.Переберите массив и запишите каждый элемент в консоль.
// const myArray = [1,4,14,25,34,-26,50,44,100,777]
// for (const elem1 of myArray) {
//     console.log(elem1);
// }
// console.log(myArray)

// 2.Умножьте каждый элемент массива на определенное значение и сохраните результат в новом массиве.
// const myArray = [1,4,14,25,34,-26,50,44,100,777]
// const newArray = []
// for (let i = 0; i < myArray.length; i++) {
//     const elem1 = myArray[i];
//     const result = elem1 * 2;
//     newArray.push(result)
// }
// console.log(newArray)

// 3.Отфильтруйте массив, чтобы удалить элементы, не соответствующие определенным критериям.
// const myArray = [1,4,14,25,34,-26,50,44,100,777]
// const filtredItem = myArray.filter(myArray => myArray % 2 === 0)
// console.log(filtredItem)

// 4.Перебрать массив и обновить каждый элемент до нового значения.
// const myArray = [1,4,14,25,34,-26,50,44,100,777]

// for (let i = 0; i < myArray.length; i++) {
//     const elem1 = myArray[i] + 1;
//     const result = elem1
//     console.log(result)
// }

// 5.Найдите максимальное или минимальное значение в массиве с помощью функции обратного вызова.
// const myArray = [1,4,14,25,34,-26,50,44,100,777];
// const max = myArray.reduce((maxValue, currentValue) => {
//     return Math.max(maxValue, currentValue);
// });
// console.log(max);

// const myArray2 = [1,4,14,25,34,-26,50,44,100,777];
// const min = myArray2.reduce((maxValue, currentValue) => {
//     return Math.min(maxValue, currentValue);
// });
// console.log(min);


// const myArray3 = [1,4,14,25,34,-26,50,44,100,777];
// function findMax (Max,Value){
//     return Math.max(Max,Value);
// }
// const maxFindMax = myArray3.reduce(findMax);
// console.log(maxFindMax)

// function findMin (Min,Value){
//     return Math.min(Min,Value);
// }
// const minFindmin = myArray3.reduce(findMin);
// console.log(minFindmin)

// 6.Создайте новый массив, применив функцию к каждому элементу существующего массива.
// const myArray = [1,4,14,25,34,-26,50,44,100,777];
// const newArray = [];
// function foo () {
//     for (let i = 0; i < myArray.length; i++) {
//         const elem1 = myArray[i] + 4;
//         newArray.push(elem1) 
//     }
// }
// foo()
// console.log(newArray)

// 7.Выполните итерацию по массиву и обновите промежуточную сумму его значений.
// const myArray = [1,4,14,25,34,-26,50,44,100,777];
// let sum = 3;
// myArray.forEach(item => {
//     sum += 33;
// });
// console.log(sum)

// 8.Создайте новый массив, выбрав определенные свойства объектов в существующем массиве.
// let goods = [
//     {id: 1, title: 'Микроволновка', price: 1500, count: 4},
//     {id: 2, title: 'Телевизор', price: 2500, count: 1},
//     {id: 3, title: 'Тумба', price: 5500, count: 5},
//     {id: 4, title: 'Холодильник', price: 200, count: 2},
//     {id: 5, title: 'Стол', price: 5600, count: 5},
//     {id: 6, title: 'Телефон', price: 1900, count: 12},
//     {id: 7, title: 'Компьютер', price: 4200, count: 11},
//     {id: 8, title: 'Мангал', price: 250, count: 7},
//     {id: 9, title: 'Люстра', price: 300, count: 3},
//  ];
//  const gooodsmap = goods.map(name => name.title);
//  console.log(gooodsmap)

// 9.Удалите дубликаты из массива с помощью функции обратного вызова.
// const myArray = [4,7,8,8,10,10,11];
// const newArray = myArray.filter(function(value,index,array){
//     return array.indexOf(value) === index;
// });
// console.log(newArray);

// 10.Сгруппируйте элементы в массиве по определенному критерию с помощью функции обратного вызова.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const groupedByEvenOdd = numbers.reduce(function(result, number) {
//     const key = number % 2 === 0 ? 'even' : 'odd';
//     if (!result[key]) {
//         result[key] = [];
//     }
//     result[key].push(number);
//     return result;
// }, {});
// console.log(groupedByEvenOdd);

// 11.Сортировка массива в определенном порядке с помощью функции обратного вызова.
// const numbers = [5, 7, 8, 1, 2, 3, 4, 11, 6, 10];
// function compareDescending(a,b) {
//     return a - b;
// }
// numbers.sort(compareDescending);
// console.log(numbers)

// 12.Выполните итерацию по массиву и выполните побочный эффект для каждого элемента, например, обновите модель DOM.
// const items = ["apple", "banana", "orange", "grape"];
// function updateDOM(item) {
//     const listItem = document.createElement("li");
//     listItem.textContent = item;
//     document.getElementById("myList").appendChild(listItem);
// }
// items.forEach(updateDOM);

// 13.Объедините два массива в новый массив, используя метод forEach.
// const ar1 = [1,2,3]
// const ar2 = [4,5,6]
// const ar3 = [7,8,9]
// const combinar1ar2ar3 = [];
// ar1.forEach(item => combinar1ar2ar3.push(item));
// ar2.forEach(item => combinar1ar2ar3.push(item));
// ar3.forEach(item => combinar1ar2ar3.push(item));
// console.log(combinar1ar2ar3)

// 14.Создайте новый массив, объединив вложенный массив с помощью метода forEach.
// let task14 = [
//     [1,2,3],
//     [2,3,4],
//     [5,6,7],
//     [7,8,9],
// ]
// let array = []
// task14.forEach((value) => {
//     array = array.concat(value)
// })
// console.log(array)

// 15.Измените существующий объект, перебирая массив пар ключ-значение.

// let goods = [
//         {id: 1, title: 'Микроволновка', price: 1500, count: 4},
//         {id: 2, title: 'Телевизор', price: 2500, count: 1},
//         {id: 3, title: 'Тумба', price: 5500, count: 5},
//         {id: 4, title: 'Холодильник', price: 200, count: 2},
//         {id: 5, title: 'Стол', price: 5600, count: 5},
//         {id: 6, title: 'Телефон', price: 1900, count: 12},
//         {id: 7, title: 'Компьютер', price: 4200, count: 11},
//         {id: 8, title: 'Мангал', price: 250, count: 7},
//         {id: 9, title: 'Люстра', price: 300, count: 3},
//      ];


// const goodsReborn = goods.map((product) => ({...product,newTitle:"Yo"}));
// console.log(goodsReborn)

// const myObject = {
//     name: "John",
//     age: 30,
//     occupation: "developer"
// };
// const keyValuePairs = [
//     ["name", "Jane"],
//     ["age", 28]
// ];
// keyValuePairs.forEach(([key, value]) => {
//     if (myObject.hasOwnProperty(key)) {
//         myObject[key] = value;
//     }
// });
// console.log(myObject);


// 16.Реализуйте функцию обратного вызова, которая будет вызываться для каждого элемента массива, пока не вернет значение false.

// const myArray = [4, 4, 6, 2, 4, 5, 6, 7, 8, 9];
// function processArrayWithCallback(data, callback) {
//     for (const elem of data) {
//         const result = callback(elem);
//         if (result === false) {
//             break;
//         }
//     }
// }
// function myCallback(elem) {
//     if (elem % 2 === 0) {
//         console.log(elem + ' true');
//         return true; // Продолжить обработку
//     } else {
//         console.log(elem + ' false');
//         return false; // Прекратить обработку
//     }
// }
// processArrayWithCallback(myArray, myCallback);

// 17.Перебрать массив и вычислить среднее значение его значений.
// const myArray = [4, 4, 6, 2, 4, 5, 6, 7, 8, 9];
// console.log(Math.min(...myArray));
// const sumOfSquares = myArray.reduce((acc,num) => acc + Math.pow(num, 2),0)
// const avgOfSquares = sumOfSquares / myArray.length;
// const result = Math.sqrt(avgOfSquares)
// console.log(result)

// 18.Перебрать массив и удалить любой элемент, соответствующий определенному критерию.
// const myArray = [4, 4, 6, 2, 4, 5, 6, 7, 8, 9];
// const myArrayDel = 4;
// myArray.splice(myArrayDel, 1);
// console.log(myArray)

// 19.Создайте новый массив элементов, соответствующих определенным критериям.
// const myArray = [4, 4, 6, 2, 4, 5, 6, 7, 8, 9];
// const newItem = 2;
// for (let i = 0; i < myArray.length; i++) {
//     const elem1 = myArray[i];
//     result = elem1 *  2
//     console.log(result)
    // const newArray = [...myArray];
    // newArray.push(newItem)
    // console.log(newArray)
// }
// const myArray = [4, 4, 6, 2, 4, 5, 6, 7, 8, 9];
// const newItem = [10,11,12,13,14,15]
// const newArray = [...myArray];
// newArray.push(newItem);
// console.log(newArray);

// 20.Выполните итерацию по массиву и обновите свойство каждого элемента, используя метод forEach.
// const myArray = [4, 4, 6, 2, 4, 5, 6, 7, 8, 9];
// const newArray = [];
// myArray.forEach(item => {
//     newArray.push(item + 1)
// });
// console.log(newArray)

// 21.Объедините все строки в массиве в одну строку, используя метод forEach.
// const stringArray = ["Hello", " ", "world", "!","Good game"];
// let resultString = "";
// stringArray.forEach(str => {
//   resultString += str;
// });
// console.log(resultString);

// 22.Создайте новый массив объектов, добавив к каждому объекту новое свойство с помощью метода forEach.
// const originalArray = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 28 }
//   ];
//   const newArray = [];
//   originalArray.forEach(obj => {
//     const newObj = { ...obj };
//     newObj.country = "USA";
//     newArray.push(newObj);
//   });
  
//   console.log(newArray);

// 23.Подсчитайте, сколько раз элемент появляется в массиве, используя метод forEach.
// function countElementOccurrences(arr, targetElement) {
//   let count = 0;

//   arr.forEach(element => {
//     if (element === targetElement) {
//       count++;
//     }
//   });

//   return count;
// }

// const array = [1, 2, 3, 2, 4, 2, 5];
// const elementToCount = 2;

// const occurrences = countElementOccurrences(array, elementToCount);
// console.log(`Элемент ${elementToCount} встречается ${occurrences} раз(а) в массиве.`);

// 24.Суммируйте значения определенного свойства в массиве объектов, используя метод forEach.
// const objectsArray = [
//   { name: 'Апельсин', price: 1.5 },
//   { name: 'Яблоко', price: 2.0 },
//   { name: 'Банан', price: 1.0 },
//   { name: 'Груша', price: 1.8 }
// ];
// function sumPropertyValues(arr, propertyName) {
//   let sum = 0;

//   arr.forEach(object => {
//     if (object.hasOwnProperty(propertyName)) {
//       sum += object[propertyName];
//     }
//   });
//   return sum;
// }
// const propertyNameToSum = 'price';
// const totalSum = sumPropertyValues(objectsArray, propertyNameToSum);
// console.log(`Общая сумма свойства ${propertyNameToSum} равна ${totalSum}.`);

// 25.Удалите элемент из массива, если он соответствует определенным критериям, используя метод forEach.
// const myArray = [24,52,5,213,12,23,45,6]
// const elementToRemove = 213;
// const newArray = [];
// myArray.forEach(item => {
//   if (item !== elementToRemove) {
//     newArray.push(item);
//   }
// });
// console.log(myArray)
// console.log(newArray)

// 26.Создайте новый массив, сопоставив существующий массив с массивом логических значений, используя метод forEach.
// const originalArray = [1, 2, 3, 4, 5];
// const comparisonValue = 5;

// const booleanArray = [];
// originalArray.forEach(item => {
//   booleanArray.push(item === comparisonValue);
// });
// console.log(booleanArray);

// 27.Найдите первый элемент в массиве, который соответствует определенному критерию, используя метод forEach.
// const array = [25,35,45,12,24,545,123,444,223];
// const targetCriteria = 444;

// let foundElement = null;
// array.forEach(item => {
//   if (item === targetCriteria) {
//     foundElement = item;
//     return; // Выход из forEach после нахождения элемента
//   }
// });

// if (foundElement !== null) {
//   console.log(`Первый элемент, соответствующий критерию, это ${foundElement}.`);
// } else {
//   console.log(`Элемент, соответствующий критерию, не найден.`);
// }

// 28.Создайте новый массив, отфильтровав существующий массив на основе свойства его объектов, используя метод forEach.

// const objectsArray = [
//   { name: 'Апельсин', category: 'фрукт' },
//   { name: 'Морковь', category: 'овощ' },
//   { name: 'Груша', category: 'фрукт' },
//   { name: 'Помидор', category: 'овощ' },
//   { name: 'Яблоко', category: 'фрукт' }
// ];

// const myfilter = objectsArray.filter(elem => elem.category === "фрукт")
// console.log(myfilter)

// // const targetCategory = 'фрукт';
// const targetCategory = 'овощ';
// const filteredArray = [];

// objectsArray.forEach(object => {
//   if (object.category === targetCategory) {
//     filteredArray.push(object);
//   }
// });

// console.log(filteredArray);

// 29.Обновите массив на месте, удалив определенные элементы, соответствующие определенным критериям, с помощью метода forEach.

// const array = [1, 2, 3, 4, 5];
// const targetCriteria = 4;

// array.forEach((item, index) => {
//   if (item === targetCriteria) {
//     array.splice(index, 1);
//   }
// });

// console.log(array);

// 30.Измените массив объектов, сопоставив каждый объект с новым объектом с добавленным свойством, используя метод forEach.
// const originalObjectsArray = [
//   { name: 'Апельсин', category: 'фрукт' },
//   { name: 'Морковь', category: 'овощ' },
//   { name: 'Груша', category: 'фрукт' },
//   { name: 'Помидор', category: 'овощ' },
//   { name: 'Яблоко', category: 'фрукт' }
// ];

// const updatedObjectsArray = [];
// originalObjectsArray.forEach(object => {
//   const updatedObject = { ...object, Discount: 80 };
//   updatedObjectsArray.push(updatedObject);
// });

// console.log(updatedObjectsArray);

// 31.Сгруппируйте объекты в массиве по определенному свойству, используя метод forEach.
// const objectsArray = [
//   { name: 'Апельсин', category: 'фрукт' },
//   { name: 'Морковь', category: 'овощ' },
//   { name: 'Груша', category: 'фрукт' },
//   { name: 'Помидор', category: 'овощ' },
//   { name: 'Яблоко', category: 'фрукт' }
// ];

// const groupedObjects = {};

// objectsArray.forEach(object => {
//   const category = object.category;
//   if (!groupedObjects[category]) {
//     groupedObjects[category] = [];
//   }
//   groupedObjects[category].push(object);
// });

// console.log(groupedObjects);

// 32.Создайте новый массив объектов, отфильтровав существующий массив объектов на основе свойства с помощью метода forEach.

// const originalObjectsArray = [
//   { name: 'Апельсин', category: 'фрукт' },
//   { name: 'Морковь', category: 'овощ' },
//   { name: 'Груша', category: 'фрукт' },
//   { name: 'Помидор', category: 'овощ' },
//   { name: 'Яблоко', category: 'фрукт' }
// ];

// const filteredObjectsArray = [];
// originalObjectsArray.forEach(object => {
//   if (object.category === 'фрукт') {
//     filteredObjectsArray.push(object);
//   }
// });

// console.log(filteredObjectsArray);


// 33.Вычислить произведение всех чисел в массиве с помощью метода forEach.
// const numbers = [2, 3, 4, 5];
// let product = 1;

// numbers.forEach(number => {
//   product *= number;
// });

// console.log(product);

// 34.Найдите первый индекс элемента в массиве, используя метод forEach.
// const array = [2, 4, 6, 8, 9];
// const targetElement = 6;

// let foundIndex = -1;

// array.forEach((element, index) => {
//   if (element === targetElement && foundIndex === -1) {
//     foundIndex = index;
//   }
// });

// console.log(foundIndex);

// 35.Создайте новый массив, объединив два существующих массива с помощью метода forEach.

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const combinedArray = [];

// array1.forEach(element => {
//   combinedArray.push(element);
// });
// array2.forEach(element => {
//   combinedArray.push(element);
// });
// console.log(combinedArray);

// 36.Найдите сумму всех четных чисел в массиве, используя метод forEach.
// const myArray = [5, 10, 15, 20, 25, 30, 35, 40];
// let sumArrayEven = 0;

// myArray.forEach(number => {
//   if (number % 2 === 0) {
//     sumArrayEven += number; 
//     console.log(sumArrayEven);
//   } else {
//     console.log("Нечетное");
//   }
// });
// console.log(sumArrayEven); 

// 37.Удалите все ложные значения из массива, используя метод forEach.
// const originalArray = [0, false, '', null, undefined, NaN, 42, 'hello', true];
// const filteredArray = [];

// originalArray.forEach(item => {
//   if (item) {
//     filteredArray.push(item);
//   }
// });
// console.log(filteredArray);
//null
// undefined
// false
// ""
// NaN
// 0

// 38.Создайте новый массив, сопоставив существующий массив с массивом объектов, используя метод forEach.
// const originalArray = [1, 2, 3, 4, 5];
// const mappedArray = [];

// originalArray.forEach(item => {
//   const mappedObject = { value: item * 2 }; // Создание нового объекта
//   mappedArray.push(mappedObject);
// });

// console.log(mappedArray);

// 39.Найдите индекс последнего элемента в массиве, который соответствует определенному критерию, используя метод forEach.
// const array = [2, 4, 6, 8, 6, 10];
// const targetCriteria = 10;

// let lastIndex = -1; 

// array.forEach((item, index) => {
//   if (item === targetCriteria) {
//     lastIndex = index;
//   }
// });

// console.log(lastIndex);


// 40.Обновите объект в массиве объектов на основе определенных критериев, используя метод forEach.

const objectsArray = [
  { id: 1, name: 'Apple', quantity: 5 },
  { id: 2, name: 'Banana', quantity: 10 },
  { id: 3, name: 'Orange', quantity: 7 }
];

const targetId = 3;
const updatedQuantity = 15;

objectsArray.forEach(object => {
  if (object.id === targetId) {
    object.quantity = updatedQuantity;
  }
});

console.log(objectsArray);