<script>
  import Child04 from "./Child04.svelte";
</script>
<div>
  <h1>04) props - slot props</h1>
  <Child04>
    <h4 let:hovering slot="name" class:active={hovering}>스벨트(Svelte)</h4>
    <p slot="release">2016</p>
    <img slot="img" src="https://svelte.dev/_app/immutable/assets/svelte-logo.5c5d7d20.svg" alt="스벨트(Svelte)" height="50" />
  </Child04>
  <Child04>
    <h4 let:hovering slot="name" class:active={hovering}>리액트(React)</h4>
    <p slot="release"> 배포년도 : 2013년</p>
    <img slot="img" src="https://ko.legacy.reactjs.org/favicon.ico" alt="리액트(React)" height="50" />
  </Child04>
</div>
<br>
<style>
  .active{
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }
</style>