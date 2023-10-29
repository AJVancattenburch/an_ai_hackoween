import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Room.js').Room} */
  activeRoom: {},
  rooms: [
    {
      id: 'rm_0',
      name: 'Mysterious Room',
      e: ['rm_1'],
      location: ['Mysterious Room', 'Interior'],
      npc: ['mysteriousStranger'],
      ooi: ['chippedSkull'],
      kind: 'Intro',
      description: ['Dark empty room'],
      steps: 4
    },
    {
      id: 'rm_1',
      name: 'Street',
      e: ['rm_0', 'rm_2', 'rm_3', 'rm_4'],
      location: ['Street', 'Exterior'],
      npc: ['townsFolk'],
      ooi: ['web'],
      kind: 'Scenario',
      description: ['Busy street'],
      steps: 2
    },
    {
      id: 'rm_2',
      name: 'Bakery',
      e: ['rm_1', 'rm_4', 'rm_7'],
      location: ['Bakery', 'Interior'],
      npc: ['humbleBaker'],
      ooi: [],
      kind: 'Scenario',
      description: ['Moldy bakery'],
      steps: 2
    },
    {
      id: 'rm_3',
      name: 'Masons',
      e: ['rm_1', 'rm_6'],
      location: ['Masons', 'Exterior'],
      npc: ['masonsApprentice'],
      ooi: ['gear'],
      kind: 'Scenario',
      description: ['Outside the masonry building'],
      steps: 2
    },
    {
      id: 'rm_4',
      name: 'Merchant',
      e: ['rm_1', 'rm_6'],
      location: ['Merchant', 'Interior'],
      npc: ['magicMerchant'],
      ooi: ['compass'],
      kind: 'Scenario',
      description: ['quite merchant store'],
      steps: 2
    },
    {
      id: 'rm_5',
      name: 'Healers House',
      e: ['rm_2', 'rm_7'],
      location: ['Healers House', 'Interior'],
      npc: ['spiritHealer'],
      ooi: [],
      kind: 'Scenario',
      description: ['medieval hospital with blood every where'],
      steps: 2
    },
    {
      id: 'rm_6',
      name: 'Barracks',
      e: ['rm_1', 'rm_3', 'rm_4', 'rm_8'],
      location: ['Barracks', 'Interior'],
      npc: ['loyalKnight'],
      ooi: ['kingEvidence'],
      kind: 'Scenario',
      description: ['Broken down barracks filled with empty armor'],
      steps: 2
    },
    {
      id: 'rm_7',
      name: 'Wizard Hut',
      e: ['rm_1', 'rm_2', 'rm_5', 'rm_8'],
      location: ['Wizard Hut', 'Interior'],
      npc: ['wiseWizard'],
      ooi: ['queenEvidence'],
      kind: 'Scenario',
      description: ['enchanted hut filled with magic trash'],
      steps: 2
    },
    {
      id: 'rm_8',
      name: 'Castle Grimtol',
      e: ['rm_6', 'rm_7', 'rm_9'],
      location: ['Castle Grimtol', 'Exterior'],
      npc: ['guard'],
      ooi: ['pentagram'],
      kind: 'Scenario',
      description: ['outside of the looming castle grimtol'],
      steps: 2
    },
    {
      id: 'rm_9',
      name: 'Castle Grimtol',
      e: ['rm_8', 'rm_10'],
      location: ['Caslte Grimtol', 'Intirior'],
      npc: ['king', 'queen', 'mysteriousStranger'],
      ooi: ['Books', 'letter', 'cw-outline'],
      kind: 'Scenario',
      description: ['Inside the yawning entrance of the castle'],
      steps: 2
    },
    {
      id: 'rm_10',
      name: 'Throne room',
      e: ['rm_9'],
      location: ['Throne room', 'Exterior'],
      npc: ['king', 'queen'],
      ooi: ['cw-solid'],
      kind: 'Scenario',
      description: ['the opulent throne room'],
      steps: 2
    }
  ],
  /** @type {import('./models/NPC.js').NPC} */
  activeNpc: {},
  npcs: [
    {
      id: 'mysteriousStranger',
      name: 'noone',
      portrait: '',
      knowsName: false,
      description: 'Mysterious',
      likes: '',
      dislikes: '',
      knowsOpinion: false
    },
    {
      id: 'townsFolk',
      name: ['bob', 'billy', 'brenda'],
      portrait: '',
      knowsName: false,
      description: 'castle town commoner',
      likes: '',
      dislikes: '',
      knowsOpinion: false
    },
    {
      id: 'humbleBaker',
      name: 'Thomas',
      portrait: 'src/assets/img/characters/Baker.jpg',
      knowsName: false,
      description: 'a very humble baker',
      likes: '',
      dislikes: '',
      knowsOpinion: false
    },
    {
      id: 'masonsApprentice',
      name: 'Marnie',
      portrait: 'src/assets/img/characters/Mason.png',
      knowsName: false,
      description: 'Over looked by everyone in town, becuase her master is older',
      likes: 'Foreign',
      dislikes: '',
      knowsOpinion: false
    },
    {
      id: 'magicMerchant',
      name: 'Jacob',
      portrait: 'src/assets/img/characters/Merchant.png',
      knowsName: false,
      description: 'A kind and gentle, round man',
      likes: 'Native',
      dislikes: '',
      knowsOpinion: false
    },
    {
      id: 'spiritHealer',
      name: 'angelica',
      portrait: 'src/assets/img/characters/Healer.png',
      knowsName: false,
      description: 'A soft spoken matronly woman, smells like incense',
      likes: '',
      dislikes: '',
      knowsOpinion: false
    },
    {
      id: 'loyalKnight',
      name: 'Fredrick',
      portrait: 'src/assets/img/characters/Knight.png',
      knowsName: false,
      description: 'Steadfast armor clad man of sharp wit and ideals',
      likes: '',
      dislikes: 'Foreign',
      knowsOpinion: false
    },
    {
      id: 'wiseWizard',
      name: 'jumblefloor',
      portrait: 'src/assets/img/characters/Wizard.png',
      knowsName: false,
      description: 'A tricky old man, untrust worthy',
      likes: 'Native',
      dislikes: '',
      knowsOpinion: false
    },
    {
      id: 'guard',
      name: ['Sam', 'Klaus', 'Clair'],
      portrait: '',
      knowsName: false,
      description: 'Caslte guard hand picked by the king',
      likes: '',
      dislikes: '',
      knowsOpinion: false
    },
    {
      id: 'king',
      name: 'Gustav',
      portrait: 'src/assets/img/characters/King.png',
      knowsName: false,
      description: 'King of Grimtol',
      likes: '',
      dislikes: '',
      knowsOpinion: false
    },
    {
      id: 'queen',
      name: 'Elizabeth',
      portrait: 'src/assets/img/characters/Queen.png',
      knowsName: false,
      description: 'Queen of Grimtol',
      likes: '',
      dislikes: '',
      knowsOpinion: false
    },
  ],
  /** @type {import('./models/NPC.js').NPC} */
  activeOoi: {},
  oois: [
    {
      id: 'chippedSkull',
      name: 'Skull',
      description: 'A skull with a chip in it',
      type: 'bobble',
      collected: false,
      image: 'src/assets/grimtol_icon_pack/png/smile.png'
    },
    {
      id: 'web',
      name: 'Web',
      description: 'A silvery web',
      type: 'bobble',
      collected: false,
      image: 'src/assets/grimtol_icon_pack/png/web.png'
    },
    {
      id: 'knife',
      name: 'Knife',
      description: 'A rusty knife with dried blood',
      type: 'bobble',
      collected: false,
      image: 'src/assets/grimtol_icon_pack/png/knife.png'
    },
    {
      id: 'gear',
      name: 'Gear',
      description: 'A single gear',
      type: 'bobble',
      collected: false,
      image: 'src/assets/grimtol_icon_pack/png/cog.png'
    },
    {
      id: 'gears',
      name: 'Gears',
      description: 'A couple of gears',
      type: 'bobble',
      collected: false,
      image: 'src/assets/grimtol_icon_pack/png/cogs.png'
    },
    {
      id: 'compass',
      name: 'Compass',
      description: 'A broken compass',
      type: 'bobble',
      collected: false,
      image: 'src/assets/grimtol_icon_pack/png/compass.png'
    },
    {
      id: 'hourglass',
      name: 'Hourglass',
      description: 'An antique hourglass',
      type: 'bobble',
      collected: false,
      image: 'src/assets/grimtol_icon_pack/png/time.png'
    },
    {
      id: 'potion',
      name: 'Potion',
      description: 'An obscure bottle of an unknown potion',
      type: 'bobble',
      collected: false,
      image: 'src/assets/grimtol_icon_pack/png/potion.png'
    },
    {
      id: 'kingEvidence',
      name: 'Evidence',
      description: 'Evidence of the Kings crimes',
      type: 'bobble',
      collected: false,
      image: 'src/assets/grimtol_icon_pack/png/picture.png'
    },
    {
      id: 'bleedingHeart',
      name: 'Bleeding Heart',
      description: 'A heart peirced by a nail',
      type: 'bobble',
      collected: false,
      image: 'src/assets/grimtol_icon_pack/png/heart.png'
    },
    {
      id: 'queenEvidence',
      name: 'Incrimination',
      description: 'Evidence of the Queens crimes',
      type: 'bobble',
      collected: false,
      image: 'src/assets/grimtol_icon_pack/png/paper_1.png'
    },
    {
      id: 'tome',
      name: 'Tome',
      description: 'A magical tome',
      type: 'bobble',
      collected: false,
      image: 'src/assets/grimtol_icon_pack/png/book.png'
    },
    {
      id: 'pentagram',
      name: 'Pentagram',
      description: 'A glowing pentagram',
      type: 'bobble',
      collected: false,
      image: 'src/assets/grimtol_icon_pack/png/pentagram.png'
    },
    {
      id: 'Books',
      name: 'Books',
      description: 'Books',
      type: 'bobble',
      collected: false,
      image: 'src/assets/grimtol_icon_pack/png/books.png'
    },
    {
      id: 'letter',
      name: 'Letter',
      description: 'A love letter',
      type: 'bobble',
      collected: false,
      image: 'src/assets/grimtol_icon_pack/png/mail.png'
    },
    {
      id: 'cw-outline',
      name: 'CodeWorks',
      description: 'Hollow CodeWorks Emblem',
      type: 'bobble',
      collected: false,
      image: 'src/assets/grimtol_icon_pack/png/logo.png'
    },
    {
      id: 'cw-solid',
      name: 'CodeWorkers',
      description: 'Authentic CodeWorks Emblem',
      type: 'bobble',
      collected: false,
      image: 'src/assets/grimtol_icon_pack/png/logo-alt.png'
    },
  ],
  image: {
  },
  prompt: [],
  puzzles: [
    {
      room: 'rm_4',
      description: `In the mystical emporium of the magic merchant, an urgent quest beckons. 
      Armed only with a mystical Javascript scroll, you are tasked with crafting a wondrous function that performs 
      basic mathematical operations, rescuing the merchant from the predicament of a lost abacus.`,
      question: 'What is the remainder of 23341 / 35?',
      example: `('%', 21312323, 63) --> 53`,
      answer: '31'
    },
    {
      room: 'rm_5',
      description: `Amidst the loyal knight's sickness, a dire situation unfolds within the realm. The spirit healer, 
      entrusted with a sacred incantation to cure the knight, must weave her magic to cleanse the sentence of 
      all vowels and inscribe the true spell onto a scroll to rescue the ailing knight.`,
      question: "Remove the vowels from the string 'oawgieuhfaiwueqw'.",
      example: `("Hello")) --> Hll`,
      answer: 'wghfwqw'
    },
    {
      room: 'rm_2',
      description: `You have entered the Humble Baker's kitchen. You find a puzzle scroll with the following instructions:
      I am making a cake for the King! I have the width, length, and height of it; but I must know the volume!
      Write a function that takes in an array as an argument, the array will contain 3 integers in the following order [width, length, height]
      As a bonus, calculate the surface area of the cake!`,
      question: 'Get the volume of a block with these dimensions! Block([23,42,65])',
      example: 'getLength() --> 42',
      answer: '62790'
    },
    {
      room: 'rm_3',
      description: `The Mason's Apprentice is tasked with building a carriage, you need to figure out how many people will still be on the carriage after its last trip.
      You are provided with a list (or array) of integer pairs. 
      Elements of each pair represent the number of people that get on the carriage (the first item) and the number of people 
      that get off the carriage (the second item) at a bus stop.
      Your task is to return the number of people who are still on the carriage after the last stop (after the last array). `,
      question: 'Calculate the people left after this series of trips: [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]',
      example: '[[10,0],[3,5],[5,8]] --> 5',
      answer: '17'
    },
    {
      room: 'rm_6',
      description: `In the chivalrous ambiance of the knights' barracks, you are summoned to create a program that calculates the summation of numbers from 1 to num, 
      embodying the knightly virtues of precision and discipline, and showcasing your mathematical prowess to earn your place among the noble ranks. `,
      question: 'What is the summation of 213?',
      example: 'summation(8) --> 36',
      answer: '22791'
    },
    {
      room: 'rm_7',
      description: `In the mystical chamber of the wizard, a challenge awaits those who seek to discern the outcome of a magical duel. 
      Craft a conjuring code that, like the casting of spells, determines the winner when two elements, "Player 1" and "Player 2" 
      are pitted against each other in a rock-paper-scissors battle, and watch as the mystical scrolls unveil the victor's name.`,
      question: `If player one chooses scissors and player two chooses rock, who wins?`,
      example: `("scissors", "paper") --> Player 1`,
      answer: 'Player 2'
    },
    {
      room: 'rm_9',
      description: `In your ultimate puzzle, a quest awaits to balance the cosmic forces of 'x' and 'o'. Craft a spellbound method that, 
      with unwavering case-insensitivity, ensures the string holds an equal number of these mystical characters, returning a boolean verdict 
      to maintain the harmony of the universe.`,
      question: `What does the string: 'ZOXCIJOZXIJCIOXCJZOCZXJ' return?`,
      example: `XO("xooxx") => false`,
      answer: 'True'
    }
  ]
})
