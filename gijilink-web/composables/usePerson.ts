interface Article {
    id: number;
    title: string;
    content: string;
}

// 今回は固定値として表示
const demoArticles = [
  {
    id: 1,
    title: 'person1',
    content:
            'Nuxt3が公式リリースされました。Nuxt3ではVue3対応だけでなく、NitroやVite等様々な改善が施されています。'
  },
  {
    id: 2,
    title: 'person2',
    content:
            '今回はJestのモックについて整理していきます。Jestはビルトインでマッチャーが提供され、これ単体で多くのユースケースをサポートします。'
  }
]

export function usePerson () {
  const personList = ref<Article[]>([])
  const personData = ref<Article | null>(null)

  const getPerson = (id: number): void => {
    personData.value = demoArticles.find(article => id === article.id) || null
  }

  const getPersonList = async () => {
    const supabase = useSupabaseClient()
    const { data } = await supabase.from('person').select()
    personList.value = data
  }

  return {
    personList,
    personData,
    getPerson,
    getPersonList
  }
}
