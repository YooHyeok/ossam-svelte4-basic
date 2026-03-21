import { readable, derived } from "svelte/store";

const start = new Date();

export const time = readable(start, function start(set) {
  const interval = setInterval(() => set(new Date()), 1000) // 1초에 한번씩 초기화

  /* 클린업 */
  return function stop() {
    clearInterval(interval);
  }
});

export const elapsed = derived(time, $time => Math.round(($time - start) / 1000))