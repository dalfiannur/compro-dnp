import { onMounted, ref } from 'vue'

export default function () {
    const data = ref<TopArticle[]>([])

    onMounted(() => {
        data.value = 
    })
  
    return { data }
  }