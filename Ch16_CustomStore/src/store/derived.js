import { readable, derived } from "svelte/store";

const start = new Date();

const createTime = () => {
  let interval
  let _set

  const { subscribe } = readable(start, (set) => {
    _set = set;
    startTimer() // 1초에 한번씩 초기화
    /* 클린업 */
    return () => clearInterval(interval);
  });

  const startTimer = () => {
    if (!_set) return;
    if (interval) clearInterval(interval)
    interval = setInterval(() => _set(new Date()), 1000) // 1초에 한번씩 초기화
  }

  return {
    subscribe,
    stop: () => clearInterval(interval),
    start: () => startTimer()
  }
}


const createElapsed = (time) => {
  const { subscribe } = derived(time, $time => Math.round(($time - start) / 1000))
  return {
    subscribe
  }
}

export const time = createTime();
export const elapsed = createElapsed(time);