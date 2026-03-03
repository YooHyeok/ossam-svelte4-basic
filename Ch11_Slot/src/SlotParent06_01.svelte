<script>
  import Child06_01 from "./Child06_01.svelte";
</script>
<div>
  <h1>06_01) $$slots - 부모 전달 slot 객체(name)</h1>
  <Child06_01>
    <svelte:fragment slot="name">스벨트(Svelte)</svelte:fragment>
  </Child06_01>
  <Child06_01>
    <svelte:fragment slot="release">2016</svelte:fragment>
  </Child06_01>
  <Child06_01>
    <svelte:fragment slot="img">
      <img src="https://svelte.dev/_app/immutable/assets/svelte-logo.5c5d7d20.svg" alt="스벨트(Svelte)" height="50" />
    </svelte:fragment>
  </Child06_01>
</div>
<br>