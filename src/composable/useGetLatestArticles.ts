import { onMounted, ref } from 'vue'

export default function () {
    const data = ref<LatestArticle[]>([])

    onMounted(() => {
        data.value = [
            {
                img: "bg-2",
                title: "Memilih Metode Eksfoliasi Berdasarkan Jenis Kulit Wajah",
                author: "Dr. Victor",
                time: "22/02/2022",
                route: "/#",
            },
            {
                img: "bg-1",
                title: "Benarkah Paraben Berbahaya? Simak Faktanya disini!",
                author: "Dr. Charles",
                time: "09/04/2022",
                route: "/#",
            },
            {
                img: "bg-3",
                title: "Ini Cara Efektif untuk Menghilangkan Noda Hitam di Wajah",
                author: "Dr. David",
                time: "12/04/2022",
                route: "/#",
            },
        ]
    })
  
    return { data }
  }