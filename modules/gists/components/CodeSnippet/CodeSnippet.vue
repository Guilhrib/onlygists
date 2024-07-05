<script lang="ts" setup>
import { common, createStarryNight } from '@wooorm/starry-night'
import { toHtml } from 'hast-util-to-html'
import '@wooorm/starry-night/style/light'
import Loader from '@/modules/gists/components/CodeSnippet/Loader.vue'

const DEFAULT_CODE_SNIPPET = `
  const message = 'Você precisa pagar para ter acesso a esse gist :P'
  console.log(message)
`

const props = withDefaults(defineProps<{
  isPaid: boolean
  loading: boolean
  code: string
  lang: string
}>(), {
  isPaid: false,
  loading: false,
  code: DEFAULT_CODE_SNIPPET,
  lang: 'typeScript'
})

const loading = ref<boolean>(false)
const htmlCode = ref<string>('')

const registerSyntaxHighlight = async () => {
  loading.value = true
  const starryNight = await createStarryNight(common)
  const scope = starryNight.flagToScope(props.lang)
  const tree = starryNight.highlight(props.code, scope!)

  htmlCode.value = toHtml(tree)
  loading.value = false
}

onMounted(() => {
  registerSyntaxHighlight()
})
</script>

<template>
  <Loader :loading="loading || props.loading">
    <div
      v-if="props.isPaid"
      class="w-full relative"
    >
      <span class="absolute top-[43%] left-[50%] z-[999]">
        <i class="pi pi-lock text-3xl text-gray-700" />
      </span>
      <pre
        class="blur-sm w-full select-none rounded bg-gray-200 p-5 overflow-x-hidden"
        v-html="htmlCode"
      />
    </div>
    <pre
      v-if="!props.isPaid"
      class="w-full select-none rounded bg-gray-200 p-5 overflow-x-scroll"
      v-html="htmlCode"
    />
  </Loader>
</template>