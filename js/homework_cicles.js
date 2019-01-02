// // Задание 1.

let a = 'i am in the easycode';
let b = '';

for ( i = 0; i < a.length; i++) {
    b += (a[i - 1] == ' ') ? a[i].toUpperCase() : a[i];
    
}  

console.log(b);




// // Задание 2.

// let str = 'tseb eht ma i';

// let newStr = '', i;
// for (i = str.length - 1; i >= 0; i--) {
//     newStr += str.charAt(i);
// }

// console.log(newStr);



// // Задание 3.

// let fact = 1;

// for (i = 1; i<=10; i++) {
//     fact = fact*i;
//     console.log (fact);
// }





// // Задание 4.

// let x = 'JavaScript is a pretty good language';
//  let y = '';


// for ( i = 0; i < x.length; i++) {
//     y += ' ' != x[i] ? i && ' ' != x[i - 1] ? x[i] : x[i].toUpperCase() : '';
// }

// console.log(y);







// // Задание 5. 


// for (let i = 1; i <= 15; i++) {
//     if (i%2 !=0) {
//         console.log(i);
//     }
// }




// // Задание 6.

// let list = {
//     name: 'denis',
//     work: 'easycode',
//     age: 29
// }

// for (let key in list) {
//     if (typeof list[key] === "string") {
//        list[key] = list[key].toUpperCase();
//        console.log(list[key]);
//     } else {
//         list[key] = list[key];
//         console.log(list[key]);
//     }
// }
 