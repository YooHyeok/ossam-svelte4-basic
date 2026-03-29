<script>
  import { draw } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'
  let visible = false;
</script>
<div>
  <h1>04_01) draw</h1>
  <label>
    <input type="checkbox" bind:checked={visible} /> 그리기/지우기
  </label> 

  <svg viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg" width="150" height="150">
    {#if visible}
    <path
        transition:draw={{ duration: 5000, delay: 500, easing:quintOut }}
        d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
        fill="none"
        stroke="cornflowerblue"
        stroke-width="0.1px"
        stroke-linejoin="round"
      />
    {/if}
  </svg>
</div>