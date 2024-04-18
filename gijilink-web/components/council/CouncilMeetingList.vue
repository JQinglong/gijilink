<script lang="ts">
// 議事一覧
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
  <div>議事一覧</div>
</template>
