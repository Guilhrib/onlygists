<script lang="ts" setup>
const props = withDefaults(defineProps<{
  name: string
  avatarUrl: string
  bio?: string
  city?: string
  state?: string
}>(), {
  name: 'Guilherme',
  avatarUrl: 'https://avatars.githubusercontent.com/u/88335967?v=4',
  bio: 'Software Developer',
  city: 'Joinville',
  state: 'SC'
})
</script>

<template>
  <div class="w-full flex flex-col items-center justify-center gap-2">
    <div class="w-24 md:w-32 rounded-full overflow-hidden">
      <img
        :src="props.avatarUrl"
        alt="foto do usário"
        class="w-full"
      >
    </div>
    <h1 class="font-[Inter] text-gray-700 text-center font-bold text-2xl md:text-3xl">
      {{ props.name }}
    </h1>
    <p
      v-if="props.bio"
      class="font-[Inter] text-gray-700 text-center font-regular md:text-lg"
    >
      {{ props.bio }}
    </p>
    <p
      v-if="props.city && props.state"
      class="font-[Inter] font-regular text-gray-500 text-sm md:text-base"
    >
      <i class="pi pi-map-marker" />
      {{ props.city }}, {{ props.state }}
    </p>
  </div>
</template>