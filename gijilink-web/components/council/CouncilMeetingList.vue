<script lang="ts">
// 議事一覧
const supabase = useSupabaseClient()
const profiles = ref([])

async function getProfiles () {
  const { data } = await supabase.from('profiles').select()
  profiles.value = data
}

onMounted(() => {
  getProfiles()
})

</script>

<template>
  <div>議事一覧</div>
</template>
