<script lang="ts" setup>
const props = defineProps<{
  label: string
  value: string | number
}>()
</script>

<template>
  <div class="flex flex-1 flex-col bg-white p-5 rounded-xl select-none">
    <span class="font-[Inter] text-4xl text-primary-300 font-bold">
      {{ props.value }}
    </span>
    <p class="font-[Inter] text-lg text-gray-700">
      {{ props.label }}
    </p>
  </div>
</template>