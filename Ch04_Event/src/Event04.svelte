<script>
  const handleClick = text => alert(`${text}`)
</script>
<div>
  <h1>Event04) 이벤트 수식어 </h1>
  <!-- vue의 @click.prevent.stop 과 동일 -->
  <button on:click|preventDefault|stopPropagation={e => handleClick('1번')}>버튼1</button>
  <button on:click|once={e => handleClick('1번')}>버튼2</button>
  <a on:click|preventDefault={e => {confirm('유투브로 이동하시겠습니까?') && location.assign('https://youtube.com')}} href="https://youtube.com">[youtube 링크] preventDefault:기본이벤트 제거</a>
</div>