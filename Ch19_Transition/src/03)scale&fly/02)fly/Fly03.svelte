<script>
  import { fly } from 'svelte/transition'
  
  let visible = false
</script>
<div>
  <h4>fly - in: out:</h4>
  <label>
    <input type="checkbox" bind:checked={visible} />보임
  </label>
  {#if visible}
  <p 
    in:fly={{ x: -300 }}
    out:fly={{ y: -300 }}
  >Svelte Fly Effect</p>
  {/if}
</div>
<style>
  p {
    height: 100px;
    background-color: orange;
  }
</style>