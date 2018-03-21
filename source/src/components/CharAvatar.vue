<template>
<v-avatar
  :size="84"
  @mouseenter="$emit('mouseenter', '')">
  <img :src="value.potrait" :alt="value.name" />
</v-avatar>
</template>

<script>
export default {
  name: 'CharAvatar',
  props: ['value']
}
</script>
