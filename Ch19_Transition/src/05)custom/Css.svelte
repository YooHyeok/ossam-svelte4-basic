<script>
  import { fade } from "svelte/transition";
  import { elasticOut } from "svelte/easing";
    let visible = false;
    function spin(node, { duration }) {
      return {
        duration,
        css: (t) => { // 나타날때만 처리하므로 t만 받음
          const eased = elasticOut(t)
          return `
            transform: scale(${eased}) rotate(${eased * 1080}deg);
          `;
        }
      }
    }
</script>

<div class="wrapper">
  <h2>01) Css</h2>
  <label>
    <input type="checkbox" bind:checked={visible} /> 보임
  </label>
  
  {#if visible}
  <div class="centered" in:spin={{ duration:8000 }} out:fade>
    <span>transitions!</span>
  </div>
  {/if}
  
</div>
<style>
  .wrapper {
    position: relative;
    min-height: 200px;
  }
  .centered {
    position: absolute; left: 50%; top: 50%;
    transform: translate(-50%, -50%);
  }
  span {
    position: absolute; font-size: 4em;
    transform: translate(-50%, -50%);
  }
</style>