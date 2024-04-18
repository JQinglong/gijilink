<script setup lang="ts">
const supabase = useSupabaseClient()
const ministryList = ref([])

async function getMinistryList () {
  const { data } = await supabase.from('ministry').select()
  ministryList.value = data
}

onMounted(() => {
  getMinistryList()
})
</script>

<template>
  <div>
    <details class="dropdown">
      <summary class="m-1 btn">
        省庁マスタ
      </summary>
      <ul v-for="ministry in ministryList" :key="ministry.id" class="menu bg-base-100">
        <li>{{ ministry.id }} / {{ ministry.name }}</li>
      </ul>
    </details>
  </div>
</template>
