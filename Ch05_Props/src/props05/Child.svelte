<script>
  export let age = 20;
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  const onPlus = () => dispatch('plus', {age: age+1})
  const onMinus = () => dispatch('minus', {age: age-1})
</script>

<h3>나이: {age}</h3>
<hr>
<button on:click={onPlus}>나이증가 +</button>
<button on:click={onMinus}>나이감소 -</button>
