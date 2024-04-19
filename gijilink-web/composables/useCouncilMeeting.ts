export function useCouncilMeeting () {
  const councilMeetingList = ref([])

  const getCouncilMeetingList = async () => {
    const { data } = await useFetch('/api/councilmeeting/')
    councilMeetingList.value = data
  }

  return {
    councilMeetingList,
    getCouncilMeetingList
  }
}
