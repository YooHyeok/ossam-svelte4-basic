<script>
  import { onDestroy, onMount } from "svelte";
  onMount(()=>console.log("[Child01] - onMount"))
  onDestroy(()=>console.log("[Child01] - onDestroy"))
</script>
<div>
  <h1>Child</h1>
</div>