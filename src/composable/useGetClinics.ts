import { onMounted, ref } from "vue";
import { Clinic } from "../typings/Clinic";


export default function () {
    const data = ref<Clinic[]>([])

    onMounted(() => {
        data.value.push({
            name: 'Klinik Dr. Andalia',
            location: 'Jakarta Pusat - 2.2 km',
        })
        data.value.push({
            name: 'Klinik Dr. Budi',
            location: 'Jakarta Pusat - 2.2 km',
        })
        data.value.push({
            name: 'Klinik Dr. Vebi',
            location: 'Jakarta Pusat - 2.2 km',
        })
        data.value.push({
            name: 'Klinik Dr. Augie',
            location: 'Jakarta Pusat - 2.2 km',
        })
        data.value.push({
            name: 'Klinik Dr. Iwan',
            location: 'Jakarta Pusat - 2.2 km',
        })
        data.value.push({
            name: 'Klinik Dr. Endang',
            location: 'Jakarta Pusat - 2.2 km',
        })
        data.value.push({
            name: 'Klinik Dr. Suprianto',
            location: 'Jakarta Pusat - 2.2 km',
        })
        data.value.push({
            name: 'Klinik Dr. Dimas',
            location: 'Jakarta Pusat - 2.2 km',
        })
    })

    return { data }
}