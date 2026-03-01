<script>
	//Props전달의 문제점이 있는 코드
  import Child from "./Child.svelte";
  let parentValue = 1;
</script>

<p>부모 값 : {parentValue}</p>
<Child bind:childValue={parentValue} />