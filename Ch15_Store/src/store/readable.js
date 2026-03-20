import { readable } from "svelte/store";

export const time = readable(new Date(), function start(set) {
  const interval = setInterval(() => set(new Date()), 1000) // 1초에 한번씩 초기화

  /* 클린업 */
  return function stop() {
    clearInterval(interval);
  }
});