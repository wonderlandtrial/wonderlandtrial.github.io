<template>
<v-container grid-list-md>
  <v-layout row wrap>
    <v-flex xs12 v-for="(comp, idx) in comps" :key="idx">
      <span v-for="(slot, idx) in comp.characters" :key="`${slot.name}${idx}`">
        <div style="display: inline-block;">
          <v-avatar @click="onSlotClicked(slot)">
            <img :src="slot.potrait" alt="Not Found!">
          </v-avatar>
          <div>Description</div>
        </div>
      </span>
    </v-flex>
  </v-layout>

  <v-layout row wrap>
    <span v-for="(slot, idx) in slots" :key="`${slot.name}${idx}`">
      <v-avatar @click="onSlotClicked(slot, idx)">
        <img :src="slot.potrait" alt="Not Found!">
      </v-avatar>
    </span>
  </v-layout>
  <v-layout row wrap>
    <span v-for="char in charlist" :key="char.name">
      <v-avatar @click="onCharClicked(char, charlist.index)">
        <img :src="char.potrait" alt="Not Found!">
      </v-avatar>
      <p>{{char.name}}</p>
    </span>
  </v-layout>

  <v-layout row wrap v-show="charlist.length>0">
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
    </v-form>
    <v-form>
      <v-text-field
        label="No. Turns"
      />
      <v-text-field
        label="Note"
      />
      <v-text-field
        label="No. Battles"
      />
      <v-text-field
        label="Battle Notes"
      />
    </v-form>
    <v-btn color="info" @click="onAddClicked">Add</v-btn>
  </v-layout>
</v-container>
</template>

<script>
import CharList from '@/models/CharacterList'
import Character from '@/models/Character'
import TeamComp from '@/models/TeamComp'

export default {
  name: 'CharPicker',
  data() {
    return {
      slots: [
        new Character('', 'white', null, []),
        new Character('', 'black', null, []),
        new Character('', 'gold', null, []),
        new Character('', 'advisor', null, []),
        new Character('', 'advisor', null, [])
      ],
      charlist: [],
      selectedChar: {
        rarity: 'SSR',
        level: 60
      },
      comps: [ ]
    }
  },
  methods: {
    onSlotClicked(slot, idx) {
      this.charlist = CharList[slot.position].filter(x => true)
      this.charlist.index = idx
    },
    onCharClicked(char, idx) {
      this.slots.splice(idx, 1, char)
    },
    onAddClicked() {
      this.comps.push(new TeamComp(
        null, null, null, null, [...this.slots]
      ))
    }
  }
}
</script>
