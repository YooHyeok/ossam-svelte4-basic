<script>
  let count = 0

  const handleClick = () => count++
</script>
<div>
  <h1>Reactivity01) </h1>
  <button on:click={handleClick}>클릭 수 : {count} {count <= 1 ? 'time' : 'times'}</button>
</div>