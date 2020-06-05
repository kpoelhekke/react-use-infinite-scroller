import * as React from 'react';

export type InfiniteScrollProps = {
  onLoadMore: () => void;
  threshold?: number;
};

const EVENT_TYPES = ['scroll', 'resize'];

function useInfiniteScroll<E extends HTMLDivElement>({
  onLoadMore,
  threshold = 250,
}: InfiniteScrollProps) {
  const isLoading = React.useRef(false);
  const containerRef = React.useRef<E>(null!);

  React.useEffect(() => {
    async function handleScroll() {
      if (!isLoading.current) {
        const doc =
          document.documentElement || document.body.parentNode || document.body;
        const scrollTop =
          window.pageYOffset !== undefined ? window.pageYOffset : doc.scrollTop;
        const { height: documentHeight } = doc.getBoundingClientRect();
        const delta = documentHeight - scrollTop - window.innerHeight;

        if (delta <= threshold) {
          isLoading.current = true;
          await onLoadMore();
          isLoading.current = false;
        }
      }
    }

    EVENT_TYPES.forEach((event) =>
      window.addEventListener(event, handleScroll)
    );

    return () =>
      EVENT_TYPES.forEach((event) =>
        window.removeEventListener(event, handleScroll)
      );
  }, [onLoadMore, threshold]);

  return {
    containerRef,
  };
}

export default useInfiniteScroll;
