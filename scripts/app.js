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

// ryan.splice(2, 1, "Gotham City");
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

// // 3 - bonus

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