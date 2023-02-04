import { useRef } from "react";

export default function useDebouncing(callbackFn, delay) {
  const timerId = useRef();

  const dispatchDebounce = () => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    timerId.current = setTimeout(() => {
      callbackFn();
    }, delay);
  };

  return dispatchDebounce;
}
