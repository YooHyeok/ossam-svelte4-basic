<script>
  import { getContext } from "svelte";
  let state = getContext("state");
  $:square = state.num * state.num
</script>

<div>
    <h3>Child 구역</h3>
    <p>제곱 숫자 : {state.num}</p>
    <p>제곱 숫자 : {square}</p>
</div>