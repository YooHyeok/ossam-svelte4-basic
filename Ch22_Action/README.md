# *[ROOT/README.md](../README.md)*
# *[Svelte4 프로젝트 세팅](INSTALL.md)*
<br>

# *[Ch01) Component](../Ch01_Component/README.md)*
# *[Ch02) State 01 - 기본 및 @html](../Ch02_State01/README.md)*
# *[Ch02) State 02 - 이벤트 활용 및 객체, 객체-배열 타입](../Ch02_State02/README.md)*
# *[Ch03) Reactivity](../Ch03_Reactivity/README.md)*
# *[Ch04) Event](../Ch04_Event/README.md)*
# *[Ch05) Props](../Ch05_Props/README.md)*
# *[Ch06) IfBlock](../Ch06_IfBlock/README.md)*
# *[Ch07) EachBlock](../Ch07_EachBlock/README.md)*
# *[Ch08) Bind01 - input (value, checked, group)](../Ch08_Bind01/README.md)*
# *[Ch08) Bind01 - input (value, checked, group)](../Ch08_Bind01/README.md)*
# *[Ch09) Bind02 - select (multiple), textarea, media](../Ch09_Bind02/README.md)*
# *[Ch10) Bind03 - this, component, dimension](../Ch10_Bind03/README.md)*
# *[Ch11) Slot - 기본문법, Fallback, named, props, fragment, $$Slots](../Ch11_Slot/README.md)*
# *[Ch12) LifeCycle01: Hook - onMount, onDestroy, beforeUpdate, afterUpdate](../Ch12_LifeCycle01_Hook/README.md)*
# *[Ch13) LifeCycle02: 응용 - elizabot 활용 채팅, tick](../Ch13_LifeCycle02/README.md)*
# *[Ch14) PropDrilling과 ContextAPI](../Ch14_ContextAPI/README.md)*
# *[Ch15) Store](../Ch15_Store/README.md)*
# *[Ch16) Custom Store와 bind, ConetxtAPI 결합](../Ch16_CustomStore/README.md)*
# *[Ch17) CssClass](../Ch17_CssClass/README.md)*
# *[Ch18) Rollup 기반 Sass 적용](../Ch18_rollup-sass/README.md)*
# *[Ch19) Transition](../Ch19_Transition/README.md)*
# *[Ch20) Animation](../Ch20_Animation/README.md)*
# *[Ch21) Motion](../Ch21_Motion/README.md)*
# Ch22) Action
<details>
<summary>접기/펼치기</summary>
<br>

1. 액션 기본 개념
2. 액션 매개변수
3. update & destroy

## 01) 액션 기본 사용법
 
Action은 DOM 요소가 DOM에 추적될 때 실행하는 함수를 말한다.  
예를들어 요소가 없는 곳을 클릭했을 때 명령을 주거나, input 요소에 초점을 바로 받게 하고 싶을 때  
또는 기본적으로 제공되는 기능 외에도 HTML 요소에 특별한 동작을 주고 싶을 때  
위와같이 Svelte에서 DOM을 직접적으로 제어해야 하는 경우 Action을 사용하면 개발자가 특별한 동작을 제어할 수 있다.  

DOM 요소에는 `use:` 형태의 지시문을 이용하여 `use:함수명` 형태로 함수 명령을 받는다.  
바인딩 한 함수에는 Action을 지정한 DOM요소를 매개변수로 전달받을 수 있으며, 해당 매개변수를 node라고 통칭한다.  
node에 접근하여 특별한 동작을 주며, 일반 js 문법과 동일하게 요소에대한 속성들을 제공해준다.

```svelte
<script>
  const 액션명 = (node) => {
    // 실행 명령
  }
</script>
<요소 use:액션명 />
```

### 예제 01) 텍스트노드 빨강 적용
```svelte
<script>
  const colorChange = (node) => {
    node.style.color = 'red'
  }
</script>
<div>
  <h3 use:colorChange>제목태그1</h3>
  <h3>제목태그2</h3>
  <h3 use:colorChange>제목태그3</h3>
</div>
```


## 02) 액션 매개변수
`use:함수명={매개변수}` 형태로 작성하여 함수 두번째 매개변수로 특정 값을 매개변수로 전달할 수 있다.  
```svelte
<script>
  const 액션명 = (node, 매개변수) => {
    // 실행 명령
  }
</script>
<요소 use:액션명={매개변수} />
```

### 예제 02) input 포커싱 및 매개변수 값 세팅
```svelte
<script>
  //상태변수 선언
  let isInput01 = false;
  let isInput02 = false;

  //이벤트함수
  const handleClick01 = () => isInput01 = true;
  const handleClick02 = () => isInput02 = true;
  const inputFocus = (node, inputValue) => {
    node.focus() // 포커싱
    node.value = inputValue; // 매개변수 값처리
  }
</script>
<div>
  <button on:click={handleClick01}>첫번째입력요소활성</button>
  {#if isInput01}
  <input type="text" placeholder="첫번째" use:inputFocus={'값처리01'}/>
  {/if}
  <button on:click={handleClick02}>두번째입력요소활성</button>
  {#if isInput02}
  <input type="text" placeholder="두번째" use:inputFocus={'값처리02'}/>
  {/if}
</div>
```

## 03) update & destory
Action의 생명주기 함수로 액션 함수의 return문에 작성한다.

- update: 해당 액션이 사용하는 DOM 요소에서 값이 변경될 때 사용한다
- destroy: 해당 액션이 사용하는 DOM 요소가 사라질 때 작성한다.

```svelte
<script>
  const 액션명 = (node, 매개변수) => {
    // 실행 명령
	return {
	  update: (newValue) => {
	  },
	  destroy: () => {
	  },
  }
</script>
<요소 use:액션명={매개변수} />
```

### 예제03) update/destroy 활용 input 출력값 제어
버튼 클릭 후 input이 활성화 된 상태에서 값이 변경될경우 변경을 감지하여 update 생명주기 함수에 매개변수로 신규값을 전달하고, 초기화시킨다.  
비활성 버튼을 통해 해당 영역을 DOM에서 제거할경우 경우 제거를 감지하여 destory 생명주기 함수를 통해 바인딩한 value값을 초기화한다.  
```svelte
<script>
  //상태변수 선언
  let isInput = false;
  let inputValue = '아직 없음';

  //이벤트함수
  const handleClick = (param) => isInput = param

  //초점액션
  const inputFocus = (node, value) => {
    node.focus();
    node.value = value;
    return {
      // input value속성 값을 감지하여 변경되면 실행
      update: (newValue) => { 
        node.value = newValue;
      },
      destroy: () => {
        inputValue = '없음';
      },
    }
  }
</script>
<div>
  <button on:click={() => handleClick(true)}>활성</button>
  <button on:click={() => handleClick(false)}>비활성</button>
  <hr />
  {#if isInput}
    <input type="text" bind:value={inputValue} use:inputFocus={inputValue} />
  {/if}
  <h3>입력값 : {inputValue}</h3>
</div>
```


</details>
<br>
