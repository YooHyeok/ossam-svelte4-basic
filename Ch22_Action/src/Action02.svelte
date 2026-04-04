<script>
  //상태변수 선언
  let isInput01 = false;
  let isInput02 = false;

  //이벤트함수
  const handleClick01 = () => {
    isInput01 = true;
  }
  const handleClick02 = () => {
    isInput02 = true;
  }
  const inputFocus = (node) => {
    node.focus()
  }
</script>
<div>
  <h1>02) Action 기본 - 버튼클릭시 출력되는 input 포커싱</h1>
  <button on:click={handleClick01}>첫번째입력요소활성</button>
  {#if isInput01}
  <input type="text" placeholder="첫번째" use:inputFocus/>
  {/if}
  <button on:click={handleClick02}>두번째입력요소활성</button>
  {#if isInput02}
  <input type="text" placeholder="두번째" use:inputFocus/>
  {/if}
</div>