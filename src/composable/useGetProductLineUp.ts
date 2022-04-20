import { onMounted, ref } from 'vue'

export default function () {
    const data = ref<ProductLineUp[]>([])

    onMounted(() => {
        data.value = [
            {
                img: "bottle-box",
                type: "repair",
                product: "Refined Night Serum",
              },
              {
                img: "bottle-box",
                type: "repair",
                product: "Skin Tranquility",
              },
        ]
    })
  
    return { data }
  }