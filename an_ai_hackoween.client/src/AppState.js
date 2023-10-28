import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
<<<<<<< Updated upstream
  /** @type {import('./models/Room.js').Room} */
  activeRoom: {},
  rooms: [
    {
      id: 'rm_0',
      name: 'Mysterious Room',
      e: ['rm_1'],
      location: ['Mysterious Room', 'Interior'],
      npc: ['mysteriousMan'],
      ooi: ['chippedSkull'],
      kind: 'Intro',
      description: ['Dark empty room'],
      steps: 4
    },
    {
      id: 'rm_1',
      name: 'Street',
      e: ['rm_0', 'rm_2'],
      location: ['Street', 'Exterior'],
      npc: [],
      ooi: ['web'],
      kind: 'Scenario',
      description: ['Busy street'],
      steps: 2
    }
  ]
=======
  image: {
  }
>>>>>>> Stashed changes
})
