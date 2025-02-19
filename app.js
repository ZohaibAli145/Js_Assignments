// Question 03

// var city = prompt("Enter the city name:");

//     if (city.toLowerCase() === "karachi") {
//       alert("Welcome to city of lights!.");
//       document.write("Welcome to city of lights!.");
//     } else {
//       alert("Welcome to " + city + "!");
//       document.write("Welcome to " + city + "!.");
//     }

// question 7

// var remainingFuel = parseFloat(prompt("Enter remaining fuel in litres: e.g., 0.35. less than 0.25 is dangerous."));

//   if (remainingFuel <= 0.25) {
//     alert("Please refill the fuel in your car.");
//     document.write("Please refill the fuel in your car.");
//   }

//   else if (remainingFuel >= 0.25){
//     alert("Go drive");
//     document.write("Fuel ha");
//   }

//   else {
//     document.write("You have enough fuel.");
//     alert("You have enough fuel.");
//   }

// Question 2
// var input = prompt("Enter a number:");

// if (input === "" || input === null) {
//   input = 5;
// }

// var number = +input;

// document.write("<h2>Multiplication Table of " + number + "</h2>");
// for (var i = 1; i <= 10; i++) {
//   document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }

//  Question 1
// var name = prompt("Please enter your name:");

// if (name) {
//     document.write("Hello, " + name + "! Welcome.");
//     alert("Hello, " + name + "! Welcome.");
//   }
// else {
//   document.write("You did not enter a name.");
//   alert("You did not enter a name.");
// }


// Question 03
// var priceTShirt = 1000; // Price of T-shirt in PKR
//         var quantityTShirt = 2; // Quantity of T-shirts ordered

//         var priceUSB = 700; // Price of USB flash drive in PKR
//         var quantityUSB = 3; // Quantity of USB flash drives ordered

//         var shippingCharges = 250; // Shipping charges in PKR

//         // Calculate total cost and discounted price
//         var totalCost = (priceTShirt * quantityTShirt) + (priceUSB * quantityUSB) + shippingCharges;
//         var discount = 550; // Discount in PKR
//         var discountedPrice = totalCost - discount;

//         // Display alerts
//         alert("Price of T-shirt is " + priceTShirt + " PKR.");
//         alert("Quantity of T-shirt is " + quantityTShirt + ".");
//         alert("Price of USB flash drive is " + priceUSB + " PKR.");
//         alert("Quantity of USB flash drive is " + quantityUSB + ".");
//         alert("Shipping charges are " + shippingCharges + " PKR.");
//         alert("Total cost of your order is " + totalCost + " PKR.");
//         alert("Discount is " + discount + " PKR.");
//         alert("Discounted price is " + discountedPrice + " PKR.");

//         // Display results using document.write
//         document.write("Price of T-shirt is " + priceTShirt + " PKR.<br>");
//         document.write("Quantity of T-shirt is " + quantityTShirt + ".<br>");
//         document.write("Price of USB flash drive is " + priceUSB + " PKR.<br>");
//         document.write("Quantity of USB flash drive is " + quantityUSB + ".<br>");
//         document.write("Shipping charges are " + shippingCharges + " PKR.<br>");
//         document.write("Total cost of your order is " + totalCost + " PKR.<br>");
//         document.write("Discount is " + discount + " PKR.<br>");
//         document.write("Discounted price is " + discountedPrice + " PKR.<br>");



// Question 8
// var a = 4; if (++a === 5) {
//   alert("given condition for variable a is true");
//   document.write("given condition for variable a is true"+"<br>");
// }

// var b = 82; if (b++ === 83) {
//   alert("given condition for variable b is true");
//   document.write("given condition for variable b is true"+"<br>");
// }

// var c = 12; if (c++ === 13) {
//   alert("condition 1 is true");
//   document.write("condition 1 is true"+"<br>");
// } if (c === 13) {
//   alert("condition 2 is true");
//   document.write("condition 2 is true"+"<br>");
// } if (++c < 14) {
//   alert("condition 3 is true");
//   document.write("condition 3 is true"+"<br>");
// } if (c === 14) {
//   alert("condition 4 is true");
//   document.write("condition 4 is true"+"<br>");
// }

// var materialCost = 20000; var laborCost = 2000;
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
//   document.write("The cost equals"+"<br>");
// }

// if (true) {
//   alert("True");
//   document.write("True"+"<br>");
// } if (false) {
//   alert("False");
//   document.write("False"+"<br>");
// }

// if ("car" < "cat") {
//   alert("car is smaller than cat");
//   document.write("car is smaller than cat"+"<br>");
// } 


// Question 11
// const secretNumber = Math.floor(Math.random() * 10) + 1;

//     // Get user input for their guess
//     const userGuess = parseInt(prompt(`Guess the secret number (between ${secretNumber} and 10):`));

//     // Check the user's guess
//     if (userGuess === secretNumber) {
//       alert("Bingo! Correct answer.");
//       document.write("Bingo! Correct answer.");
//       document.get
//     } else if (userGuess + 1 === secretNumber) {
//       alert("Close enough to the correct answer.");
//       document.write("Close enough to the correct answer.");
//     } else {
//       alert("Sorry, that's not correct.");
//       document.write("Sorry, that's not correct.");
//     }


// Question 12

// const number = parseInt(prompt("Enter a number to check divisble by 3:"));

// if (isNaN(number)) {
//   console.log("Invalid input. Please enter a number.");
// } else if (number % 3 === 0) {
//   console.log(`${number} is divisible by 3.`);
//   document.write(`${number} is divisible by 3.`);
// } else {
//   console.log(`${number} is not divisible by 3.`);
//   document.write(`${number} is not divisible by 3.`);
// }


// Question 14
// var myString = "Hello, class!";
// var myNumber = 40;
// var myBoolean = false;

// // Displaying types using alert and document.write
// alert(`Type of myString: ${typeof myString}`);
// document.write(`Type of myString: ${typeof myString} <br>`);

// alert(`Type of myNumber: ${typeof myNumber}`);
// document.write(`Type of myNumber: ${typeof myNumber} <br>`);

// alert(`Type of myBoolean: ${typeof myBoolean}`);
// document.write(`Type of myBoolean: ${typeof myBoolean} <br>`);
