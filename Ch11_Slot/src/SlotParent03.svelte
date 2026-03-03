<script>
  import Child03 from "./Child03.svelte";
</script>
<div>
  <h1>03) named slot - slot 이름 설정</h1>
  <!-- 
    자식 컴포넌트에 여러 slot영역이 존재할 경우 각 slot에 이름 부여 후 
    부모 컴포넌트에서 전달하려는 dom 요소를 원하는 위치에 배치하기 위해 사용하는 기능이다.
    자식 컴포넌트의 slot 태그에서 vue와 동일하게 `name='이름'` 형태로 name 속성에 이름을 부여한다.
    부모 컴포넌트에서는 `slot="이름"` 형태로 사용하며 vue의 `v-slot:이름`(혹은 `#이름`) 문법과 동일한 의미를 갖는다.
  -->
  <Child03>
    <h4 slot="name">스벨트(Svelte)</h4>
    <p slot="release">2016</p>
    <img slot="img" src="https://svelte.dev/_app/immutable/assets/svelte-logo.5c5d7d20.svg" alt="스벨트(Svelte)" height="50" />
  </Child03>
  <Child03>
    <h4 slot="name">리액트(React)</h4>
    <p slot="release">2013</p>
    <img slot="img" src="https://ko.legacy.reactjs.org/favicon.ico" alt="리액트(React)" height="50" />
  </Child03>
  <Child03/> <!-- 마크업 미전달 -->
  <Child03/> <!-- 마크업 미전달 -->
  <Child03/> <!-- 마크업 미전달 -->
</div>
<br>