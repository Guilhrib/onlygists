<script lang="ts" setup>
import PublicHeadline from '@/modules/users/components/PublicHeadline/PublicHeadline.vue'
import WidgetGroup from '@/modules/reports/components/Widget/Group/Group.vue'
import WidgetCondensed from '@/modules/reports/components/Widget/Condensed/Condensed.vue'
import WidgetGroupLoader from '@/modules/reports/components/Widget/Group/Loader.vue'
import GistCardGroup from '@/modules/gists/components/Card/Group/Group.vue'
import GistCardItem from '@/modules/gists/components/Card/Item/Item.vue'
import GistGroupLoader from '@/modules/gists/components/Card/Group/Loader.vue'

const route = useRoute()
const router = useRouter()

const handleNaviagetToDetail = (id: string) => {
  const { username } = route.params
  router.push(`/${username}/gist/${id}`)
}
</script>

<template>
  <PublicHeadline />
  <WidgetGroup>
    <WidgetGroupLoader :loading="false" :amount="3">
      <WidgetCondensed label="Gists no total" value="10" />
      <WidgetCondensed label="Gists gratuitos" value="5" />
      <WidgetCondensed label="Gists pagos" value="5" />
    </WidgetGroupLoader>
  </WidgetGroup>
  <WidgetDefault title="Todos os gists">
    <GistCardGroup>
      <GistGroupLoader :loading="false">
        <GistCardItem
          id="1234"
          title="useCurrentUser.ts"
          description="Hook para obter o **usuário** logado"
          :price="10"
          lang="TypeScript"
          @tap="handleNaviagetToDetail"
        />
      </GistGroupLoader>
    </GistCardGroup>
  </WidgetDefault>
</template>