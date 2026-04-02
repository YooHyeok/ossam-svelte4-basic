<script>
  import { flip } from "svelte/animate";

  let items = [1, 2, 3]; //초기 배열 번호

  //클릭시 버튼 번호가 랜덤한 위치로 바뀌게 처리
  const shuffle = () => {
    items = items.sort(() => Math.random() - 0.5);
  }
</script>
<div>
  <h1>01) Animation - Flip 기본 효과</h1>
  {#each items as item (item)}
    <div class="item" animate:flip>
      {item}
    </div>
  {/each}
  <hr />
  <button on:click={shuffle}>순환</button>
</div>

<style>
  .item {
    padding: 10px; margin: 5px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    display: inline-block;
  }
</style>