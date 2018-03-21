class Character {
  constructor(
    name = '',
    position = 'monster',
    skins = []
  ) {
    this.name = name
    this.position = position
    this.skins = skins

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
      this.potrait = `/static/assets/potraits/${this.getPotraitPath()}_potrait.png`
    }
  }

  getPotraitPath() {
    return this.name.toLocaleLowerCase().split(' ').join('_')
  }
}

export default Character
