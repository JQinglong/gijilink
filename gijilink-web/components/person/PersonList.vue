<script setup lang="ts">
import { usePerson } from '~/composables/usePerson'

const { getPersonList, personList } = usePerson()
getPersonList()
</script>

<template>
  <div>
    <p>PersonList</p>
    <ul>
      <li v-for="person in personList" :key="person.id">
        <NuxtLink :to="{path: '/', query: { id:person.id }}">
          {{
            person.id
          }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
