<template>
<v-container grid-list-md>
  <h1>
    Wonderland Trials
  </h1>
  <p v-if="trialGroups.length>0">Your WT runs:</p>
  <p v-else>You don't have any runs yet, add your first run (e.g. Monday's WT)</p>
  <v-layout row wrap>
    <v-flex md4 xs12 v-for="(val, idx) in trialGroups" :key="idx">
      <group-card :value="val" />
    </v-flex>
    <v-flex md4 xs12>
      <v-card>
        <v-card-title>
          <v-text-field
            label="Add new run"
            ref="groupNameTextField"
            v-model="newGroupName"
            :rules="[ v => !!v || 'Group name is required!' ]"
          />
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn flat @click="onAddClicked">
            <v-icon large>add_circle</v-icon>
            <span>Add</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import GroupCard from '@/components/GroupCard'

export default {
  name: 'TrialGroupView',
  components: { GroupCard },
  data() {
    return {
      newGroupName: ''
    }
  },
  computed: {
    ...mapGetters({
      trialGroups: 'trialGroups/groups'
    })
  },
  mounted() {
    this.$store.dispatch('init')
  },
  methods: {
    onAddClicked() {
      if (!!this.newGroupName) {
        this.$store.dispatch(this.$store.ACTIONS.TRIAL_GROUP.ADD_GROUP, { name:this.newGroupName })
        this.newGroupName = ''
      } else {
        this.$refs.groupNameTextField.focus()
      }
    }
  }
}
</script>
