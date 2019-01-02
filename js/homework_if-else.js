// // Задача 1.

let x = 'visible';

if (x === 'hidden') {
    x = 'visible';
} else {
    x = 'hidden';
}

console.log (x);


// // задача 2.

let y = 0;

if (y === 0) {
    y = 1;
} else if (y < 0) {
    y = 'less then zero';
} else { 
    y *= 10;
}

console.log (y);



//  задача 3.

let car = { 
    name: 'Lexus', 
    age: 10, 
    create: 2008, 
    needRepair: false 
};

if (car.age > 5) {
    car['needRepair'] = true;
    console.log ('Need Repair');
} else {
    car['needRepair'] = true;
}

console.log (car);


// задача 4.

let item = { 
    name: 'Intel core i7', 
    price: '100$',
    discount: '15%'   
};


if (parseFloat(item.discount) > 0 && parseFloat(item.discount) < 100) {
    item.priceWithDiscount = parseFloat(item.price) - parseFloat(item.discount) + '$';
    console.log (item.priceWithDiscount);
} else {
   console.log (item.price);
}


// задача 6.


let product = {
    name: 'Яблоко',
    price: '10$',    
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

if (parseInt(product.price,10) >= min && parseInt(product.price,10) <= max) {
    console.log (product.name);
} else {
    console.log ('товаров не найдено');
}



