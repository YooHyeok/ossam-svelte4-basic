# *[ROOT/README.md](../README.md)*
# *[Svelte4 프로젝트 세팅](INSTALL.md)*
<br>

# *[Ch01) Component](../Ch01_Component/README.md)*
# *[Ch02) State 01](../Ch02_State01/README.md)*
# *[Ch02) State 02](../Ch02_State02/README.md)*
# *[Ch03) Reactivity](../Ch03_Reactivity/README.md)*
# *[Ch04) Event](../Ch04_Event/README.md)*
# *[Ch05) Props](../Ch05_Props/README.md)*
# *[Ch06) IfBlock](../Ch06_IfBlock/README.md)*
# *[Ch07) EachBlock](../Ch07_EachBlock/README.md)*
# *[Ch08) Bind01](../Ch08_Bind01/README.md)*
# *[Ch09) Bind02](../Ch09_Bind02/README.md)*
# *Ch10) Bind03 this, component*
<details>
<summary>접기/펼치기</summary>
<br>

## this, component

### this 바인딩
svelte에서 지원하는 dom 접근 방식으로 `bind:this`형태로 this 키워드를 bind 디렉티브에 할당한다.  
`<태그명 bind:this={상태변수} />` 형태로 접근하려는 태그에 작성하여 해당 태그의 dom 객체에 접근한다.  
할당한 변수에는 dom 객체가 할당된다.  

```svelte
<script>
  let bindThis = '';
</script>
<input bind:this={bindThis} />
```

<br>

#### 예제01) input 패스워드 유효성 검사 (input focus)
입력란에 패스워드 입력 후 버튼을 클릭했을 때 패스워드가 1234이면 입력란이 초록색으로, 1234가 아니면 빨간색으로 표시하며 포커싱이 적용된다.
```svelte
<script>
  let text = ''; // input value
  let clicked = false; // 클릭여부
  let validated = false; // 비밀번호 일치 여부
  let inputRef;

  const onValidatedCheck = () => {
    clicked = true;
    validated = text === '1234'
    if(!validated) {
      inputRef.focus();
    }
  }
</script>
<div>
  <form>
    <input 
      type="text" 
      bind:this={inputRef}
      bind:value={text} 
      class={clicked && (validated ? 'success' : 'failure')}
    >
    <button type="submit" on:click|preventDefault={onValidatedCheck}>검증하기</button>
  </form>
</div>
<style>
  .success{ background-color: lightgreen; }
  .failure{ background-color: lightcoral; }
</style>
```
### component 바인딩
Dom 속성을 바인딩하는 것처럼 컴포넌트의 props를 바인딩할 수 있다.  
props는 부모 컴포넌트에서 자식 컴포넌트로 전달하는 값이다.  
단방향 데이터로 자식 컴포넌트의 상태 값을 부모 컴포넌트에게 전달하지는 못한다.  
이때, bind 디렉티브를 사용하여 부모컴포넌트의 상태 변수와 자식 컴포넌트의 상태 변수가 연결되어 자식에서 부모의 상태값을 변경할 수 있다.  
VueJS 2의 `:prop.sync` 혹은 3의 `defineEmits(['update:prop']) / emit('update:count', 값)` 과 유사한 기능이다.

문법은 props 전달 문법앞에 `bind:`를 붙혀준다.
- props 전달
`<자식컴포넌트 props명={상태변수} />`
- component 바인딩
`<자식컴포넌트 bind:props명={상태변수} />`

#### 예제) 
- 부모 컴포넌트
  ```svelte
  <script>
    import Child from './child.svelte'
    let props = ''
  </script>
  <Child bind:props={props}/>
  ```
- 자식 컴트넌트
  ```svelte
  <script>
      export let props;
      const double = () => props *= 2;
  </script>

  <p>자손 값 : {props}</p>
  <button on:click={double}>두배구하기</button>
  ```

</details>
