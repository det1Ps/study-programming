'use strict';

// console.log('Hello World!');

// Базовые операторы

// let sum = 1;
// const step = 3;

// sum = sum + step;
// console.log(sum);

// const width = 7;
// const hieght = 4;
// const space = width * hieght;

// console.log(`space of figure is ${space}`);

// Задание 1
// const price = 80;
// const calculationTime = 40 / 5 + 2;
// const salary = 80 * 40;
// const isTrue = calculationTime < 11;

// console.log(isTrue);
// console.log(salary);

// Задание 2
// const deposit = 12000;
// const rate = 0.07;
// const month = 24;
// const result = deposit * (1 + rate / 12) ** month;


// 5 Упраление потоком

// if (result > 13500) {
//     console.log('Выможете приобрести дом!');
//     console.log(`Остаток: ${result - 13500}`);
// } else {
//     console.log('Вам стоит подождать с покупкой');
// }

// const name = 'Dima';

// switch (name) {
//     case 'Sasha':
//         console.log('Your name Sasha!');
//         break;
//     case 'Dima':
//         console.log('Your name Dima!');
//         break;
//     default:
//         console.log(`Your name ${name}, but i do not know you!`);
// }

// Упражнение 3

// const userAnswer = prompt('Сколько будет 7 + или - 15?');
// const serverAnswer = userAnswer == 22 
//     ? 'Успех' 
//     : userAnswer == -8 
//     ? 'Успех' 
//     : userAnswer === 'Я не робот' 
//     ? 'Успех' : 'Вы робот!';
// console.log(serverAnswer);

// const userAnswer = prompt('Сколько будет 7 + или - 15?');
// switch (true) {
//     case userAnswer === 'Я не робот':
//     case Number(userAnswer) === -8:
//     case Number(userAnswer) === 22: 
//         console.log('Успех');
//         break;
//     default:
//         console.log('Вы робот!');
// }

// 6 Булевая логика

// Упражнение 4

// const balance = 1000;
// const bonusBalance = 10;
// const isBanned = false;
// const isExist = false;
// const isSelling = true;


// const canBuy = (balance >= 1000 || bonusBalance >= 100) 
//     && !isBanned 
//     && !isExist 
//     && isSelling;

// console.log(`Ваш статус покупки игры: ${canBuy}`);

// Функции

// function exponentiation (num, degree) {
//     return num ** degree;
// }

// const areaOfFigure = (length, hieght) => length * hieght;

// console.log(areaOfFigure(4, 8));
// console.log(exponentiation(3, 12));

// Задание 5

// const MC_PRICE = 2000;

// function credit (age, work) {
//     if (age >= 24 && work) {
//         return 500;
//     } else if (age >= 24) {
//         return 100;
//     }
//     return 0;
// }

// function canYouBuyMC (age, work, cache) {
//     const money = cache + credit(age, work);
//     return money >= MC_PRICE;
// }

// console.log(canYouBuyMC(24, true, 1500));   //true
// console.log(canYouBuyMC(21, false, 2000));  //true
// console.log(canYouBuyMC(27, false, 1900));  //true
// console.log(canYouBuyMC(21, false, 1500));  //false
// console.log(canYouBuyMC(24, true, 1000));   //false


// Массивы

// const roles = ['admin', 'user', 'guest', 'manager'];

// console.log(roles[roles.length - 1]);
// console.log(roles.at(-1));

// roles.push('superuser');
// roles.pop();
// roles.shift();
// roles.unshift('developer');

// if (roles.includes('user')) {
//     console.log('Вы можете позльзоваться компьютером');
// }

// const res = roles.slice(1, -1);
// console.log(res);

// const newRoles = ['sysadmin', 'developer', 'QA'];

// const res2 = roles.concat(newRoles);
// console.log(roles);
// console.log(res2);

// res2.reverse();
// console.log(res2);
// const res3 = res2.splice(1, 3);

// console.log(res2);
// console.log(res3);


// Задание 6 

