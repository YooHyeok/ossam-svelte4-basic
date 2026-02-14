<script>
  import Child from "./Child.svelte"
  let age01 = 20;
  const onPlus = () => age01++
  const onMinus = () => age01--
</script>
<div>
  <h1>03) Props 값 변경</h1>
  <Child name={'김철수'} age={age01} hobby={'축구하기'} />
  <button on:click={onPlus}>나이증가 +</button>
  <button on:click={onMinus}>나이감소 -</button>
</div>