<script lang="ts" setup>
const { render } = useMarkdown()

const props = withDefaults(defineProps<{
  title: string
  description: string
  lang: string,
  author: string
}>(), {
  title: 'useCurrentUser.ts',
  description: 'Hook para obter o **usuário** logado',
  lang: 'TypeScript',
  author: 'Guilherme'
})

const description = computed(() => render(props.description))
</script>

<template>
  <div class="w-full flex flex-col justify-center gap-2 mu-5">
    <div class="flex flex-wrap items-center gap-2">
      <h1 class="font-[Inter] text-gray-700 font-bold text-2xl md:text-3xl">
        {{ props.title }}
      </h1>
      <Chip
        class="text-sm"
        :label="props.lang"
        icon="pi pi-bolt"
      />
    </div>
    <div
      v-html="description"
      class="font-[Inter] text-gray-700 font-regular text-base md:text-lg"
    />

    <p class="font-[Inter] text-gray-500 font-regular text-sm md:text-base">
      <i class="pi pi-star" />
      by
      <NuxtLink
        :to="`/${props.author}`"
        class="text-primary-500"
      >
        @{{ props.author }}
      </NuxtLink>
    </p>
  </div>
</template>