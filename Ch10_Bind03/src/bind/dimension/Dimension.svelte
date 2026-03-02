<script>
  let w; // div 태그의 폭
  let h; // div 태그의 높이
  let size = 20; // 글자 크기
</script>

<p>슬라이드바로 글자 크기를 변경해보세요.</p>
<input type="range" min="10" max="100" bind:value={size} />
<p>글자 크기 : {size}px</p>
<div bind:clientWidth={w} bind:clientHeight={h}>
    <span style="font-size: {size}px;">글자</span>
</div>
<ul>
    <li>가로 폭 : {w}</li>
    <li>세로 높이 : {h}</li>
</ul>

<style>
    div{ display: inline-block; border: 3px solid black; }
</style>