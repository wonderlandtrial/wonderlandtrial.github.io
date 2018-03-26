<template>
<div>
  <div class="foundation">
    <char-avatar v-model="teamMember.character" @mouseenter="onHover"></char-avatar>

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
import TeamMember from '@/models/TeamMember'
import CharAvatar from '@/components/CharAvatar'
import CharPicker from '@/components/CharPicker'
import CharacterList from '@/models/CharacterList'

export default {
  name: 'TeamMemberPicker',
  components: {CharAvatar, CharPicker},
  props: ['value', 'type'],
  data() {
    return {
      charList: CharacterList.advisor,
      showAction: false,
      showPicker: false,
      teamMember: new TeamMember(
        new Character('', '', null), 60, ''
      )
    }
  },
  watch: {
    value(val) {
      this.teamMember = val
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
    getSelectedChar(member) {
      this.teamMember = member

      this.$emit('input', {...member})
    }
  },
  mounted() {
    this.charList = CharacterList[this.type]
    if (this.value) {
      this.teamMember = this.value
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
