<script setup lang="ts">
import { useCouncil } from '~/composables/useCouncil'

const { getCouncilList, councilList } = useCouncil()
getCouncilList()
</script>

<template>
  <div>
    <p>CouncilListHot</p>
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
