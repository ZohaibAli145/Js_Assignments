// For loops


// Question 01;
// for(var i = 1; i <= 5; i++){
//     document.write('Hello World <br>')
// }

// Question 2;

// for( var i=1; i<= 10; i++ ){
//     document.write(i + "<br>")
// }

// Question 3;

// let num = +prompt("Enter the number to print its multiplication table:");
// let length = +prompt("Enter the length of the multiplication table:");

// for (let i = 1; i <= length; i++) {
//     document.write(`${num} x ${i} = ${num * i} <br>`);
// }

// Question 4

// let A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

// for (let i = 0; i < A.length; i++) {
//     document.write(A[i] + "<br>");
// }

// Question 5

// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (let i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>")
// }

// Question 6
// let N = +prompt("Enter the number of items:");
// let items = [];

// for (let i = 0; i < N; i++) {
   
//     let item = prompt(`Enter item ${i + 1}:`);
//     items.push(item); 
// }

//    document.write("Array of items:", items);

// Question 7
// a. Counting

// for (var i = 1; i <= 15; i++) {
//     document.write( i );
// }


// b. Reverse Counting

// for (var i = 10; i >= 1; i--) {

//     document.write( i);
// }


// // c. Even

// for (var i = 0; i <= 20; i += 2) {
// document.write(i);
// }


// // d. Odd

// for (var i = 1; i < 20; i += 2) {
// document.write(i);

// }


// // e. Series (2k, 4k, ..., 20k)

// for (var i = 2; i <= 20; i += 2) {
// document.write(i);
// }

// Question 9

// let A = [24, 53, 78, 91, 12];

// let largest = A[0]; 

// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i]; 
//     }
// }

// document.write("The largest number in the array is:", largest);

// Question 10

// let A = [24, 53, 78, 91, 12];


// let smallest = A[0]; 

// for (let i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i]; 
//     }
// }

// document.write("The smallest number in the array is:", smallest);

// Question 11;

// let A = [24, 53, 78, 91, 12];

// let largest = A[0];  
// let smallest = A[0]; 
// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
//     if (A[i] < smallest) {
//         smallest = A[i]; 
//     }
// }

// document.write("The largest number in the array is:", largest);
// document.write("The smallest number in the array is:", smallest);

// Question 12;
// for (let i = 5; i <= 100; i += 5) {
//     document.write(i);
// }

// Question 18

// Initialize product as 1 (since we are multiplying)
// let product = 1;
// for (let i = 1; i <= 7; i++) {
//     if (i % 2 !== 0) {
//         product *= i; 
//     }
// }
// document.write("Product of odd integers from 1 to 7 is: " + product);


