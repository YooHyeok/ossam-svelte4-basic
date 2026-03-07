<script>
    import { tick } from "svelte";

  let active;
  let input;
  const handleCilck1 = (param) => {
    active = param
    tick().then(() => {
    if (active) {
        input.focus()
      }
    })
  };
  const handleCilck2 = async (param) => {
    active = param
    await tick()
    if (active) {
      input.focus()
    }
  };
</script>
<div>
  <h1>Tick</h1>
  <button on:click={() => handleCilck1(true)}>input 활성화</button>
  <button on:click={() => handleCilck1(false)}>input 비활성화</button>
  {#if active}
  <div>
    <input type="text" bind:this={input} />
  </div>
  {/if}
</div>