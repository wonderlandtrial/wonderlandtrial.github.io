<template>
<v-avatar
  :size="size"
  @mouseenter="$emit('mouseenter', '')">
  <img :src="value.potrait" :alt="value.name" />
</v-avatar>
</template>

<script>
export default {
  name: 'CharAvatar',
  props: {
    value: Object,
    size: {
      type: Number,
      default: 84
    }
  }
}
</script>
