<script>
  let count = 0

  // 반응성 변수 선언
  $: doubled = count * 2;
  $: square = count * count;
  $: label = count <= 1 ? 'time' : 'times'

  const handleClick = () => count++
</script>
<div>
  <h1>Reactivity02) $ 반응성 변수</h1>
  <button on:click={handleClick}>클릭 수 : {count} {label}</button>
  <h3>두배 구하기</h3>
  <p>{count} x 2 = {doubled}</p>
  <h3>제곱 구하기</h3>
  <p>{count} x {count} = {square}</p>
</div>