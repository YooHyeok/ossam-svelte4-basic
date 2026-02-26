<script>
  let buckets = [
    { chk: false, text: '웹 풀스택 개발자 되기' },
    { chk: false, text: '유럽여행가기' },
    { chk: false, text: '영국가서 손흥민 축구보기' }
  ];
  $: remaining = buckets.filter(bucket => !bucket.chk).length
  const onAdd = () => {
    buckets = [...buckets, { chk: false, text: '' }] // 가장 성능이 좋음
    // buckets = buckets.concat({ chk: false, text: '' })
    // buckets.push({ chk: false, text: '' }) // push는 성능에 좋지않음
    // buckets = buckets
  }
  const onRemove = () => {
    buckets = buckets.filter(bucket => !bucket.chk)
  }
</script>
<div>
  <h1>04) each블록 바인드 예제 - 버킷리스트</h1>
  {#each buckets as bucket}
  <div>
    <input type="checkbox" bind:checked={bucket.chk}/>
    <input type="text" placeholder="당신의 버킷리스트는 뭔가요?" bind:value={bucket.text} style="width: 250px">
  </div>
  {/each}

  <p>남은 버킷리스트 : {remaining}</p>
  <button on:click={onAdd}>새로운 버킷 추가</button>
  <button on:click={onRemove}>성공한 버킷 제거</button>
</div>
