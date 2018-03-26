<template>
<div>
  <team-member-picker
    v-model="mock"
    type="advisor"
  >

  </team-member-picker>
</div>
</template>

<script>
import TeamMemberPicker from '@/components/TeamMemberPicker'
import Character from '@/models/Character'
import TeamMember from '@/models/TeamMember'

export default {
  components: {TeamMemberPicker},
  data() {
    return {
      mock: new TeamMember(
        new Character('', '', null), 60, ''
      )
    }
  },
  methods: {

  }
}
</script>
