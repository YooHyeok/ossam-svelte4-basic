<script>
  import { count } from '../../../store/writable'
  const reset = () => count.reset()
</script>
<button on:click={reset}>reset</button>