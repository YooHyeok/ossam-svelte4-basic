<script>
  let choiceSize1 = [0]
  let sizes1 = ['Tall', 'Grande', 'Venti']
  let choiceSize2 = ['Tall']
  let sizes2 = ['Tall', 'Grande', 'Venti']
</script>
<div>
  <h1>04) bind:group - checkbox</h1>
  {#each sizes1 as size, index}
    <label>
      <input type=checkbox bind:group={choiceSize1} value={index}> {size}
    </label>
  {/each}
  <p>고객님은 {choiceSize1.map(el => sizes1[el])}를 선택하셨습니다.</p> 
  <!-- checkbox의 group에는 선택된 값들이 배열로 관리된다. -->
  {#each sizes2 as size, index}
  <label>
    <input type=checkbox bind:group={choiceSize2} value={size}> {size}
  </label>
  {/each}
  <p>고객님은 {choiceSize2}를 선택하셨습니다.</p>
</div>