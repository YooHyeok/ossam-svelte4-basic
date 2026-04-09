<script>
  import Child03 from "./Child03.svelte";
</script>

<Child03>
  <span slot="name">스벨트(Svelte)</span>
  <span slot="release">2016</span>
</Child03>
<Child03>
  <span slot="name">리액트(React)</span>
  <span slot="release">2013</span>
</Child03>
<!-- svelte:fragment: 태그가 지정되지는 않지만, 블록처럼 하나로 묶어주는 처리 - span태그에 css가 적용되거나 변경될 수 있는 경우를 대비 -->
<Child03>
  <svelte:fragment slot="name">앵귤러(Angular)</svelte:fragment>
  <svelte:fragment slot="release">2010</svelte:fragment>
</Child03>
<Child03>
  <svelte:fragment slot="name">뷰(Vue)</svelte:fragment>
  <svelte:fragment slot="release">2014</svelte:fragment>
</Child03>
<Child03></Child03>