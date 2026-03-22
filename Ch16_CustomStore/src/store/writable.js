import { writable } from 'svelte/store'

const createCount = () => {

  const initValue = 0;
  const { subscribe, set, update } = writable(initValue); // 초기값 0으로 지정
  return {
    subscribe,
    increment: () => update(n => n + 1),
    decrement: () => update(n => n - 1),
    reset: () => set(initValue)
  }
}

export const count = createCount()