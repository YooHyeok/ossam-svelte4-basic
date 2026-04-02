<script>
  import { elasticOut } from "svelte/easing";

  let items = [1, 2, 3]; //초기 배열 번호

  //클릭시 버튼 번호가 랜덤한 위치로 바뀌게 처리
  const shuffle = () => {
    items = items.sort(() => Math.random() - 0.5);
  }
  function spinFlip(node, { duration }) {
    return {
      duration: 500,
      css: (t) => {
        const eased = elasticOut(t);
        return `
          transform: scale(${eased}) rotate(${eased * 1000}deg)
        `;
      }
    }
  }
</script>
<div>
  <h1>03) Animation - 커스텀 효과(flip에 스핀)</h1>
  {#each items as item (item)}
    <div class="item" animate:spinFlip>
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