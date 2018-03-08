<template>
<v-card>
  <v-card-title primary-title>
    <div>
      <h3 class="headline mb-0">{{data.name}}</h3>
      <div>LOREM IPSUM</div>
      <v-expansion-panel>
        <v-expansion-panel-content v-for="(trial,i) in trials" :key="i" :value="true">
          <div slot="header">{{trial.title}}</div>
          <char-picker />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
  </v-card-title>
  <v-card-actions>
    <v-text-field
      label="Trial Name"
    />
    <v-btn flat>Add a trial</v-btn>
  </v-card-actions>
</v-card>
</template>

<script>
import CharPicker from '@/components/CharPicker'

export default {
  name: 'GroupView',
  components: { CharPicker },
  props: ['id', 'value'],
  data() {
    return {
      Actions: this.$store.ACTIONS.TRIAL_GROUP,
      trials: [
        { title: 'Pang\'s Trial' },
        { title: 'Golemwalt\'s Trial' },
        { title: 'Kitty\'s Trial' }
      ]
    }
  },
  computed: {
    data() {
      let temp = this.$store.getters[this.Actions.GET_GROUP](this.id)
      if (!!temp) {
        return temp
      } else {
        return {
          name: ''
        }
      }
    }
  }
}
</script>
