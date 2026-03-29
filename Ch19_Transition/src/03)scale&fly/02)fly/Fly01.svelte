<script>
  import { fly } from 'svelte/transition'
  let visible = false
</script>
<div>
  <h4>fly - 기본예제</h4>
  <label>
    <input type="checkbox" bind:checked={visible} />보임
  </label>
  {#if visible}
  <p transition:fly>Svelte Fly Effect</p>
  {/if}
</div>
<style>
  p {
    height: 100px;
    background-color: orange;
  }
</style>