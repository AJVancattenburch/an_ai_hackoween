//rm_4-done, rm_5-done, rm_2-done, rm_3-done, rm_6-done, rm_7-done, 

//Question 1 rm_4

// The magic merchant has lost his abacus! All he has is a magic scroll that accepts Javascript, but he doesn't know any.
// User your magic javascript skills to create a function that does basic math operators.

// Examples

// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7
// ('**', 42, 2) --> 1764
// ('%', 21312323, 63)

// Questions | Answer

// What is the remainder of 23341 / 35? | 31, 35
// What is 23 raised to the 4th degree? | 279,841

// Example solution
function basicOp(operation, value1, value2)
{
  switch(operation){
   case '+':
      return value1 + value2;
      console.log(value1 + value2);
      break;
   case '-':
      return value1 - value2;
      break;
   case '*':
      return value1 * value2;
      break;
   case '/':
      return value1 / value2;
      break;  
   case '**': 
      return value1 ** value2;
      break;
   case '%':
      return value1 % value2;
      break;
   default: return "Error"; 
  } 
}

//Question 2 rm_5
//The most loyal knight has gotten sick with the flu! The spirit healer has a magic spell that is a special sentance.
//She needs to remove every vowel from the sentence to write the true spell on a scroll, and save the loyal knight.

function disemvowel(str){
    let vowels = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U'];
    let splitString = str.split('');
    let noVowels = [];
    for(let i = 0; i < splitString.length; i++){
       if(!vowels.includes(splitString[i])){
          noVowels.push(splitString[i])
       }
       //console.log("Vowel")
    } 
    return noVowels.join('');
 }
 
 string = disemvowel("No offense but,\nYour writing is among the worst I've ever read");
 console.log(string)
 
 function d2(str){
    return str.replace(/[aeiou]/gi, '');
 }
 
// console.log(d2("Hello")) --> Hll
// console.log(d2("healthefluplease")) --> hlthflpls

// console.log(d2("fqw9adieuhw9owe")) --> fqw9dhw9w

//rm-2

// You have entered the Humble Baker's kitchen. You find a puzzle scroll with the following instructions:"
// I am making a cake for the King! I have the width, length, and height of it; but I must know the volume!
// Write a function that takes in an array as an argument, the array will contain 3 integers in the following order [width, length, height]
// As a bonus, calculate the surface area of the cake!

// Requirements
// The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

// Define these methods:

// `getWidth()` return the width of the `Block`

// `getLength()` return the length of the `Block`

// `getHeight()` return the height of the `Block`

// `getVolume()` return the volume of the `Block`

// `getSurfaceArea()` return the surface area of the `Block`
// Examples
//     let b = new Block([2,4,6]) -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`
//     b.getWidth() // -> 2
    
//     b.getLength() // -> 4
    
//     b.getHeight() // -> 6
    
//     b.getVolume() // -> 48
    
//     b.getSurfaceArea() // -> 88
// Note: no error checking is needed

// Any feedback would be much appreciated



class Block {
    constructor(data){
       this.width = data[0];
       this.length = data[1];
       this.height = data[2];
    }
    getWidth(){
       return this.width;
    }
    getLength(){
       return this.length;
    }
    getHeight(){
       return this.height;
    }
    getVolume(){
       return this.width * this.length * this.height;
    }
    getSurfaceArea(){
       return 2 * this.width * this.length +
       2 * this.length * this.height +
       2 * this.height * this.width;
    }
 }
 
 let block = new Block([23,42,65]);
 block.getWidth()//?;
 block.getLength();//?
 block.getHeight();//?
 block.getVolume();//?
 //Block Volume = 62790
 block.getSurfaceArea();//?
 //Block Surface Area = 10382

//rm_3 

// The Mason's Apprentice is tasked with building a carriage, you need to figure out how many people will still be on the carriage after it's last trip.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the carriage (the first item) and the number of people that get off the carriage (the second item) at a bus stop.

// Your task is to return the number of people who are still on the carriage after the last stop (after the last array). 

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// // describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//      assert.strictEqual(number([[10,0],[3,5],[5,8]]),5);
//      assert.strictEqual(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
//      assert.strictEqual(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
//      assert.strictEqual(number([[0,0]]),0);
//    });
// });

function number(arr){
    console.log(arr)
    let people = 0;
    for(let i = 0; i < arr.length; i++){
       people += arr[i][0];
       people -= arr[i][1]
       //return arr[i][i];
       console.log(arr[i][1]);
       console.log(arr[i][0]);
       console.log(people);
    }
    console.log(people);
    return people;
 }
 
 number([[10,0],[3,5],[5,8]]);
 //5
 number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]);
 //17
 

//rm_6

//In the chivalrous ambiance of the knights' barracks, you are summoned to create a program that calculates the summation of numbers from 1 to num, 
//embodying the knightly virtues of precision and discipline, and showcasing your mathematical prowess to earn your place among the noble ranks. 
// For instance, for num = 8, the expected result is 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8).

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

var summation = function (num) {
    let total = 0;
    for(let i = 1; i <= num; i++){
       total += i;
    }
    return total;   
  }
 
summation(8);
//36
summation(10);
//55

//rm_7

//In the mystical chamber of the wizard, a challenge awaits those who seek to discern the outcome of a magical duel. 
//Craft a conjuring code that, like the casting of spells, determines the winner when two elements, "p1" and "p2," 
//are pitted against each other in a rock-paper-scissors battle, and watch as the mystical scrolls unveil the victor's name.

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) =>{
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    if(p2 == p1){
       return "Draw!";
    }
    if(p1 == rock && p2 == scissors){
       return "Player 1 won!"
    } else if (p1 == paper && p2 == rock){
       return "Player 1 won!"
    } else if (p1 == scissors && p2 == paper){
       return "Player 1 won!"
    } else if(p2 == rock && p1 == scissors){
       return "Player 2 won!"
    } else if (p2 == paper && p1 == rock){
       return "Player 2 won!"
    } else if (p2 == scissors && p1 == paper){
       return "Player 2 won!"
    }
 }
 
 rps("scissors", "rock");
 console.log(rps("scissors", "paper"))
 //Player 1

//rm_9 
// DESCRIPTION: Your final puzzle requires you to  Check to see if a string has the same amount of 'x's and 'o's. 
//The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(data){
    let xCount = 0;
    let oCount = 0;
    let isEqual = false;
    let splitData = data.toLowerCase().split('');
    //console.log(splitData);
    splitData.forEach(letter => {
       if(letter == "x"){
          xCount++;
       } else if(letter == "o"){
          oCount++;
       }
    })
    if(xCount > 0 || oCount > 0){
       if(xCount == oCount){
          isEqual = true;
       } else if(xCount != oCount){
          isEqual = false;
       }
    }
    if(splitData.length == 0){
       isEqual = true;
    }
    return (isEqual);
 }

 XO("ZOXCIJOZXIJCIOXCJZOCZXJ")
 //true
 