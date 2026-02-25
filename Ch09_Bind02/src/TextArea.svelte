<script>
  let text = '내용을 입력하세요.'
</script>
<div>
  <h1>03) TextArea bind:value</h1>
  <textarea value="value속성으로 텍스트 할당" rows="5"></textarea>
  <textarea rows="5">텍스트노드로 텍스트 할당</textarea>
  <textarea bind:value={text} rows="5"/>
  <p>{text}</p>
</div>
