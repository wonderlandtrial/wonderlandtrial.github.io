<template>
<v-card>
  <v-card-title primary-title>
    <div>
      <v-btn flat to="/">
        <h3 class="headline mb-0">{{data.name}}</h3>
      </v-btn>

      <v-expansion-panel>
        <v-expansion-panel-content v-for="(trial,i) in trials" :key="i" :value="true">
          <div slot="header">{{trial.title}}</div>
          <div style="display:flex;">
            <team-member-picker
              v-model="trial.teamMembers.gold"
              type="gold"
            ></team-member-picker>
            <team-member-picker
              v-model="trial.teamMembers.black"
              type="black"
            ></team-member-picker>
            <team-member-picker
              v-model="trial.teamMembers.white"
              type="white"
            ></team-member-picker>
            <team-member-picker
              v-model="trial.teamMembers.advisor"
              type="advisor"
            ></team-member-picker>
          </div>
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
      trials: [
        {
          title: 'Pang\'s Trial',
          teamMembers: {
            gold: new TeamMember(new Character('', '', null), 60, ''),
            black: new TeamMember(new Character('', '', null), 60, ''),
            white: new TeamMember(new Character('', '', null), 60, ''),
            advisor: new TeamMember(new Character('', '', null), 60, '')
          }
        },
        { title: 'Golemwalt\'s Trial',
          teamMembers: {
            gold: new TeamMember(new Character('', '', null), 60, ''),
            black: new TeamMember(new Character('', '', null), 60, ''),
            white: new TeamMember(new Character('', '', null), 60, ''),
            advisor: new TeamMember(new Character('', '', null), 60, '')
          }
        },
        { title: 'Kitty\'s Trial',
          teamMembers: {
            gold: new TeamMember(new Character('', '', null), 60, ''),
            black: new TeamMember(new Character('', '', null), 60, ''),
            white: new TeamMember(new Character('', '', null), 60, ''),
            advisor: new TeamMember(new Character('', '', null), 60, '')
          }
        }
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
  },
  watch: {
    trials(val) {

    }
  }
}
</script>
