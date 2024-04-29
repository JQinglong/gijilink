interface Article {
    id: number;
    title: string;
    content: string;
}

export interface CouncilListRequest  {
  limit?: number
  offset?: number
  ministry?: string
  person?: string
}

// 今回は固定値として表示
const demoArticles = [
  {
    id: 1,
    title: 'Nuxt3入門',
    content:
            'Nuxt3が公式リリースされました。Nuxt3ではVue3対応だけでなく、NitroやVite等様々な改善が施されています。'
  },
  {
    id: 2,
    title: 'Jest再入門',
    content:
            '今回はJestのモックについて整理していきます。Jestはビルトインでマッチャーが提供され、これ単体で多くのユースケースをサポートします。'
  }
]

export function useCouncil () {
  const articles = ref<Article[]>([])
  const article = ref<Article | null>(null)
  const councilList = ref([])
  const council = ref([])

  // 将来的にはAPIアクセス
  const fetchArticles = (): void => {
    articles.value = demoArticles
  }
  const fetchArticle = (id: number): void => {
    article.value = demoArticles.find(article => id === article.id) || null
  }

  const getCouncilList = async(payload: CouncilListRequest = {}) => {
    console.log('payload', payload)
    const supabase = useSupabaseClient()
    let query = supabase.from('council').select()
    if (payload.ministry)  { query = query.eq('ministry_id', payload.ministry) }
    const { data, error } = await query
    councilList.value = data
  }

  const getCouncil = async () => {
    const { data } = await useFetch('/api/council/')
    council.value = data
  }

  return {
    articles,
    article,
    councilList,
    council,
    fetchArticle,
    fetchArticles,
    getCouncilList,
    getCouncil
  }
}
