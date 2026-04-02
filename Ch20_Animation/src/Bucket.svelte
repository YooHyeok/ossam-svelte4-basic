<script>
  import { flip } from "svelte/animate";
  import { crossfade } from "svelte/transition";
  import { quintOut } from 'svelte/easing'
  const [send, receive] = crossfade({
    duration: 400, // 보내고 받을 때의 시간 설정(기본값)
    easing: quintOut, // 보내고 받을 때의 easing함수
    fallback(node, params) {
      return {
        duration: 300,
        easing: quintOut,
        css: t => `
          transform: scale(${t});
          opacity: ${t};
        `
      }
    }
  })

  const move = (item, from, to) => {
    // item: 선택된 요소, from: 요소의 현재 배열, to: 이동할 배열
    to.push(item)
    return [from.filter(i => i !== item), to];
  }

  const moveLeft = item => {
     // finished, buckets 초기화 (구조분해는 let, const 키워드가 없는 경우 기존 변수에 덮어씌운다.)
    [finished, buckets] = move(item, finished, buckets)
  }
  const moveRight = item => {
    // buckets, finished 초기화 (구조분해는 let, const 키워드가 없는 경우 기존 변수에 덮어씌운다.)
    [buckets, finished] = move(item, buckets, finished)
  }

  //미완료버킷리스트
  let bid = 1;
  let buckets = [
    { id: bid++, chk: false, text: '웹프론트엔드개발자되기' },
    { id: bid++, chk: false, text: '유럽여행가기' },
    { id: bid++, chk: false, text: '영국가서 손흥민 축구보기' }
  ];
  //남은 버킷개수
  $: remainingBuckets = buckets.filter(bucket => !bucket.chk).length;

  //완료버킷리스트
  let finished = [];
  //완료된 버킷개수
  $: finishedBuckets = finished.filter(bucket => bucket.chk).length;

  //버킷리스트 추가 이벤트 함수
  const onAdd = () => {
    buckets = buckets.concat({ id: bid++, chk: false, text: '' });
  }
</script>
<div>
  <h1>02) Animation - 신규 추가되는 버킷 애니메이숀 효과</h1>
  <h2>Bucket List</h2>
  <div class="bucketBlock">
    <!-- 미완료 구역 -->
    <div class="unfinished">
      <h3>Unfinished Buckets</h3>
      {#each buckets as bucket (bucket.id)}
        <div animate:flip in:receive={{ key: bucket.id }} out:send={{ key:bucket.id }}>
          <input type="checkbox" bind:checked={bucket.chk} on:change={() => moveRight(bucket)}/>
          <input type="text" placeholder="당신의 버킷리스트는 뭔가요?" style="width: 250px" bind:value={bucket.text} disabled={bucket.chk} />
        </div>
      {/each}
      <p>남은 버킷리스트 : {remainingBuckets}</p>
      <button on:click={onAdd}>새로운 버킷 추가</button>
    </div>
    <!-- 완료 구역 -->
    <div class="finished">
      <h3>Finished Buckets</h3>
      {#each finished as bucket (bucket.id)}
        <div animate:flip in:receive={{ key: bucket.id }} out:send={{ key:bucket.id }}>
          <input type="checkbox" bind:checked={bucket.chk} on:change={() => moveLeft(bucket)}/>
          <input type="text" placeholder="당신의 버킷리스트는 뭔가요?" style="width: 250px" bind:value={bucket.text} disabled={bucket.chk} />
        </div>
      {/each}
      <p>완료된 버킷리스트 : {finishedBuckets}</p>
    </div>
  </div>
</div>

<style>
    .bucketBlock{ display: flex; }
    .unfinished{ margin-right: 40px; }
</style>
