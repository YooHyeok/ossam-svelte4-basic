<script>
  import Child05 from "./Child05.svelte";
</script>
<div>
  <h1>05) 가상 Dom Wrapper - svelte:fragment</h1>
  <!-- 
    <svelte:fragment>는 실제 Dom에 렌더링 되지 않는 가상의 Wrapper 요소이다. 
    자식 컴포넌트의 slot 영역에 전달할 노드들이 단일 노드가 아닌 복수 노드이고, 
    이를 실체가 있는 dom이 아닌 하나의 그룹으로 묶어 전달하기 위해 사용한다.
    예를들어 <div> 요소에 전역으로 css 효과가 적용되어 있고 
    자식 컴포넌트에서 <div> 영억 안에 3개의 태그 요소를 적재해야 할 때, 
    <div> 요소에 한번 감싸서 보낸다면 원하는 출력물을 얻지 못하고 레이아웃이 틀어질 수 있다.
    이런 경우 가상으로 그룹화 하여 전달할 수 있도록 도와준다.
    이는 react의 <></>와 유사하다.
    react와 vue2는 컴포넌트 내에 기본적으로 root노드로 fragment가 필요한 반면, 
    vue3와 svelte에서는 root노드를 허용하기 때문에 일반적으로는 사용하지 않기 때문에 slot을 사용할때만 필요한 문법이다.  
    (실제로 svelte:fragment를 선언하면 자식 컴포넌트의 자식이어야 한다고 경고를 출력한다.)  
    vue3에서 slot에 fragment를 사용할때는 <template> 태그를 활용하고, svelte에서는 <svelte:fragment>로 사용한다.
  -->
  <Child05>
    <svelte:fragment slot="name" >스벨트(Svelte)</svelte:fragment>
    <svelte:fragment slot="release">2016</svelte:fragment>
    <svelte:fragment slot="img">
      <img src="https://svelte.dev/_app/immutable/assets/svelte-logo.5c5d7d20.svg" alt="스벨트(Svelte)" height="50" />
    </svelte:fragment>
  </Child05>
  <Child05>
    <svelte:fragment slot="name" >리액트(React)</svelte:fragment>
    <svelte:fragment slot="release">2013</svelte:fragment>
    <svelte:fragment slot="img">
      <img src="https://ko.legacy.reactjs.org/favicon.ico" alt="리액트(React)" height="50" />
    </svelte:fragment>
  </Child05>
</div>
<br>