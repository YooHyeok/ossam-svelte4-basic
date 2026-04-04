<script>
  const colorChange = (node) => {
    node.style.color = 'red'
  }
</script>
<div>
  <h1>01) Action 기본 - 텍스트노드 빨강 적용</h1>
  <h3 use:colorChange>제목태그1</h3>
  <h3>제목태그2</h3>
  <h3 use:colorChange>제목태그3</h3>
</div>