// const tasks = ['Задача 1', 'работа', 'прогулка', 'учеба'];

// function addTask (newTask) {
//     tasks.push(newTask);
// }

// function deletTask (taskName) {
//     const index = tasks.indexOf(taskName);
//     if (index === -1) {
//         return;
//     }
//     tasks.splice(index, 1);
// }

// function transferTask (taskName) {
//     const index = tasks.indexOf(taskName);
//     if (index === -1) {
//         return;
//     }
//     taskName = tasks.splice(index, 1)[0];
//     tasks.unshift(taskName);
// }

// addTask('Сделать уборку');
// deletTask('прогулка')
// transferTask('работа');
// transferTask('учеба');

// console.log(tasks);

// Задача 7

// const url = 'https://purpleschool.ru/course/javascript';

// function getProtokol (url) {
//     const protokol = url.split('://');
//     return protokol[0];
// }

// function getDomen (url) {
//     const domen = url.split('/');
//     return domen[2];
// }

// function getWay (url) {
//     const way = url.split(getDomen(url));
//     return way[1];
// }

// console.log(getProtokol(url));
// console.log(getDomen(url));
// console.log(getWay(url));

// const url = 'https://purpleschool.ru/course/javascript';

// function getUrlParts(url) {
//     const [protokol, _, host, ...path] = url.split('/');
//     if (protokol === 'http:' || protokol === 'https:') {
//         if (!host.includes('.')) {
//             return;
//         }
//         console.log(`Протокол: ${protokol.split(':')[0]}`);
//         console.log(`Доменное имя: ${host}`);
//         console.log(`Путь внутри сайта: /${path.join('/')}`);
//     }
// }

// console.log(getUrlParts(url));

// const array =  ['!', 'JS', 'love', 'I']; 
// const newArray = [];

// for (let i = -1; i > -(array.length + 1); i--) {
//     newArray.push(array.at(i));
// }

// console.log(newArray.join(' '));

// Задание 8

// let balance = 100;
// const operations = ['gewgew', 1000, 'gdsfg', -700, 300, -500, 10000, 3453, -1597];

// function calcTotal (balance, operations) {
//     let total = balance;

//     for (let operation of operations) {
//         if (!Number(operation)) {
//             continue;
//         } else {
//             total += Number(operation);
//         }
//         if (total < 0) {
//             return false;
//         }
//     }

//     return `Ваш баланс составляет: ${total}`;
// }

// function calcAverage (operations) {
//     let [income, consumption] = [0, 0];
//     let [positivOp, negativeOp] = [0, 0];
//     for (let operation of operations) {
//         if (Number(operation) > 0) {
//             income += Number(operation);
//             positivOp++;
//         } else if (Number(operation) < 0) {
//             consumption += Number(operation);
//             negativeOp++;
//         } else {
//             continue;
//         }
//     }

//     return `Ваш доход составляет: ${income / positivOp}; \nВаш расход составляет: ${consumption / negativeOp};`;
// }

// console.log(calcTotal(balance, operations));
// console.log(calcAverage(operations));


// Задание 9

// const power = (power) => (num) => num ** power;

// console.log(power(4)(2));

// function power (power) {
//     return function (num) {
//         return num ** power;
//     }
// }

// const powerOfTwo = power(2);

// console.log(powerOfTwo(5));




// Самостоятельная работа

// function sum (num1, num2) {
//     return num1 + num2;
// }

// function subtraction (num1, num2) {
//     return num1 - num2;
// }

// function calculate (num1, num2, operation) {
//     return operation(num1, num2);
// }

// console.log(calculate(5, -12, sum));

// function toPower(power) {
//     return function (num) {
//         return num ** power;
//     }
// }

// const powerOfTwo = toPower(2);
// const powerOfFive = toPower(5);

// console.log(powerOfTwo(powerOfFive(3)));


// Упражнение 10

// const pricesUSD = [[100, 200], [120, 100], [300, 200], [150, 220]];

