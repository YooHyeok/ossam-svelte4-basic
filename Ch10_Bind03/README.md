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
`<태그명 bind:this={변수명} />` 형태로 접근하려는 태그에 작성하여 해당 태그의 dom 객체에 접근한다.  
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

</details>
