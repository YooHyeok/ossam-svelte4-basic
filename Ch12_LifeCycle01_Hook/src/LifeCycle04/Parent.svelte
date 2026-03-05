<script>
    import { afterUpdate, beforeUpdate, onDestroy, onMount } from "svelte";
    import Child from "./Child.svelte";

  let cnt = 0;
  beforeUpdate(()=>console.log("[Parent02] - beforeUpdate"))
  onMount(()=>console.log("[Parent02] - onMount"))
  afterUpdate(()=>console.log("[Parent02] - afterUpdate"))
  onDestroy(()=>console.log("[Parent02] - onDestroy"))
</script>
<div>
  <h1>04) 부모/자식 훅 실행 순서</h1>
  <h4>F12를 눌러 개발자도구 콘솔을 확인하세요.</h4>
  <p>{ cnt }</p>
  <button on:click={() => cnt = cnt+1}>Count+1 - Update훅 실행 및 Child 렌더링</button>
  <button on:click={() => cnt = 0}>Chlid 해제</button>
  {#if cnt >= 2}
    <Child />
  {/if}
</div>