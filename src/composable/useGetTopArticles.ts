import { onMounted, ref } from 'vue'

export default function () {
    const data = ref<TopArticle[]>([])

    onMounted(() => {
        
    })
  
    return { data }
  }