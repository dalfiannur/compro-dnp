import { onMounted, ref } from "vue";
import useAxios from "./useAxios";

type Option = {
  query?: URLSearchParams
  perPage?: number;
  search?: string;
  autoFetch?: boolean;
}

export default function useGetQueries<T>(path: string, option?: Option) {
  const axios = useAxios();
  const data = ref<T[]>([]);
  const page = ref<number>(1);
  const pages = ref<number>(0);
  const search = ref<string>(option?.search || '');
  const perPage = ref<number>(option?.perPage || 10);
  const query = ref<URLSearchParams>(option?.query || new URLSearchParams());

  const isError = ref<boolean>(false);
  const isLoading = ref<boolean>(false);

  const successCallback = ref<() => void>(() => null);
  const errorCallback = ref<(err: Error) => void>((err) => null);

  type CountPageOption = {
    total: number;
  }

  const countPages = (meta: CountPageOption) => {
    const { total = 0 } = meta;
    return Math.ceil(total / perPage.value)
  };

  const setQuery = (q: URLSearchParams) => {
    query.value = q
  };

  const fetcher = () => {
    isLoading.value = true;
    isError.value = false;

    query.value.set('page', page.value.toString());
    query.value.set('perPage', perPage.value.toString());
    query.value.set('search', search.value);

    axios.get(path + '?' + query.value.toString())
      .then((response) => response.data)
      .then((result) => {
        data.value = result.data;
        pages.value = countPages(result.meta);
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

  const setPage = (to: number) => {
    page.value = to;
    fetcher()
  };

  const setPerPage = (to: number) => {
    perPage.value = to;
    fetcher()
  };

  const setSearch = (value: string) => {
    search.value = value;
    fetcher();
  };

  onMounted(() => {
    if (!!option?.autoFetch) {
      fetcher()
    }
  });

  return {
    data,
    page,
    perPage,
    isError,
    isLoading,
    setQuery,
    fetcher,
    setPage,
    setPerPage,
    setSearch,
    onSuccess,
    onError,
    pages
  }
}
