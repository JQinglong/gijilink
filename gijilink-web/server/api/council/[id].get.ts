export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')

  return { a: id }
})
