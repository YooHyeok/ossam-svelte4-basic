<script>
  import Child from "./Child.svelte"
  let age01 = 20;
  const operation = (event) => age01 = event.detail.age
</script>
<div>
  <h1>05) Props createEventDispatcher </h1>
  <Child name={'김철수'} age={age01} hobby={'축구하기'} on:plus={operation} on:minus={operation}/>
</div>