<template>
<v-dialog
  v-model="model"
  max-width="500px"
  origin="top center">
  <v-card>
    <v-card-title>Character Picker</v-card-title>
    <v-card-text>

      <v-select
        label="Select a character..."
        :items="characters"
        v-model="selectedChar"
        item-text="name"
      >
        <template slot="selection" slot-scope="data">
          <char-avatar :size="24" v-model="data.item" />
          {{data.item.name}}
        </template>

        <template slot="item" slot-scope="data">
          <char-avatar :size="48" v-model="data.item" />
          {{data.item.name}}
        </template>
      </v-select>

      <v-text-field
        label="Level"
        v-model="level"
      ></v-text-field>

      <v-text-field
        label="Note"
        v-model="note"
      ></v-text-field>

    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" flat @click="selectChar">OK</v-btn>
      <v-btn flat @click="model=false">CANCEL</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>

<script>
import TeamMember from '@/models/TeamMember'
import CharAvatar from '@/components/CharAvatar'

export default {
  name: 'CharPicker',
  components: { CharAvatar },
  props: ['value', 'characters'],
  data() {
    return {
      model: false,
      selectedChar: null,
      level: 60,
      note: ''
    }
  },
  watch: {
    value(val) {
      this.model = val
    },
    model(val) {
      this.$emit('input', val)
    }
  },
  mounted() {
    this.model = this.value
  },
  methods: {
    selectChar() {
      this.model = false

      const selectedMember = new TeamMember(this.selectedChar, this.level, this.note)
      this.$emit('selected', {...selectedMember})
    }
  }
}
</script>
