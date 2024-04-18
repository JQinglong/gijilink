<script setup lang="ts">
import { useCouncil } from '~/composables/useCouncil'

const { getCouncilList, councilList, getCouncil, council } = useCouncil()
getCouncilList()
getCouncil()

</script>

<template>
  <div>
    会議体の管理
    {{ council }}
    <ul>
      <li v-for="council in councilList" :key="council.id">
        <NuxtLink :to="{path: '/', query: { id:council.id }}">
          {{
            council.name
          }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
