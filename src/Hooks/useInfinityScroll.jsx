import { useState, useEffect, useRef, useCallback } from "react";

export default function useInfinityScroll() {
  const [bottom, setBottom] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const bottomObserver = useRef(null);

  const resetPageNum = useCallback(() => {
    setPageNum(1);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setPageNum((prev) => prev + 1);
      }
    });
    bottomObserver.current = observer;
  }, []);

  useEffect(() => {
    const observer = bottomObserver.current;
    if (bottom) {
      observer.observe(bottom);
    }

    return () => {
      if (bottom) {
        observer.unobserve(bottom);
      }
    };
  }, [bottom]);

  return [setBottom, pageNum, resetPageNum];
}
