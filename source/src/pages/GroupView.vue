<template>
<v-card>
  <v-card-title primary-title>
    <div>
      <v-btn flat to="/">
        <h3 class="headline mb-0">{{data.name}}</h3>
      </v-btn>
      <p v-if="data.trials.length<=0">You have never recorded any trial. Add your first trial (e.g. Pang's trial).</p>

      <v-expansion-panel>
        <v-expansion-panel-content v-for="(trial,i) in data.trials" :key="i" :value="true">
          <div slot="header">{{trial.title}}</div>
          <div style="display:flex;">
            <team-member-picker
              v-model="trial.teamMembers.gold"
              @input="onTeamChanged(data.id, trial.id, trial.teamMembers)"
              type="gold"
            ></team-member-picker>
            <team-member-picker
              v-model="trial.teamMembers.black"
              @input="onTeamChanged(data.id, trial.id, trial.teamMembers)"
              type="black"
            ></team-member-picker>
            <team-member-picker
              v-model="trial.teamMembers.white"
              @input="onTeamChanged(data.id, trial.id, trial.teamMembers)"
              type="white"
            ></team-member-picker>
            <team-member-picker
              v-model="trial.teamMembers.advisor"
              @input="onTeamChanged(data.id, trial.id, trial.teamMembers)"
              type="advisor"
            ></team-member-picker>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
  </v-card-title>
  <v-card-actions>
    <v-text-field
      v-model="trialName"
      label="Trial Name"
    />
    <v-btn flat @click="onAddTrialClicked">Add a trial</v-btn>
  </v-card-actions>
</v-card>
</template>

<script>
import TeamMemberPicker from '@/components/TeamMemberPicker'
import Character from '@/models/Character'
import TeamMember from '@/models/TeamMember'

export default {
  name: 'GroupView',
  components: { TeamMemberPicker },
  props: ['id', 'value'],
  data() {
    return {
      Actions: this.$store.ACTIONS.TRIAL_GROUP,
      trialName: ''
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
  },
  watch: {
    trials(val) {

    }
  },
  methods: {
    onAddTrialClicked() {
      this.$store.dispatch(
        this.Actions.ADD_TRIAL,
        {
          id: this.id,
          trialName: this.trialName
        }
      )
    },
    onTeamChanged(groupId, trialId, team) {
      console.log(groupId)
      console.log(trialId)
      console.log(team)
      this.$store.dispatch(
        this.Actions.MODIFY_TEAM,
        {
          groupId,
          trialId,
          team
        }
      )
    }
  }
}
</script>
