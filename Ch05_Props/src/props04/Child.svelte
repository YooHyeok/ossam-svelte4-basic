<script>
  export let age = 20;
</script>

<h3>나이: {age}</h3>
<hr>
<button on:click={onPlus}>나이증가 +</button>
<button on:click={onMinus}>나이감소 -</button>
