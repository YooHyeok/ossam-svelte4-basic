
{#if $$slots.name && $$slots.release && $$slots.img}
<div class="box">
	<h4>이름 : <slot name="name"/></h4>
	<p>배포년도 : <slot name="release"/>년</p>
	<slot name="img"/>
</div>
{:else}
<h4>name에 해당하는 모든 슬롯을 전달해야 출력됩니다.</h4>
{/if}
<style>
	.box{
		width: 300px; padding: 10px;
		border: 2px solid black; margin-bottom: 20px;
	}
</style>