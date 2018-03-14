import Character from '@/models/Character'

class TeamComp {
  constructor(
    turnTaken = 0,
    note = '',
    numBattles = 3,
    battleNotes = ['', '', ''],
    characters = [
      new Character('', 'white', null, []),
      new Character('', 'black', null, []),
      new Character('', 'gold', null, []),
      new Character('', 'advisor', null, []),
      new Character('', 'advisor', null, [])
    ]
  ) {
    this.turnTaken = turnTaken
    this.note = note
    this.numBattles = numBattles
    this.battleNotes = battleNotes
    this.characters = characters
  }
}

export default TeamComp
