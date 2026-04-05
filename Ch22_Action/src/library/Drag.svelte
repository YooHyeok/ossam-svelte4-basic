<script>
  import { flip } from "svelte/animate";
  import { dndzone } from 'svelte-dnd-action'

  export let items = []
  export let chk;

  const flipDurationMs = 200;

  const handleSort = (e) => { // Consider: 드래그앤드롭 시작 시점 이벤트
    items = e.detail.items.map(item => ({
      ...item, chk:chk
    }))
  }

</script>

<div class="drag" use:dndzone={{items, flipDurationMs}} on:consider={handleSort} on:finalize={handleSort}>
  {#each items as item (item.id)}
    <div animate:flip={{duration: flipDurationMs}}>
      <input type="text" style="width: 250px" bind:value={item.title} disabled={chk} />
    </div>
  {/each}
</div>

<style>
  .drag{
    width: 100%; min-height: 180px;
    border: 1px solid #ededed;
    padding: 20px; box-sizing: border-box;
  }
</style>