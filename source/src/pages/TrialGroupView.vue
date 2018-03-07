<template>
<v-container grid-list-md>
  <v-layout row wrap>
    <v-flex xs4 v-for="(val, idx) in trialGroups" :key="idx">
      <group-card :value="val" />
    </v-flex>
    <v-flex xs4>
      <v-card>
        <v-card-title>
          <v-text-field
            label="Group Name"
            ref="groupNameTextField"
            v-model="newGroupName"
            :rules="[ v => !!v || 'Group name is required!' ]"
          />
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn large icon @click="onAddClicked">
            <v-icon large>add_circle</v-icon>
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
