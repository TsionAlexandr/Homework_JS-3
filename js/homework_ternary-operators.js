
// // Задача 1.

let x = 'visible';

// if (x === 'hidden') {
//     x = 'visible';
// } else {
//     x = 'hidden';
// }

x === 'hidden' ?  x = 'visible' : x = 'hidden';


console.log (x);



// // задача 2.

let y = 0;

// if (y === 0) {
//     y = 1;
// } else if (y < 0) {
//     y = 'less then zero';
// } else { 
//     y *= 10;
// }

y === 0 ? y = 1 : y < 0 ?  y = 'less then zero' : y *= 10;

console.log (y);


//  задача 3.

let car = { 
    name: 'Lexus', 
    age: 10, 
    create: 2008, 
    needRepair: false 
};

// if (car.age > 5) {
//     car['needRepair'] = true;
//     console.log ('Need Repair');
// } else {
//     car['needRepair'] = false;
// }

car.age > 5 ? car['needRepair'] = true : car['needRepair'] = false;


console.log (car);