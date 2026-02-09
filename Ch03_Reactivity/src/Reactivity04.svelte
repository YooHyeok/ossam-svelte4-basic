<script>
  let count = 0

  // 반응성 조건블록
  $: if (count >= 10) {
    alert('10개 이상 구매할 수 없습니다.')
    count = 9
  }
  $: if (count < 0) {
    alert('최소 구매개수는 1개입니다.')
    count = 1;
  }

  const onPlus = () => count ++;
  const onMinus = () => count --;

</script>
<div>
  <h1>Reactivity03) $ 반응성 조건블록</h1>
  <button on:click={onMinus}>-</button>
  <input type="text" value={count} style="width:25px;">
  <button on:click={onPlus}>+</button>
</div>