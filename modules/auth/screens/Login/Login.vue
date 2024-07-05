<script setup lang="ts">
import SocialForm from '@/modules/auth/components/SocialForm/SocialForm.vue'

const loading = ref<boolean>(false)

const handleGithubLogin = () => {
  loading.value = true
  // TODO: Implement github login
}
</script>

<template>
  <section class="w-full h-screen flex flex-col justify-center items-center gap-5 bg-gray-50">
    <Logo />
    <SocialForm
      :loading="loading"
      @wants-login-with-github="handleGithubLogin"
    />
  </section>
</template>