//Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
//1 Решения
// function printMin(a, b) {
//     if ( a < b) {
//         console.log(a);
//     } else if (a === b) {
//          console.log("числа равны");
//         } else {
//             console.log(b);
//         }
//     }
//     printMin(4, 9)
//     printMin(9, 4)
//     printMin(10, 26)

//2 Решения
// function printMin(a, b) { 
//     return (Math.min(a,b))
//   }

//   printMin(5,10)

//3 Решения
// let a = 3
// let b = 5

// minimum = Math.min(a,b);

// const min = function (a,b) {
//     return Math.min(min)
// }
// console.log(minimum)

//4 Решения
// function min(a, b) {
//   return a < b ? a : b
// }
// min(100, 35)
// console.log(min(100, 35))


//Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

// function printEvensInRange (max , min) {
//   if (max < min) {
//     return printEvensInRange(min, max)
//   }
//   if (max % 2 !== 0) {
//     max--
//   }
//   for (let i = max; i >= min; i-= 2) {
//     console.log(i)
//     }

// }
// printEvensInRange(12,2)
// printEvensInRange(2,12)
// printEvensInRange(2,13)


//Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.


// console.log("== task 3. Power ==")
// function power ( a, b = 2) {
//   console.log("a = ", a );
//   console.log("b = ", b );
//   console.log("a^b = ", a**b);
//   return a**b;
// }

// power(5,2)
// power(3)
// power(2,4) 

//..........................................................................................

//Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

// function sumNum (n) {
//    let sum = 0
//    for (let i = 1; i <= n; i++) {
//     sum += i;
    
//    }
//    return sum
// }
// sumNum(3,5)
// console.log(sumNum)


//Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).


// function giveSum(n, m) {
//   let sumEven = 0
//   let sumOdd = 0
//   for (let i = n; i <= m; i++) {
//       if (i % 2 === 0) {
//           sumEven += i
//       } else {
//           sumOdd += i
//       }
//   }
//   return {
//       sumEven,
//       sumOdd
//   }
// }
// console.log(giveSum(2, 13))
// console.log(giveSum(4, 16))
//console.log(`Сумма четных чисел: ${sumEven(2,13).sumEven}`)
//console.log(`Сумма нечотных чисел `)


//Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
// Пример: [ 'one', 'two', 'three' ] => 'three'

getLongestString = (arr) => {
    if(!arr.length) {
        return null
    }
    const longestStr = arr.sort((a, b) => b.length - a.length);
    return longestStr[0]
}


