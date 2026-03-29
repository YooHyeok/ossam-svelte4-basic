<script>
  import { fly } from 'svelte/transition'
  let visible = false
</script>
<div>
  <h4>fly - 파라미터</h4>
  <label>
    <input type="checkbox" bind:checked={visible} />보임
  </label>
  {#if visible}
  <p transition:fly={{ x: -200, y: -200 }}>Svelte Fly Effect</p>
  {/if}
</div>
<style>
  p {
    height: 100px;
    background-color: orange;
  }
</style>