<script>
  let portals = [
    { name: '사이트선택', url: null },
    { name: '네이버', url: 'https://naver.com' },
    { name: '다음', url: 'https://daum.net' },
    { name: '구글', url: 'https://google.com' }
  ];
  let selected;
  const selectChange = (event) => {
    console.log(event.target.value)
    if (selected != null) {
      window.open(selected)
    }
  }
</script>
<div>
  <h1>01) select bind:value</h1>
  <select bind:value={selected} on:change={selectChange}>
    {#each portals as portal}
      <option value={portal.url}>{portal.name}</option>
    {/each}
  </select>
</div>