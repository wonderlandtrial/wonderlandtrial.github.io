import { expect } from 'chai'
import Character from '@/models/Character'

describe('Character', () => {
  it('constructor', () => {
    let char = new Character('Crushfang', 'gold')

    expect(char.name).to.equal('Crushfang')
    expect(char.position).to.equal('gold')
  })
  it('getPotraitPath', () => {
    let char = new Character('Crushfang', 'gold')

    expect(char.getPotraitPath()).to.equal('crushfang')
  })
  it('create generic character', () => {
    let char = new Character('', 'white')

    expect(char.potrait).to.equal('/static/assets/potraits/white_potrait.png')
  })
  it('create unknown character', () => {
    let char = new Character('', 'xx')

    expect(char.potrait).to.equal('/static/assets/potraits/logo.jpg')
  })
  it('create specific character', () => {
    let char = new Character('Angelia', 'white')

    expect(char.potrait).to.equal('/static/assets/potraits/angelia_potrait.png')
  })
})
