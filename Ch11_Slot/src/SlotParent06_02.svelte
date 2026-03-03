<script>
  import Child06_02 from "./Child06_02.svelte";
</script>
<div>
  <h1>06_02) $$slots - 부모 전달 slot 객체(name)</h1>
  <Child06_02>
    <svelte:fragment slot="name">스벨트(Svelte)</svelte:fragment>
  </Child06_02>
  <Child06_02>
    <svelte:fragment slot="name">스벨트(Svelte)</svelte:fragment>
    <svelte:fragment slot="release">2016</svelte:fragment>
  </Child06_02>
  <Child06_02> <!-- 3개 모두 다 전달해야 출력된다. -->
    <svelte:fragment slot="name">스벨트(Svelte)</svelte:fragment>
    <svelte:fragment slot="release">2016</svelte:fragment>
    <svelte:fragment slot="img">
      <img src="https://ko.legacy.reactjs.org/favicon.ico" alt="리액트(React)" height="50" />
    </svelte:fragment>
  </Child06_02>
</div>