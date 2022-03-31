import { onMounted, ref } from "vue";
import { MainBanner } from "../typings/MainBanner";
import faker from '@faker-js/faker'

export default function () {
  const data = ref<MainBanner[]>([])

  onMounted(() => {
    for (let i of [1, 2, 3, 4, 5]) {
      data.value.push({
        id: i,
        title: 'Powerful Hydration and Anti-Aging',
        sub_title: 'with Hae Lipid Plus 30ml',
        source: '/img/main-banner-01.png',
        link: faker.internet.url(),
        created_at: faker.date.recent().toISOString()
      })
    }
  })

  return { data }
}