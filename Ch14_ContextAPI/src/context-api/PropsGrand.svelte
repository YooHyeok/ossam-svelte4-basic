<script>
  import { setContext } from "svelte";
  import PropsFather from "./PropsFather.svelte";
  let state = {num : 1};
  setContext("state", state)
</script>

<div>
  <h1>02)ContextAPI</h1>
  <h4>Grand 구역</h4>
  <!-- <button on:click={() => state = {...state, num: state.num + 1}}>1씩 증가</button> -->
  <button on:click={() => state.num++}>1씩 증가</button>
  <p>기본 숫자 : {state.num}</p>
  <hr />
  <PropsFather />
</div>