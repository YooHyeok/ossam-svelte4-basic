<script>
  import { afterUpdate, beforeUpdate, onDestroy, onMount } from "svelte";
  beforeUpdate(()=>console.log("[Child02] - beforeUpdate"))
  onMount(()=>console.log("[Child02] - onMount"))
  afterUpdate(()=>console.log("[Child02] - afterUpdate"))
  onDestroy(()=>console.log("[Child02] - onDestroy"))
</script>
<div>
  <h1>Child02</h1>
</div>