// const positivChange = pricesUSD.filter(product => product[0] < product[1]);
// const positivChangeAverage = pricesUSD.map(product => product[1] - product[0]);

// console.log(positivChange);
// console.log(positivChangeAverage);

// Упражнение 11

// const arr = [10, 4, 5, 17];

// const arrAverage = arr.reduce((acc, value, i) => {
//     if (i != arr.length - 1) {
//         return acc + value;
//     } else {
//         return (acc + value) / arr.length;
//     }
// }, 0);

// console.log(arrAverage);

// Упражнение 12

// const arr = [10, 4, 5, 17];

// function findElement(arr, num) {
//     const find = arr.find(el => el === num);
//     return find ? true : false;
// }

// console.log(findElement(arr, 4));

// Упражнение 13

// const fullUserName = 'Вася terminator Пупкин';

// const userName = fullUserName.slice(0, fullUserName.indexOf(' '));
// const userSurname = fullUserName.slice(fullUserName.lastIndexOf(' ') + 1);

// console.log(`Имя ${userName} Фамилия ${userSurname}`);


// Упражнение 14

// const num1 = '89103235356';
// const num2 = '+79103235356';
// const num3 = '+7(910)3235356';
// const num4 = '+7(910) 323-53-56';
// const num5 = ' +7(910) 323-53-56 ';
// const num1Error = '89103235';
// const num2Error = '+7d910d323-53-56';
// const num3Error = '9+7103235356';
// const num4Error = '89103g35356';

// function checkPhoneNumber (num) {
//     num = num.trim();
//     num = num.replace('+7', '8');
//     if (!num.startsWith('8')) {
//         return false;
//     }

//     num = num.replaceAll('(', '');
//     num = num.replaceAll(')', '');
//     num = num.replaceAll(' ', '');
//     num = num.replaceAll('-', '');

//     if (num.length !== 11) {
//         return false;
//     }

//     return !isNaN(Number(num));
// }

// console.log(checkPhoneNumber(num1));
// console.log(checkPhoneNumber(num2));
// console.log(checkPhoneNumber(num3));
// console.log(checkPhoneNumber(num4));
// console.log(checkPhoneNumber(num5));
// console.log(checkPhoneNumber(num1Error));
// console.log(checkPhoneNumber(num4Error));
// console.log(checkPhoneNumber(num2Error));
// console.log(checkPhoneNumber(num3Error));


// Упражнение 15

// const card = '2020020242125678';

// function maskCard (card) {
//     return card.slice(12).padStart(16, '*');
// }

// console.log(maskCard(card));



// const user = {
//     name: 'Dima',
//     surname: 'Dimdimich',
//     age: 20
// };

// console.log(user);

// user.age = 25;
// user.city = 'Moscow';

// console.log(user);


// Упражнение 16

// const users = [
//     {name: 'Sasha', age: 30},
//     {name: 'Max', age: 36},
//     {name: 'Dima', age: 25},
//     {name: 'Eva', age: 17}
// ];
// console.log(users.sort((a, b) => a.name || b.name));
// console.log(users.sort((a, b) => a.age - b.age));



// const users = [
//     {
//         name: 'Sasha', 
//         surname: 'Orlov',
//         age: 30,
//         hobby: ['Design', 'Working']
//     },
//     {
//         name: 'Dima', 
//         surname: 'Kolosov',
//         age: 25,
//         hobby: ['Codding']
//     },
//     {
//         name: 'Eva', 
//         surname: 'Kolosova',
//         age: 17,
//         hobby: ['Running', 'Working']
//     }
// ];

// console.log(users.map((user) => {
//     return {
//         fullname: `${user.name} ${user.surname}`,
//         hobbyNum: user.hobby.length
//     };
// }));

// Упражнение 17

// const wallet = {
//     balance: 0,
//     operations: [],
//     addOperation: function (reason, sum) {
//         if (this.balance + sum > 0) {
//             this.balance += sum;
//             this.operations.push({reason: reason, sum: sum});
//             return true;
//         }   else {
//             return false;
//         }
//     },
//     getOperationLength: function () {
//         return this.operations.length;
//     }
// };


