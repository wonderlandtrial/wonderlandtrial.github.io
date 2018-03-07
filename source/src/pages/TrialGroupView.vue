<template>
<v-container grid-list-md>
  <v-layout row wrap>
    <v-flex xs4 v-for="(val, idx) in trialGroups" :key="idx">
      {{val}}
    </v-flex>
    <v-flex xs4>
      <v-btn @click="onAddClicked">Add</v-btn>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TrialGroupView',
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters({
      trialGroups: 'trialGroups/groups'
    })
  },
  mounted() {

  },
  methods: {
    onAddClicked() {
      this.$store.dispatch(this.$store.ACTIONS.TRIAL_GROUP.ADD_GROUP, 'TEST')
    }
  }
}
</script>
