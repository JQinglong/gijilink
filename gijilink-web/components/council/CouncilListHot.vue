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
        <CouncilListItem :council="council" />
      </li>
    </ul>
  </div>
</template>
