<template>
<v-card>
  <v-card-title>
    <v-btn flat large :to="`/groups/${value.id}`">{{value.name}}</v-btn>
  </v-card-title>
</v-card>
</template>

<script>
export default {
  name: 'GroupCard',
  props: ['value']
}
</script>
