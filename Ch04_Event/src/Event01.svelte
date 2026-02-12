<script>
  let m = {
    x: 0,
    y: 0,
  }
  const handleMouseMove = e => {
    m.x = e.clientX
    m.y = e.clientY
  }
</script>
<div>
  <h1>Event01) 마우스오버 좌표 출력 프로그램</h1>
  <div on:mousemove={handleMouseMove}>
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