// console.log(wallet.addOperation('Начисление зарплаты', 10000));
// console.log(wallet.addOperation('Покупка продуктов', -500));
// console.log(wallet.getOperationLength());
// console.log(wallet);


// Упражнение 18

// const warehouse = {
//     goods: [],
//     findGoodsById: function (id) {
//         return this.goods.find(good => id === good.id);
//     },
//     addGoods: function (good) {
//         const existedGood = this.findGoodsById(good.id);
//         if (existedGood) {
//             console.log('Товар уже есть на складе!');
//             return;
//         }
//         return this.goods.push(good);
//     },
//     getWeightKG: function () {
//         return this.goods.reduce((acc, good) => {
//             return acc += good.weight?.kg ? good.weight.kg : 0;
//         }, 0);
//     }
// }

// const car = {
//     id: 1,
//     weight: {
//         kg: 1000
//     },
//     brand: 'Ford'
// };

// const chair = {
//     id: 2,
//     weight: {
//         kg: 12
//     }
// };

// const paper = {
//     id: 3,
//     color: 'red'
// };

// warehouse.addGoods(car);
// warehouse.addGoods(car);
// warehouse.addGoods(chair);
// warehouse.addGoods(paper);

// console.log(warehouse.goods);
// console.log(warehouse.findGoodsById(1));
// console.log(warehouse.getWeightKG());


// function digitalRoot(n) {
//     n = n.toString();
  
//     while (n.length > 1) {
//         sum = 0
//         for (const i of n) {
//             sum += Number(i);
//         }
//         n = sum.toString();
//     }
  
//     return n;
// }


// Упражнение 19

// const company = {
//     name: 'ООО Арго',
//     employees: [
//         {
//             name: 'Света',
//             getName: function() {
//                 return this.name;
//             }
//         }
//     ],
//     ceo: {
//         name: 'Вася',
//         getName: function() {
//             return this.name;
//         }
//     },
//     getName: function() {
//         return this.name;
//     }
// }

// console.log(company.getName());
// console.log(company.ceo.getName());
// console.log(company.employees.map((employees) => employees.getName()));

// Упражнение 20

// const user1 = {
//     id: 1,
//     pasword: 'qwegfds'
// };

// function removePassword(reset) {
//     if (reset) {
//         this.pasword = undefined;
//     } else {
//         this.pasword = '1';
//     }
// }

// const removePasswordUser1 = removePassword.bind(user1);

// removePasswordUser1(true);
// console.log(user1);


// Упражнение 21

// const userInfo = {
//     balance: 0,
//     operations: 0,
//     increse(sum) {
//         this.balance += sum;
//         this.operations++;
//     }
// };

// function user () {
//     const userObj = {
//         balance: 0,
//         operations: 0,
//         increse(sum) {
//             this.balance += sum;
//             this.operations++;
//         }
//     };
   
//     return function() {
//         return userObj;
//     };
// }


// const user1 = user();
// const user2 = user();

// user1().increse(200);
// user1().increse(150);
// user2().increse(50);
// user2().increse(350);

// console.log(user1());
// console.log(user2());


// Работа с DOM

// const panelText = document.querySelector('.panel').innerText;
// console.log(panelText);


// document.querySelector('.panel').innerText = 'New text';
// document.querySelector('.input').value = 'Text';

// document.querySelector('.button').addEventListener('click', () => {
//     const input = document.querySelector('.input').value;

//     if (!input) {
//         return;
//     }

//     document.querySelector('.panel').innerText = input;
//     document.querySelector('.input').value = '';
// });

function submitForm() {
    const input = document.querySelector('.input').value;

    if (!input) {
        return;
    }

    document.querySelector('.panel').innerText = input;
    document.querySelector('.input').value = '';
}

function inputChanges(e) {
    if (e.code == 'Enter') {
        submitForm();
    }
}