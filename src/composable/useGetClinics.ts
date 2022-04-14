import { onMounted, ref } from "vue";
import { Clinic } from "../typings/Clinic";


export default function () {
    const data = ref<Clinic[]>([])

    onMounted(() => {
        data.value.push({
            name: 'Klinik Dr. Andalia Putri',
            location: 'Jakarta Pusat - 2.2 km',
        })
        data.value.push({
            name: 'Klinik Dr. Budi Hariono',
            location: 'Jakarta Pusat - 2.2 km',
        })
        data.value.push({
            name: 'Klinik Dr. Vebi Muslimawati',
            location: 'Jakarta Pusat - 2.2 km',
        })
        data.value.push({
            name: 'Klinik Dr. Augie Widyotriatmo',
            location: 'Jakarta Pusat - 2.2 km',
        })
        data.value.push({
            name: 'Klinik Dr. Iwan Sanjaya',
            location: 'Jakarta Pusat - 2.2 km',
        })
        data.value.push({
            name: 'Klinik Dr. Endang Desiantara',
            location: 'Jakarta Pusat - 2.2 km',
        })
        data.value.push({
            name: 'Klinik Dr. Suprianto Sudarsono',
            location: 'Jakarta Pusat - 2.2 km',
        })
        data.value.push({
            name: 'Klinik Dr. Dimas Aditya',
            location: 'Jakarta Pusat - 2.2 km',
        })
    })

    return { data }
}