<script>
  let name = ''
</script>
<div>
  <h1>bind:value - text</h1>
  <input 
    type=text
    placeholder="이름을 입력하세요."
    bind:value={name}
  >
  <p>안녕! {name || '낯선사람'}!</p>
</div>