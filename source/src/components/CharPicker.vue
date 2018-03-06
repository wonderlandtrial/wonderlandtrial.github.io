<template>
<v-container grid-list-md>
  <v-layout row wrap>
    <span v-for="(slot, idx) in slots" :key="`${slot}${idx}`">
      <v-avatar @click="onSlotClicked(slot)">
        <img src="/static/apple-touch-icon-180x180.png" alt="avatar">
      </v-avatar>
    </span>
  </v-layout>
  <v-layout row wrap>
    <span v-for="char in charlist" :key="char.name">
      <v-avatar @click="onCharClicked(char)">
        <img src="/static/apple-touch-icon-180x180.png" alt="avatar">
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

export default {
  name: 'CharPicker',
  data() {
    return {
      slots: [
        'white', 'black', 'gold', 'advisor', 'advisor'
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
      this.charlist = CharList[slot].filter(x => true)
    },
    onCharClicked(char) {

    }
  }
}
</script>
