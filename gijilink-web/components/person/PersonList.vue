<script setup lang="ts">
import { usePerson } from '~/composables/usePerson'

const { getPersonList, personList } = usePerson()
getPersonList()
const items = await personList.value.map((pserson) => ({
  label: pserson.name,
}));
console.log('items',items)

</script>

<template>
  <div>
    <p>PersonList</p>
    <ul>
      <li v-for="person in personList" :key="person.id">
        <NuxtLink :to="{path: '/', query: { id:person.id }}">
          {{
            person.name
          }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
