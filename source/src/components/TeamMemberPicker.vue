<template>
<div>
  <div class="foundation">
    <char-avatar v-model="avatar" @mouseenter="onHover"></char-avatar>

    <div
      class="action-container"
      v-show="showAction"
      @mouseleave="onLeave">
      <div>
        <v-btn>Details</v-btn>
      </div>
      <div>
        <v-btn @click="showCharPicker">Edit</v-btn>
      </div>
    </div>

    <char-picker
      v-model="showPicker"
      :characters="charList"
      @selected="getSelectedChar"/>
  </div>
</div>
</template>

<script>
import Character from '@/models/Character'
import CharAvatar from '@/components/CharAvatar'
import CharPicker from '@/components/CharPicker'
import CharacterList from '@/models/CharacterList'

export default {
  name: 'TeamMemberPicker',
  components: {CharAvatar, CharPicker},
  props: ['value', 'type'],
  data() {
    return {
      avatar: new Character('Fatima', 'black', null, ['lorem', 'ipsum']),
      charList: CharacterList.advisor,
      showAction: false,
      showPicker: false
    }
  },
  methods: {
    onHover() {
      this.showAction = true
    },
    onLeave() {
      this.showAction = false
    },
    showCharPicker() {
      this.showPicker = true
    },
    getSelectedChar(char) {
      console.log(char)
    }
  }
}
</script>

<style scoped>
.foundation {
  position: relative;
}
.action-container {
  position: absolute;
  top: 0;
}
</style>
