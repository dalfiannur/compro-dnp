import { onMounted, ref } from "vue";
import { SliderV2 } from "../typings/SliderV2";
import faker from '@faker-js/faker'

export default function () {
    const data = ref<SliderV2[]>([])

    onMounted(() => {
        for (let i of [1, 2, 3, 4, 5]) {
            data.value.push({
                id: i,
                source: '/img/sliderv2.png',
                created_at: faker.date.recent().toISOString()
            })
        }
    })

    return { data }
}