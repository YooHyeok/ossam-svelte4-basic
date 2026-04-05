<script>
  import { flip } from "svelte/animate";
  import { dndzone } from 'svelte-dnd-action'

  let items = [
    {id: 1, name: "item1"},
    {id: 2, name: "item2"},
    {id: 3, name: "item3"},
    {id: 4, name: "item4"}
  ];

  const flipDurationMs = 300;

  const handleDndConsider = (e) => { // Consider: 드래그앤드롭 시작 시점 이벤트
    items = e.detail.items
  }
  const handleDndFinalize = (e) => { // Finalize: 드래그앤드롭 종료 시점 이벤트
    items = e.detail.items
  }

</script>

<div>
  <h2>01)Dnd Zone - Drag And Drop</h2>
  <section use:dndzone={{items, flipDurationMs}} on:consider={handleDndConsider} on:finalize={handleDndFinalize}>
    {#each items as item(item.id)}
      <div animate:flip={{duration: flipDurationMs}}>{item.name}</div>
    {/each}
  </section>
</div>

<style>
  section {
    width: 50%; padding: 0.3em;
    border: 1px solid black;
    overflow: scroll; height: 200px;
  }
  section > div {
    width: 50%; padding: 0.2em; margin: 0.15em 0;
    background-color: blue; color: white;
  }
</style>