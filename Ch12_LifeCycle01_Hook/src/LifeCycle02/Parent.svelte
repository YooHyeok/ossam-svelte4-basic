<script>
    import Child from "./Child.svelte";

  let isChildElementView = false;
</script>
<div>
  <h1>02) onMount, onDestory</h1>
  <h4>F12를 눌러 개발자도구 콘솔을 확인하세요.</h4>
  <button on:click={() => isChildElementView = true}>자식 컴포넌트 활성화</button>
  <button on:click={() => isChildElementView = false}>자식 컴포넌트 비활성화</button>
  {#if isChildElementView}
    <Child />
  {/if}
</div>