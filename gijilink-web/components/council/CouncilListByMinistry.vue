<script setup lang="ts">
import { useMinistry } from '~/composables/useMinistry'
import { useCouncil } from '~/composables/useCouncil'
const { getMinistryList, ministryList } = useMinistry()
const { getCouncilList, councilList } = useCouncil()
const selectedMinistry : string = ref('')

await getMinistryList()
const items = await ministryList.value.map((ministry) => ({
  label: ministry.name,
  content: ministry.url,
  ministry_id: ministry.id,
}));


function onTabChange (index) {
  const item = items[index]
  console.log('item', item)
  getCouncilList({ministry: item.ministry_id})
}

</script>
<template>
  <div>
    <UTabs :items="items" @change="onTabChange" class="menu bg-base-200 rounded-none" />
    <ul>
      <li v-for="council in councilList" :key="council.id">
        <CouncilListItem  :council="council" />
      </li>
    </ul>
      </div>
</template>
