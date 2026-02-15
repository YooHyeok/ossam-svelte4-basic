<script>
  import Child from "./Child.svelte"
  let age01 = 20;
  const onPlus = () => age01++
  const onMinus = () => age01--
</script>
<div>
  <h1>04) Props 값 변경 함수전달 자식위임</h1>
  <Child name={'김철수'} age={age01} hobby={'축구하기'} onPlus={onPlus} onMinus={onMinus}/>  
</div>