<script>
  //상태변수 선언
  let isInput = false;
  let inputValue = '아직 없음';

  //이벤트함수
  const handleClick = (param) => {
    isInput = param;
  }

  //초점액션
  const inputFocus = (node, value) => {
    node.focus();
    node.value = value;
    return {
      update: (newValue) => { // input value속성 값을 감지하여 변경되면 실행
        node.value = newValue;
      },
      destroy: () => {
        inputValue = '없음';
      },
    }
  }
</script>
<div>
  <h1>04) Action - update & destroy </h1>
  <button on:click={() => handleClick(true)}>활성</button>
  <button on:click={() => handleClick(false)}>비활성</button>
  <hr />
  {#if isInput}
    <input type="text" bind:value={inputValue} use:inputFocus={inputValue} />
  {/if}
  <h3>입력값 : {inputValue}</h3>
</div>