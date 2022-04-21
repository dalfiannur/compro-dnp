import { ref } from "vue";
import useAxios from "./useAxios";

export default function useGetQuery<T>(path: string){
  const axios = useAxios();

  const data = ref<T>();

  const isError = ref<boolean>(false);
  const isLoading = ref<boolean>(false);

  const successCallback = ref<() => void>(() => null);
  const errorCallback = ref<(err: Error) => void>((err) => null);

  const fetcher = (idOrSlug: string|number) => {
    isLoading.value = true;
    isError.value = false;

    axios.get(path + '/' + idOrSlug)
      .then((response) => response.data)
      .then((result) => {
        data.value = result.data;
        successCallback.value()
      })
      .catch(() => {
        isError.value = true;
        errorCallback.value(new Error('Failed to fetch data'))
      })
      .finally(() => {
        isLoading.value = false;
      })
  };

  const onSuccess = (callback: () => void) => {
    successCallback.value = callback
  };

  const onError = (callback: (error?: Error) => void) => {
    errorCallback.value = callback
  };

  return {
    data,
    isError,
    isLoading,
    fetcher,
    onSuccess,
    onError
  }
}
