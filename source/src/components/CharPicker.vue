<template>
<v-container grid-list-md>
  <v-layout row wrap>
    <span v-for="(slot, idx) in slots" :key="`${slot.name}${idx}`">
      <v-avatar @click="onSlotClicked(slot)">
        <img :src="slot.potrait" alt="Not Found!">
      </v-avatar>
    </span>
  </v-layout>
  <v-layout row wrap>
    <span v-for="char in charlist" :key="char.name">
      <v-avatar @click="onCharClicked(char)">
        <img :src="char.potrait" alt="Not Found!">
      </v-avatar>
      <p>{{char.name}}</p>
    </span>
  </v-layout>
  <v-layout row wrap>
    <v-form>
      <v-select
        v-model="selectedChar.rarity"
        :items="[
          {value:'N', text:'N'},
          {value:'R', text:'R'},
          {value:'SR', text:'SR'},
          {value:'SSR', text:'SSR'}]"
        label="Rarity"
      ></v-select>
      <v-text-field
        v-model="selectedChar.level"
        label="Level"
      />
      <v-btn color="info">Add</v-btn>
    </v-form>
  </v-layout>
</v-container>
</template>

<script>
import CharList from '@/models/CharacterList'
import Character from '@/models/Character'

export default {
  name: 'CharPicker',
  data() {
    return {
      slots: [
        new Character('', 'white', null, []),
        new Character('', 'black', null, []),
        new Character('', 'gold', null, []),
        new Character('', 'advisor', null, []),
        new Character('', 'advisor', null, []),
      ],
      charlist: [],
      selectedChar: {
        rarity: 'SSR',
        level: 60
      }
    }
  },
  methods: {
    onSlotClicked(slot) {
      this.charlist = CharList[slot.position].filter(x => true)
    },
    onCharClicked(char) {

    }
  }
}
</script>
