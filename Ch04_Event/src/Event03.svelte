<script>
  const handleClick = text => alert(`${text}`)
</script>
<div>
  <h1>Event03) 이벤트 핸들러 매개변수 </h1>
  <!-- <button on:click={handleClick('1번')}>메롱</button> --> <!-- 바로 호출됨 -->
  <button on:click={e => handleClick('1번')}>메롱</button>
</div>
<style>
  div {
    width: 100%; height: 50%;
    background-color: pink;
  }
</style>