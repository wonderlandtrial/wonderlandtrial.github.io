<template>
<v-dialog
  v-model="model"
  @input="$emit('input', model)"
  origin="top center">
  <v-card>
    <v-card-title>Character Picker</v-card-title>
    <v-card-text>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" flat @click.stop="model=false">Close</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>

<script>
export default {
  name: 'CharPicker',
  props: ['value'],
  data() {
    return {
      model: false
    }
  },
  watch: {
    value(val) {
      this.model = val
    }
  },
  mounted() {
    this.model = this.value
  }
}
</script>
