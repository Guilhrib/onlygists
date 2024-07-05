<script lang="ts" setup>
import PublicHealine from '@/modules/gists/components/PublicHeadline/PublicHeadline.vue'
import GistCodeSnippet from '@/modules/gists/components/CodeSnippet/CodeSnippet.vue'
import DialogPaymentSuccess from '@/modules/payments/components/DialogPaymentSucess/DialogPaymentSuccess.vue'

const route = useRoute()
const isPaymentSuccessfully = ref<boolean>(false)

onMounted(() => {
  const { success_payment } = route.query

  if (success_payment) {
    isPaymentSuccessfully.value = true
  }
})
</script>

<template>
  <PublicHealine
    title="More Details"
    description="More Details"
    lang="TypeScript"
    author="Guilherme"
  />
  <GistCodeSnippet
  />
  <DialogPaymentSuccess
    v-model:visible="isPaymentSuccessfully"
  />
</template>