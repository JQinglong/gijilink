<script setup lang="ts">
const supabase = useSupabaseClient()
const councilMeetingList = ref([])

async function getCouncilMeetingList () {
  const { data } = await supabase.from('councilmeeting').select()
  councilMeetingList.value = data
}

onMounted(() => {
  getCouncilMeetingList()
})
</script>

<template>
  <div>
    councilmeeting
    <ul>
      <li v-for="councilMeeting in councilMeetingList" :key="councilMeeting.id">
        {{ councilMeeting.id }}
        {{ councilMeeting.name }}
      </li>
    </ul>
  </div>
</template>
