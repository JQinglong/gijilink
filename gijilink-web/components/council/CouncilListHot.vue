<script setup lang="ts">
import { useCouncil } from '~/composables/useCouncil'

const { fetchArticles, articles } = useCouncil()
fetchArticles()
</script>

<template>
  <div>
    <p>CouncilListHot</p>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <NuxtLink :to="{path: '/', query: { id:article.id }}">
          {{
            article.title
          }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
