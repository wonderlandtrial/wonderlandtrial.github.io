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
      v-model="showPicker" />
  </div>
</div>
</template>

<script>
import Character from '@/models/Character'
import CharAvatar from '@/components/CharAvatar'
import CharPicker from '@/components/CharPicker2'

export default {
  components: {CharAvatar, CharPicker},
  data() {
    return {
      avatar: new Character('Fatima', 'black', null, ['lorem', 'ipsum']),
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
