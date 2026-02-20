<script>
  let weekDays = ['일', '월', '화', '수', '목', '금', '토'] 
</script>
<div>
  <h1>01) 기본</h1>
  <select>
    {#each weekDays as weekday}
    <option>{weekday}요일</option>
    {/each}
  </select>
</div>