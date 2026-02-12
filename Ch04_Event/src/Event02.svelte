<script>
  let m = {
    x: 0,
    y: 0,
  }
</script>
<div>
  <h1>Event02) 인라인 이벤트 핸들러</h1>
  <div on:mousemove={e => m = {x: e.clientX, y: e.clientY}}>
    x좌표 : {m.x} <br>
    y좌표 : {m.y}
  </div>
</div>
<style>
  div {
    width: 100%; height: 50%;
    background-color: pink;
  }
</style>