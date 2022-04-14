import { onMounted, ref } from 'vue'

export default function () {
    const data = ref<TopArticle[]>([])

    onMounted(() => {
        data.value = [
            {
                img: "bg-1",
                title: "Pori-pori Wajahmu Membesar? Ikuti Cara ini untuk Mengecilkannya",
                author: "Dr. Devina",
                time: "22/02/2022",
                route: "/#",
            },
            {
                img: "bg-2",
                title: "5 Kandungan Skincare untuk Kulit Sehat dan Glowing",
                author: "Dr. Eri",
                time: "22/02/2022",
                route: "/#",
            },
            {
                img: "bg-3",
                title: "Bahaya Skincare Share in Jar, Hindari Memakai Produk ini",
                author: "Dr. David",
                time: "22/02/2022",
                route: "/#",
            },
        ]
    })
  
    return { data }
  }