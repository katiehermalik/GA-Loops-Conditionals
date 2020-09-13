// //-------------- Easy Going -------------- //

// for (i = 1; i <= 20; i++) {
//   console.log(i);
// }

// //--------------- Get Even -------------- //

// for (i = 0; i <= 200; i += 2) {
//   console.log(i);
// }

// //--------------- Excited Kitten -------------- //

// for (i = 0; i < 20; i++) {
//   if (i % 2 === 0) {
//     const catTalk = Math.floor(Math.random() * 3);
//     if (catTalk === 0) console.log('Human...why you taking pictures of me?');
//     else if (catTalk === 1) console.log('The catnip made me do it.');
//     else console.log('Why does the red dot always get away?');
//   } else {
//       console.log('Love me, pet me! HSSSSSSS');
//   }
// }

// //------------------ Fizz Buzz ---------------- //

// for (i = 1; i <= 100; i++) {
//   if (i % 15 === 0) console.log('FizzBuzz');
//   else if (i % 3 === 0) console.log('Fizz');
//   else if (i % 5 === 0) console.log('Buzz');
//   else console.log(i);
// }

// //------------- Getting to Know You ------------ //

// const kenny = ["Kenny", 1000, "Austin"];
// const jimHaff = ["Jim H", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const jimClark = ["Jim C", 186, "LA"];
// const ryan = ["Ryan", 65, "Denver"];

// // 1

// kenny.splice(0, 1, "Gameboy");
// console.log(kenny);

// // 2

// jimClark.splice(1, 1, (jimClark[1]+1));
// console.log(jimClark);

// // 3

// ryan[2] = "Gotham City";
// console.log(ryan);

// // 4

// reuben.pop();
// console.log(reuben);
// reuben.push("Chicago");
// console.log(reuben);

// // 5

// jimHaff.pop();
// console.log(jimHaff);
// jimHaff.push("Chicago", "Bisbee", "Los Angeles");
// console.log(jimHaff);

// // 6

// jimHaff.splice(2, 1);
// console.log(jimHaff);

// //--------Yell at the Ninja Turtles -------- //

// const turtleArray = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

// // 1

// for(i = 0; i < turtleArray.length; i++) {
//   console.log(turtleArray[i].toUpperCase());
// }

// // 2

// for(i = 0; i < turtleArray.length; i++) {
//   const shout = turtleArray[i].toUpperCase();
//   turtleArray.splice(i, 1, shout);
// }
// console.log(turtleArray);

// // 3 - bonus (incomplete)

// for(i = 0; i < turtleArray.length; i++) {
//   for(j = 0; j < turtleArray[i].length; j++) {
//     if (turtleArray[i].charAt[j] % 2 === 0) {
//       const capitol = turtleArray[i].charAt[j].toUpper();
//       turtleArray[i].charAt[j].splice(j, 1, capitol);
//     }
//   }
// }
// console.log(turtleArray);

// //--------------- Return of the Closets ----------------- //

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];

// // // Alien Attire
// const kristynsShoe = kristynsCloset.shift();
// console.log(kristynsCloset);
// thomsCloset[2].unshift(kristynsShoe);
// console.log(thomsCloset[2]);

// // // Dress'em
// // ------ (I am assuming Kristyn's left shoe is no longer in thomsCloset (comment out code above.))
// // ------ (I am also assuming Kristyn and Thom can only wear items from their own closets.)
// // ------ (I am also assuming an outfit is made up of 3 items (top, bottom, and accessory) and that the outfit must be "socially acceptable" (i.e. must have top and bottom at least).)

// const kristynsTop = kristynsCloset.splice(3, 1);
// const kristynsBtm = kristynsCloset.splice(3, 1);
// for (i = 1; i < 4; i++) {
//   const kristynsAcc = kristynsCloset[Math.floor(Math.random()*5)];
//   console.log('Kristyn, here is an outfit option:\n' + i + '.' + ' Your ' + kristynsTop + ', the ' + kristynsBtm + ', and your ' + kristynsAcc + '.')
// }

// for (i = 1; i < 4; i++) {
//   const a = thomsCloset[0][Math.floor(Math.random()*4)]
//   const b = thomsCloset[1][Math.floor(Math.random()*3)]
//   const c = thomsCloset[2][Math.floor(Math.random()*3)]
//   console.log('Thom, here is an outfit option:\n' + i + '.' + ' A ' + a + ', some ' + b + ', and your ' + c + '.')
// }

// // // Dirty Laundry
// for (i = 0; i < kristynsCloset.length; i++) {
//   console.log('WHIRR: Now washing ' + kristynsCloset[i] + '.')
// }
 
// // // Inventory
// for (i = 0; i < thomsCloset.length; i++) {
//   if (i === 0) console.log('These are Thom\'s shirts: ' + thomsCloset[i]);
//   else if (i === 1) console.log('These are Thom\'s pants: ' + thomsCloset[i]);
//   else console.log('These are Thom\'s accessories: ' + thomsCloset[i])
// }

// //--------------- Multiples of 3 and 5 ----------------- //

// const sumArray = []
// for (i = 1; i < 1000; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     sumArray.push(i);
//   }
// }
// console.log(sumArray.reduce((a,b) => a + b, 0));
