<script>
  let hovering;
  const enter = () => hovering = true
  const leave = () => hovering = false
</script>
<div class="box">
	<h4 on:mouseenter={enter} on:mouseleave={leave}>이름 : </h4><slot hovering={hovering} name="name"><h4>전달받은 이름이 없습니다.</h4></slot>
	<p>배포년도 : <slot name="release">전달받은 배포년도가 없습니다.</slot>년</p>
	<slot name="img">전달받은 이미지가 없습니다.</slot>
</div>
<style>
  .box{
    width: 300px; padding: 10px;
    border: 2px solid black; margin-bottom: 20px;
  }
</style>