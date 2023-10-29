import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
export class Puzzle{
    constructor(data){
        this.room = data.room;
        this.description = data.description;
        this.question = data.question;
        this.example = data.example;
        this.answer = data.answer;
        this.pushToAppState()
    }
    pushToAppState(){
        AppState.puzzles.push(this)
        console.log("Pushed to appstate")
        logger.log("Pushed to appstate")
    }
}

const test = new Puzzle(4,4,4,4,4)

const rm_4 = new Puzzle({
    room: 4,
    description: `In the mystical emporium of the magic merchant, an urgent quest beckons. 
    Armed only with a mystical Javascript scroll, you are tasked with crafting a wondrous function that performs 
    basic mathematical operations, rescuing the merchant from the predicament of a lost abacus.`,
    question: 'What is the remainder of 23341 / 35?',
    example: '('%', 21312323, 63) --> 53',
    answer: '31'
})

const rm_5 = new Puzzle({
    room: 5,
    description: `Amidst the loyal knight's sickness, a dire situation unfolds within the realm. The spirit healer, 
    entrusted with a sacred incantation to cure the knight, must weave her magic to cleanse the sentence of 
    all vowels and inscribe the true spell onto a scroll to rescue the ailing knight.`,
    question: "Remove the vowels from the string 'oawgieuhfaiwueqw'.",
    example: `("Hello")) --> Hll`,
    answer: 'wghfwqw'
})

const rm_2 = new Puzzle({
    room: 2,
    description: `You have entered the Humble Baker's kitchen. You find a puzzle scroll with the following instructions:
    I am making a cake for the King! I have the width, length, and height of it; but I must know the volume!
    Write a function that takes in an array as an argument, the array will contain 3 integers in the following order [width, length, height]
    As a bonus, calculate the surface area of the cake!`,
    question: 'Get the volume of a block with these dimensions! Block([23,42,65])',
    example: 'getLength() --> 42',
    answer: '62790'
})

const rm_3 = new Puzzle({
    room: 3,
    description:  `The Mason's Apprentice is tasked with building a carriage, you need to figure out how many people will still be on the carriage after it's last trip.
    You are provided with a list (or array) of integer pairs. 
    Elements of each pair represent the number of people that get on the carriage (the first item) and the number of people 
    that get off the carriage (the second item) at a bus stop.
    Your task is to return the number of people who are still on the carriage after the last stop (after the last array). `,
    question: 'Calculate the people left after this series of trips: [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]',
    example: '[[10,0],[3,5],[5,8]] --> 5',
    answer: '17'
})

const rm_6 = new Puzzle({
    room: 6,
    description: `In the chivalrous ambiance of the knights' barracks, you are summoned to create a program that calculates the summation of numbers from 1 to num, 
    embodying the knightly virtues of precision and discipline, and showcasing your mathematical prowess to earn your place among the noble ranks. `,
    question: 'What is the summation of 213?',
    example: 'summation(8) --> 36',
    answer: '22791'
})

const rm_7 = new Puzzle({
    room: 7,
    description: `In the mystical chamber of the wizard, a challenge awaits those who seek to discern the outcome of a magical duel. 
    Craft a conjuring code that, like the casting of spells, determines the winner when two elements, "Player 1" and "Player 2" 
    are pitted against each other in a rock-paper-scissors battle, and watch as the mystical scrolls unveil the victor's name.`,
    question: `If player one chooses scissors and player two chooses rock, who wins?`,
    example: `("scissors", "paper") --> Player 1`,
    answer: 'Player 2'
})

const rm_9 = new Puzzle({
    room: 9,
    description:`In your ultimate puzzle, a quest awaits to balance the cosmic forces of 'x' and 'o'. Craft a spellbound method that, 
    with unwavering case-insensitivity, ensures the string holds an equal number of these mystical characters, returning a boolean verdict 
    to maintain the harmony of the universe.`,
    question: `What does the string: 'ZOXCIJOZXIJCIOXCJZOCZXJ' return?`,
    example: `XO("xooxx") => false`,
    answer: 'True'
})

console.log("Hello Puzzles")
AppState.puzzles.push(rm_2,rm_3,rm_4,rm_5,rm_6,rm_7, rm_9)