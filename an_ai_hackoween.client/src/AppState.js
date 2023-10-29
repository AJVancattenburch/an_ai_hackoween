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
      ooi: ['rm_5'],
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
      name: 'Chipped Skull',
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
      name: 'Kings evidence',
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
      name: 'Queens evidence',
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
      name: 'Hollow CodeWorks Emblem',
      description: 'Hollow CodeWorks Emblem',
      type: 'bobble',
      collected: false,
      image: 'src/assets/grimtol_icon_pack/png/logo.png'
    },
    {
      id: 'cw-solid',
      name: 'Authentic CodeWorks Emblem',
      description: 'Authentic CodeWorks Emblem',
      type: 'bobble',
      collected: false,
      image: 'src/assets/grimtol_icon_pack/png/logo-alt.png'
    },
  ],
  image: {
  },
  prompt: [],
})
