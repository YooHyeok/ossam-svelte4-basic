# *[Svelte4 프로젝트 세팅](INSTALL.md)*


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
# *Ch09) Bind02 양방향 데이터 연결 - select, textarea*
<details>
<summary>접기/펼치기</summary>
<br>

## select, textarea 바인딩
### bind:value
select와 textarea에도 값을 할당활때 value속성에 할당한다.
<br>

### 예제01) select 기본
select의 경우 option에 부여된 value값이 select의 value에 할당한 변수에 값이 초기화된다.  
```svelte
<script>
  let portals = [
    { name: '사이트선택', url: null },
    /* 생략... */
  ];
  let selected;
  const selectChange = (event) => {
    console.log(selected === event.target.value)
    if (selected != null) {
      window.open(selected)
    }
  }
</script>
<div>
  <select bind:value={selected} on:change={selectChange}>
    {#each portals as portal}
      <option value={portal.url}>{portal.name}</option>
    {/each}
  </select>
</div>
```
### 예제02) select multiple
select의 multiple은 여러개의 값을 ctrl로 선택하므로 선택된 복수개의 데이터를 bind:value 속성에 할당된 변수에 배열로 받게된다.
```svelte
<script>
  let foods = ['떡볶이','순대','오뎅','튀김'];
  let selected = []; // select의 multiple을 통한 복수 데이터 관리
  const selectChange = (event) => {
    console.log(event.target.value)
    if (selected != null) {
      window.open(selected)
    }
  }
</script>
<div>
  <select multiple bind:value={selected} on:change={selectChange}>
    {#each foods as food}
      <option value={food}>{food}</option>
    {/each}
  </select>
  #{#if selected.length = 0}
     <p>주문하실 메뉴를 선택해 주세요.</p>
  {:else}
     <p>선택메뉴: {selected}</p>
  {/if}
</div>

```
### 예제03) textarea
textarea는 기본적으로 텍스트 노드 혹은 value 속성에 내용을 할당할 수 있다.  
svelte에서는 bind:value를 활용하여 값을 할당한다.
```svelte
<script>
  let text = '내용을 입력하세요.'
</script>
<div>
  <textarea value="value속성으로 텍스트 할당" rows="5" /><>
  <textarea rows="5">텍스트노드로 텍스트 할당</textarea>
  <textarea bind:value={text} rows="5"/>
  <p>{text}</p>
</div>
```

</details>
