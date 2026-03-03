<script>
  import Child02 from "./Child02.svelte";
</script>
<div>
  <h1>02) 기본값 - Fallback Slot</h1>
  <Child02>
    <h4>이름 : 스벨트(Svelte)</h4>
    <p>배포년도 : 2016년</p>
    <img src="https://svelte.dev/_app/immutable/assets/svelte-logo.5c5d7d20.svg" alt="스벨트(Svelte)" height="50" />
  </Child02>
  <Child02>
    <h4>이름 : 리액트(React)</h4>
    <p>배포년도 : 2013년</p>
    <img src="https://ko.legacy.reactjs.org/favicon.ico" alt="리액트(React)" height="50" />
  </Child02>
  <Child02/> <!-- 마크업 미전달 -->
  <Child02/> <!-- 마크업 미전달 -->
  <Child02/> <!-- 마크업 미전달 -->
</div>
<br>