<script lang="ts" setup>
const props = defineProps<{
  loading: boolean
}>()
</script>

<template>
  <template v-if="props.loading">
    <Skeleton width="100%" height="15rem" />
  </template>
  <slot v-else />
</template>