<script>
  let count = 0;
  const decrement = () => {
    console.log("감소 전 count = ", count)
    count --;
    console.log("감소 후 count = ", count)
  }
</script>
<div>
  <h1>State01) 클릭 이벤트 활용</h1>
  <button 
    on:click={() => {
      console.log("증가 전 count = ", count)
      count ++;
      console.log("증가ㅣ 후 count = ", count)
    }}
  >
    +
  </button>
  <button on:click={decrement}>-</button>
  <hr>
  <h5>카운트 : { count }</h5>
</div>