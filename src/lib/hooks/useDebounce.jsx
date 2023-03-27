import { useCallback, useRef } from "react";

export default function useDebouncing(callbackFn, delay) {
  const timerId = useRef();

  const dispatchDebounce = useCallback(() => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    timerId.current = setTimeout(() => {
      callbackFn();
    }, delay);
  }, [callbackFn, delay]);

  return dispatchDebounce;
}
