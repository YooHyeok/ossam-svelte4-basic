<script>
  let choiceSize1 = 0
  let sizes1 = ['Tall', 'Grande', 'Venti']
  let choiceSize2 = 'Tall'
  let sizes2 = ['Tall', 'Grande', 'Venti']
</script>
<div>
  <h1>05) bind:group - radio</h1>
  {#each sizes1 as size, index}
    <label>
      <input type=radio bind:group={choiceSize1} value={index}> {size}
    </label>
  {/each}
  <p>고객님은 {sizes1[choiceSize1]}를 선택하셨습니다.</p>
  {#each sizes2 as size, index}
  <label>
    <input type=radio bind:group={choiceSize2} value={size}> {size}
  </label>
  {/each}
  <p>고객님은 {choiceSize2}를 선택하셨습니다.</p>
  <!-- group 값이 선택된 radio의 value값 이므로 group에 바인딩 한 변수가 선택된 값이 된다. -->
</div>