<template>
<v-card>
  <v-card-title>
    {{data.name}}
  </v-card-title>
</v-card>
</template>

<script>
export default {
  name: 'GroupView',
  props: ['id', 'value'],
  data() {
    return {
      Actions: this.$store.ACTIONS.TRIAL_GROUP
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
