import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event)

  const { data } = await client.from('councilmeeting').select('*').order('meeting_date', { ascending: false }).limit(10)

  return data
})
