class Character {
  constructor(
    name = '',
    position = 'monster',
    potrait = '',
    descriptions = []
  ) {
    this.name = name
    this.position = position
    this.descriptions = descriptions

    if (!name) {
      if (position === 'gold') {
        this.potrait = '/static/assets/potraits/gold_potrait.png'
      } else if (position === 'black') {
        this.potrait = '/static/assets/potraits/black_potrait.png'
      } else if (position === 'white') {
        this.potrait = '/static/assets/potraits/white_potrait.png'
      } else {
        this.potrait = '/static/assets/potraits/logo.jpg'
      }
    } else {
      this.potrait = `/static/assets/potraits/${name.toLocaleLowerCase()}_potrait.png`
    }
  }
}

export default Character
