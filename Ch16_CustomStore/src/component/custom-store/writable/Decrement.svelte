<script>
  import { count } from '../../../store/writable'
  const decrement = () => count.decrement()
</script>
<button on:click={decrement}>-</button>