import { onMounted, ref } from 'vue'

export default function () {
    const data = ref<ProductRepair[]>([])

    onMounted(() => {
        data.value = [
            {              
                img: "bottle_box",
                type: "repair",
                product: "Refined Night Serum",
                hover: 'BG_Repair',
              },
              {
                img: "bottle_box",
                type: "repair",
                product: "Skin Tranquility",
                hover: 'BG_Repair',
              },
              {              
                img: "bottle_box",
                type: "repair",
                product: "Refined Night Serum",
                hover: 'BG_Repair',
              },
              {
                img: "bottle_box",
                type: "repair",
                product: "Skin Tranquility",
                hover: 'BG_Repair',
              },
        ]
    })
  
    return { data }
  }

