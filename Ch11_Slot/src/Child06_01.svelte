
<div class="box">
	<!-- 
		$$slots를 활용하여 자식 컴포넌트에서 정의한 slot의 name을 부모 컴포넌트에서 지정하여 전달했는지 여부를 확인할 수 있다.  
	-->
	<h4>
		{#if $$slots.name}
			이름 : <slot name="name"/>
		{:else}
			전달받은 이름이 없습니다.
		{/if}
	</h4>
	<p>
		{#if $$slots.release}
			배포년도 : <slot name="release"/>년
		{:else}
			전달받은 배포년도가 없습니다.
		{/if}
	</p>
	{#if $$slots.img}
		<slot name="img"/>
	{:else}
		전달받은 이미지가 없습니다.
	{/if}
	<!-- 
		위와 같이 간단한 경우는 fallback으로 처리가 가능하다.  
		컴파일 결과 관점에서는 slot fallback이 더 단순하게 동작하기 때문에 단순 기본값이면 fallback을 쓰는 것이 더 자연스러운 패턴이다.  
		여러개의 slot이 모두 존재할때 해당 영역을 모두 보여주거나, DOM 구조를 변경할 때 즉, 전혀 다른 내용의 dom을 보여줄때 사용하는것을 권장한다.
	-->
</div>
<style>
	.box{
		width: 300px; padding: 10px;
		border: 2px solid black; margin-bottom: 20px;
	}
</style>