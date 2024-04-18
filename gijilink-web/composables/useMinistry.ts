export function useMinistry () {
  const ministryList = ref<[]>([])

  const getMinistryList = async () => {
    const supabase = useSupabaseClient()
    const { data } = await supabase.from('ministry').select()
    ministryList.value = data
  }

  return {
    ministryList,
    getMinistryList
  }
}
