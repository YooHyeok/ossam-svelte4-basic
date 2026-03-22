<script>
  import { count } from '../../../store/writable'
  const increment = () => count.increment()
</script>
<button on:click={increment}>+</button>