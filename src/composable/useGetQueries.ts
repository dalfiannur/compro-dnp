import { onMounted, ref } from "vue";
import useAxios from "./useAxios";

export default function useGetQueries<T>(path: string) {
  const axios = useAxios();

  const data = ref<T[]>([])
  const page = ref<number>(1)
  const pages = ref<number>(0)
  const perPage = ref<number>(5)

  const isError = ref<boolean>(false)
  const isLoading = ref<boolean>(false)

  const successCallback = ref<() => void>(() => null)
  const errorCallback = ref<(err: Error) => void>((err) => null)

  type CountPageOption = {
    total: number;
  }

  const countPages = (meta: CountPageOption) => {
    const { total = 0 } = meta
    return Math.ceil(total / perPage.value)
  }

  const fetcher = () => {
    isLoading.value = true;
    isError.value = false;

    axios.get(path)
      .then((response) => response.data)
      .then((result) => {
        data.value = result.data
        pages.value = countPages(result.meta)
        successCallback.value()
      })
      .catch(() => {
        isError.value = true
        errorCallback.value(new Error('Failed to fetch data'))
      })
      .finally(() => {
        isLoading.value = false;
      })
  }

  const onSuccess = (callback: () => void) => {
    successCallback.value = callback
  }

  const onError = (callback: (error?: Error) => void) => {
    errorCallback.value = callback
  }

  const setPage = (to: number) => {
    page.value = to
    fetcher()
  }

  const setPerPage = (to: number) => {
    perPage.value = to,
    fetcher()
  }

  onMounted(() => {
    fetcher()
  })

  return {
    data,
    page,
    perPage,
    isError,
    isLoading,
    fetcher,
    setPage,
    setPerPage,
    onSuccess,
    onError
  }
}