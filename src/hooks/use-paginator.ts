import { computed, ref } from "vue";

interface PaginatorOptions {
  siblings?: number;
  boundaries?: number;
  initialPage?: number;
}

const DOTS = "dots";

export const usePaginator = ({
  siblings = 1,
  boundaries = 1,
  initialPage = 1,
}: PaginatorOptions) => {
  const activePage = ref<number>(initialPage);
  const total = ref<number>(0);

  const setTotal = (n: number) => {
    total.value = n;
  };

  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, index) => index + start);
  };

  const paginationRange = computed(() => {
    const totalPageNumbers = siblings * 2 + 3 + boundaries * 2;

    if (totalPageNumbers >= total.value) {
      return range(1, total.value);
    }

    const leftSiblingIndex = Math.max(activePage.value - siblings, boundaries);
    const rightSiblingIndex = Math.min(
      activePage.value + siblings,
      total.value - boundaries
    );

    const shouldShowLeftDots = leftSiblingIndex > boundaries + 2;
    const shouldShowRightDots =
      rightSiblingIndex < total.value - (boundaries + 1);

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = siblings * 2 + boundaries + 2;
      return [
        ...range(1, leftItemCount),
        DOTS,
        ...range(total.value - (boundaries - 1), total.value),
      ];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = boundaries + 1 + 2 * siblings;
      return [
        ...range(1, boundaries),
        DOTS,
        ...range(total.value - rightItemCount, total.value),
      ];
    }

    return [
      ...range(1, boundaries),
      DOTS,
      ...range(leftSiblingIndex, rightSiblingIndex),
      DOTS,
      ...range(total.value - boundaries + 1, total.value),
    ];
  });

  const setPage = (page: number | string) => {
    activePage.value = +page;
  };

  const onNext = () => {
    if (activePage.value < total.value) {
      activePage.value += 1;
    }
  };

  const onPrev = () => {
    if (activePage.value > 1) {
      activePage.value -= 1;
    }
  };

  return {
    range: paginationRange,
    currentPage: activePage,
    setPage,
    setTotal,
    onNext,
    onPrev,
  };
};
