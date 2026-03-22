<script>
  import { writable } from 'svelte/store'
  import { setContext } from "svelte";
  import ContextFather from "./ContextFather.svelte";

  // let num = 1;
  let num = writable(1);
  setContext("num", num)
</script>

<div>
  <h1>02)ContextAPI</h1>
  <h4>Grand 구역</h4>
  <button on:click={() => $num++}>1씩 증가</button>
  <p>기본 숫자 : {$num}</p>
  <hr />
  <ContextFather />
</div>