<script>
  import Drag from './Drag.svelte';

  let bid = 1;
  let buckets = [
    { id: bid++, chk: false, title: '웹프론트엔드개발자되기' },
    { id: bid++, chk: false, title: '유럽여행가기' },
    { id: bid++, chk: false, title: '영국가서 손흥민 축구보기' }
  ];

  let finished = [];
</script>

<div>
  <h2>02)Multiple Dnd Zone - Bucket List</h2>
  <div class="bucketBlock">
    <div class="unfinished">
      <h3>Unfinished Buckets</h3>
      <Drag items={buckets} chk={false}/>
      </div>
      <div class="finished">
      <h3>Finished Buckets</h3>
      <Drag items={finished} chk={true}/>
    </div>
  </div>
</div>

<style>
  .bucketBlock{ display: flex; }
  .bucketBlock > div{ width: 310px; }
  .unfinished{ margin-right: 40px; }
</style>