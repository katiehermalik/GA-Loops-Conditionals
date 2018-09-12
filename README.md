![ga](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

# wdi-cc

---
Title: Arrays, Loops, and Conditional Reps <br>
Type: Homework<br>
Duration: "4:00"<br>
Creator: WDI-Funke<br>
    Modified by: Kristyn Bryan and then by: Reuben Ayres<br>
Competencies: Arrays, Loops, Conditionals <br>
Language: JavaScript <br>

---
# Homework

## Setup

0. Get in today's directory in your `salty-sardines` directory.

1. From inside of today's directory, *Fork* this repo and clone it. (While you're doing that, ask yourself: Why are we forking and cloning and not just cloning)?  

3. (Did you see this coming?) Inside the directory created by the clone, build our file structure (index.html and js file). Put your answers in `app.js`.

4. Keep your answers organized! Included a commented header for each section in your answers file.

5. If you're stuck on something for "too long" or get overly frustrated, make a comment and move on. Return to it later.

6. After each section (even if you're not fully done with it), *add* and *commit* your work. Use the commit messages that you see at the end of each section. If you go back and fix a section, commit again with an updated message.

7) When you are done with your homework, push to your fork and then and make a pull request.

Final notes: 
* You are not alone! Everyone else in the class is working on this as well. Communicate with each other.
* Remember: the "Bonus" questions and the "Hungry for More" questions don't count against you, they're just extra questions.

## Easy Going
1. Write a for loop that will log the numbers 1 through 20.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 1 - Easy Going answered"
<hr>

## Get Even
1. Write a `for` loop that will log only the even numbers in 0 through 200.
>Hint: Think about the increment expression.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 2 - Get Even answered"
<hr>

## Excited Kitten
1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

2. For every **even** number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

>Hint: You will need to use Math.random()

![Image of cat with funny quote about dot](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRETGsssSXu2AS15GpQIBhuSgkhP2q_4JZcPopN4dFP-v85mAePGA)

<hr>
&#x1F534; The commit message should read: <br>
"Commit 3 - Excited Kittens answered"
<hr>

## Fizz Buzz 

>NOTE: THIS IS A CLASSIC RITE-OF-PASSAGE FOR JAVASCRIPT PROGRAMMERS, ESPECIALLY ONES AT GA

1. Write a javascript application that logs all numbers from 1 - 100.

2. If a number is divisible by 3 log "Fizz" instead of the number.

3. If a number is divisible by 5 log "Buzz" instead of the number.

4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 4 - Fizz Buzz answered"
<hr>

## Getting to Know You
Use the following arrays to answer the questions below (name, age, hometown):
```javascript
const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];
```
1. Daniel decides that Shahzad can't be named "Shahzad" anymore. Remove "Shahzad" from the `shahzad` array and replace it with "Gameboy".

2. Daniel just had his birthday; change Daniel's array to reflect him being a year older.  Don't just hard code `187`--pretend that you don't know that his age is 186, and write your code to just make him a year older than whatever age he was.

3. Ryan is Batman maybe.  Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".

4. Reuben left Durham 5 years ago to come to Chicago. Remove "Durham" from Reuben's array and add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)

5. Jim could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but [see if you can do it in one line of code](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

6. Bonus: Whoops! Jim is actually only allowed to be in one of two cities.  Whatever the _first_ of the 3 cities for Jim is now, remove it from the array using [`.splice()`](https://www.google.com/search?q=mdn+splice&oq=mdn+splice&aqs=chrome.0.0j69i60j0l4.1078j0j7&sourceid=chrome&ie=UTF-8)

<hr>
&#x1F534; The commit message should read: <br>
"Commit 5 - Getting to Know You answered"
<hr>

## Yell at the Ninja Turtles
1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

2. Use a `for loop` to call `.toUpperCase()` on each of them and print out the result.

3. Bonus: Modify the answer you just wrote. Instead of all letters being uppercase, make the letters alternate back and forth between uppercase and lowercase.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 6 - Yell at the Ninja Turtles answered"
<hr>


## Return of the Closets

Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.

```javascript
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
```

### Alien Attire
1. Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable `kristynsShoe`. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

### Dress 'em Up
1. Modify your code to put together **3 separate outfits** for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!

<hr>
&#x1F534; The commit message should read: <br>
"Commit 7 - Kristyn and Thom have their outfits ready for class - array practice"
<hr>

### Dirty Laundry
Continue looking at the closet arrays:
1. Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.

### Inventory
2. Thom wants to do inventory on his closet. Using **bracket notation**, log the **arrays** (not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 8 - I loops through their closets".
<hr>

## Multiples of 3 and 5

_Yes, you might have tackled this earlier, but try it again (don't look back at your other code :eyes:)_

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the **sum** of all the multiples of 3 or 5 below 1000.

:clap: You just solved [Project Euler](https://projecteuler.net/problem=1) problem 1! :clap:

>Tip: Get used to thinking about how to solve problems _now_. Will help immensely with coding challenges, and get your coding brain muscles nice and flexed for the class. Make a habit of going to Project Euler and taking a crack at the problems

<hr>
&#x1F534; The commit message should read: <br>
"Commit 9 - Project Euler Problem 1 answered"
<hr>

---


# Hungry for more?

## Triangles

0. declare a variable `argument` and set it equal to 7.

1. Write a loop that console logs a "left isosceles" triangle (SEE BELOW) made of '#' that has the height and length of `argument`.

>Ex: `argument` is 7

```
#
##
###
####
#####
######
#######
```

2. Write a loop that console logs a "right isosceles" triangle (SEE BELOW) made of '#' that has the height and length of `argument`.  This is deceptively tricky. 

>Ex: `argument` is 7

```
      #
     ##
    ###
   ####
  #####
 ######
#######
```


3. Write a loop that console logs an "upside down left" isosceles triangle made of '#' that has the height and length of the argument.

>Ex: `argument` is 7

```
#######
######
#####
####
###
##
#
```

4. Write a loop that console logs an "upside down right" isosceles triangle made of '#' that has the height and length of the argument.  This is also tricky.

>Ex: `argument` is 7

```
#######
 ######
  #####
   ####
    ###
     ##
      #
```

5. Change the value of `argument` and reload your code and marvel at how you just solved a challenging problem and feel proud of yourself.

<hr>
&#x1F534; The commit message should read: <br>
"Commit 10 - Triangles answered"
<hr>

## Find the Median
- Find the median number in the following `nums` array, then console.log that number.
- _hint_ this will likely involve breaking down the problem into a few steps
-  _hint_: Click "Details" below (don't read this unless you've been stuck for a while) 
<details>
if you check the length of the array / 2, you might get not get a whole number. In which case, look into `Math.floor( // something )`
</details>

```javascript
const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18,12, 17, 12, 71, 18, 15, 12];

Expected output:
=> 15
```

<hr>
&#x1F534; The commit message should read: <br>
"Commit 11 - Find the Median answered"
<hr>


