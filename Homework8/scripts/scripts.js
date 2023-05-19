//Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.

// const pElems = [100,90,80,70,60,50,40,30,20,10]
// const divNumbers = document.querySelector("div")
// for (let i = 0; i <= 5; i+= 1) {
//     const divElem = document.createElement("p") // <p></p>
//     divElem.innerText = pElems[i]
//     divNumbers.append(divElem)
    
    
// }
// console.log(pElems)


// const numbersDiv = document.querySelector('.numbers');
// for (let i = 100; i >= 50; i -= 10) {
//   const paragraph = document.createElement('p');
//   paragraph.textContent = i;
//   numbersDiv.appendChild(paragraph);
// }
// console.log(numbersDiv)

//Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container. Строки взять произвольные.


// const words = ['Janis', 'Ivar', 'Petjka', 'Max', 'Denis']

// const divStringConteiner = document.querySelector("div")
// for (let i = 0; i < words.length;i++) {
//     const wordsElem = document.createElement("p")
//     wordsElem.innerText = words[i]
//     divStringConteiner.append(wordsElem)
// }
// console.log(words)

//Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом users_container.

const personalParamiter = [
    {
        first_name: "Janis",
        last_name: "Brain",
        age: 26
    },
    {
        first_name: "Ivan",
        last_name: "Strong",
        age: 20
    },
    {
        first_name: "Max",
        last_name: "Slow",
        age: 14
    },
]



const personalParamiterSet = document.querySelector(".users_container")
for (let i = 0; i < personalParamiter.length; i++) {
    const{first_name,last_name,age} = personalParamiter[i]
    if( age >= 18) {
    const pfirst_name = document.createElement("p")
    pfirst_name.innerText = first_name
    const plast_name = document.createElement("p")
    plast_name.innerText = `Last name: ${last_name}`
    const page = document.createElement("p")
    page.innerText = `Age: ${age}`
    const divElem = document.createElement("div")
    divElem.append(pfirst_name,plast_name,age)
    personalParamiterSet.append(divElem)
    }
    
}

