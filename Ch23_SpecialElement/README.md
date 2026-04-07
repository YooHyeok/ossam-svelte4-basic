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
# *[Ch22) Action](../Ch22_Action/README.md)*
# Ch23) SpecialElement
<details>
<summary>접기/펼치기</summary>
<br>

Svelte는 특별한 요소를 지원해준다.  
컴포넌트가 자기 자신을 호출하거나, window 혹은 document 객체를 직접적으로 선택할 수 있다.  
요소들을 내장해서 기능들을 지원함으로써 복잡해질 수 있는 코드를 간결하게 처리한다.  
`<svelte:요소>` 형태로 사용하며 `요소` 에 적용할 수 있는 종류는 아래와 같다.

1. self, component, element
2. window, document, body
3. head, option, fragment

## 01) self, component, element
<details>
<summary>접기/펼치기</summary>
<br>

### self
`<svelte:self>` 형태로 사용하며, 컴포넌트가 자기 자신을 재귀적으로 호출할 수 있게 된다.  
마크업의 최상위 영역에서는 사용이 불가능하며, 무한 호출을 방지하기 위해서는 If 블록이나 Each 블록 내부에 위치하거나 컴포넌트의 slot에 전달되어야 한다.  

### 예제) 5 → 1 카운트 1 감소 예제
- Self.svelte
  ```svelte
  <script>
    import Recursive from "./Recursive.svelte";
  </script>
  <div>
    <Recursive count={ 5 }/>
  </div>
  ```
- Recursive.svelte
  ```svelte
  <script>
    // import Recursive from "./Recursive.svelte";
    export let count;
  </script>
  <div>
    {#if count > 0}
      <p>카운트다운... {count}</p>
      <!-- <Recursive count={ count - 1 }/> -->
      <svelte:self count={ count - 1 }/>
    {:else}
      <p>발사!</p>
    {/if}
  </div>
  ```

#### 결과
```
카운트다운... 5
카운트다운... 4
카운트다운... 3
카운트다운... 2
카운트다운... 1
발사!
```

### component
`<svelte:component>` 형태로 사용하며, 변수에 담긴 컴포넌트를 동적으로 렌더링할 수 있게 된다.  
`<svelte:component this={js표현식}/>`과 같이 this 속성으로 지정된 컴포넌트 속성을 사용하여 컴포넌트를 동적으로 구현한다.  
이때 component 태그의 this속성은 렌더링 할 컴포넌트를 동적으로 선택하는 전용 속성이므로 bind:this와는 전혀 관계가 없다.

| 구분 | 역할 |
|------|------|
| `bind:this={변수}` | DOM 요소를 변수에 할당 |
| `<svelte:component this={컴포넌트}>` | 어떤 컴포넌트를 렌더링할지 지정 |

this값에는 렌더링 할 컴포넌트를 할당한다.
만약 this값이 거짓이라면 컴포넌트를 반환히지 않는다.  

### 예제) 선택된 컴포넌트 렌더링
- Food01.svelte
  ```svlete
  <h4>햄버거를 선택했습니다.</h4>
  ```
- Food02.svelte
  ```svlete
  <h4>피자를 선택했습니다.</h4>
  ```
- Food03.svelte
  ```svlete
  <h4>치킨을 선택했습니다.</h4>
  ```
#### if 블록 활용
```svelte
<script>
  import Food01 from "./Food01.svelte";
  import Food02 from "./Food02.svelte";
  import Food03 from "./Food03.svelte";
  const options = [
    { name: '햄버거' },
    { name: '피자' },
    { name: '치킨' },
  ]
  let selected = options[0]
</script>
<div>
  <h3>음식을 선택하세요.</h3>
  <select bind:value={selected}>
    {#each options as option (option.name)}
      <option value={option}>{option.name}</option>
    {/each}
  </select>
  {#if selected.name == '햄버거'} 
    <Food01 />
  {:else if selected.name == '치킨'}
    <Food02 />
  {:else}
    <Food03 />
  {/if}
</div>
```
#### component 태그 활용
```svelte
<script>
  import Food01 from "./Food01.svelte";
  import Food02 from "./Food02.svelte";
  import Food03 from "./Food03.svelte";
  const options = [
    { name: '햄버거', component: Food01 },
    { name: '피자', component: Food02 },
    { name: '치킨', component: Food03 },
  ]
  let selected = options[0]
</script>
<div>
  <h3>음식을 선택하세요.</h3>
  <select bind:value={selected}>
    {#each options as option (option.name)}
      <option value={option}>{option.name}</option>
    {/each}
  </select>
  <svelte:component this={selected.component} />
</div>
```

### element
`<svelte:element>` 형태로 사용하며, 문자열로 지정한 HTML 태그를 동적으로 렌더링할 수 있게 된다.  
element태그에 유일하게 지원되는 바인딩은 bind:this이다.  
Svelte가 빌드시 수행하는 요소 유형별 바인딩은 동적 태그를 이용해서 작동하지 않기 때문이다.  
여기서 말하는 요소 유형별 바인딩의 예시는 입력 요소에 대한 bind:value를 예로 들 수 있다. 있다.  
(Svelte는 컴파일 타임에 태그를 인식하여 bind:value를 적절히 처리할 수 있으나 element의 경우 런타임에 결정되기 때문에 bind:this외의 바인딩은 불가능하다.)  
this에 null값이 있으면 요소와 해당 하위 요소가 렌더링되지 않는다.  

#### 선택된 select option 태그
```svelte
<script>
  const options = ['h1', 'h3', 'p']
  let selected = options[0]
</script>
<div>
  <h3>음식을 선택하세요.</h3>
  <select bind:value={selected}>
    {#each options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
  <svelte:element this={selected}>
    현재 요소는 {selected} 입니다.
  </svelte:element>
</div>
```

</details>
<br>

## 
<details>
<summary>접기/펼치기</summary>
<br>

### 

</details>
<br>

## 
<details>
<summary>접기/펼치기</summary>
<br>

### 

</details>
<br>

</details>
<br>
