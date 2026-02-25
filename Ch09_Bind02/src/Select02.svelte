<script>
  let foods = ['떡볶이','순대','오뎅','튀김'];
  let selected = []; // select의 multiple은 여러개의 값을 ctrl로 선택하므로 배열로 할당받는다
  const selectChange = (event) => {
    console.log(event.target.value)
    if (selected != null) {
      window.open(selected)
    }
  }
</script>
<div>
  <h1>02) select multiple bind:value</h1>
  <select multiple bind:value={selected} on:change={selectChange}>
    {#each foods as food}
      <option value={food}>{food}</option>
    {/each}
  </select>
  #{#if selected.length = 0}
     <p>주문하실 메뉴를 선택해 주세요.</p>
  {:else}
     <p>선택메뉴: {selected}</p>
  {/if}
</div>
