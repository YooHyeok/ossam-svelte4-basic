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
# *Ch13) Slot - 기본문법, Fallback, named, props, fragment, $$Slots*
<details>
<summary>접기/펼치기</summary>
<br>

## 개념
부모 컴포넌트가 자식 컴포넌트에 html 컨텐츠를 전달하는 기능이다.  
컴포넌트의 재사용성을 극대화하고, 부모 컴포넌트에서 컨텐츠를 유연하게 주입함으로써 자식 컴포넌트의 내용을 재구성할 수 있다.  

## 기본문법, Fallback, named, props, fragment, $$Slots

### 01) 기본 문법
부모 컴포넌트에서 자식 컴포넌트를 호출할 때 `<자식컴포넌트><!--전달할 마크업--></자식컴포넌트>` 형태로 자식 컴포넌트 태그 사이에 전달할 마크업을 작성한다.  
자식 컴포넌트에서는 `<slot/>` 태그를 통해 부모 컴포넌트에서 전달한 마크업을 배치할 수 있다.  

#### 예제)
- Parent.svelte
  ```svelte
  <script>
    import Child from "./Child.svelte";
  </script>
  <div>
    <Child>
      <h4>이름 : 스벨트(Svelte)</h4>
      <p>배포년도 : 2016년</p>
      <img src="https://svelte.dev/_app/immutable/assets/svelte-logo.5c5d7d20.svg" alt="스벨트(Svelte)" height="50" />
    </Child>
    <Child>
      <h4>이름 : 리액트(React)</h4>
      <p>배포년도 : 2013년</p>
      <img src="https://ko.legacy.reactjs.org/favicon.ico" alt="리액트(React)" height="50" />
    </Child>
  </div>
  <br>
  ```

- Child.svelte
  ```svelte
  <div class="box">
    <slot/>
  </div>
  <style>
    .box {
      width: 300px; padding: 10px;
      border: 2px solid black; margin-bottom: 20px;
    }
  </style>
  ```

<br>

### 02) Fallback - 기본값
부모 컴포넌트에서 자식 컴포넌트를 호출할 때 `<자식컴포넌트></자식컴포넌트>` 혹은 `<자식컴포넌트/>` 형태로 마크업을 전달하지 않는 경우 자식 컴포넌트에서 slot 태그 사이에 `<slot><!-- 기본값 --></slot>` 형태로 기본값을 작성하여 출력할 수 있다.  

#### 예제)
- Parent.svelte
  ```svelte
  <script>
    import Child from "./Child.svelte";
  </script>
  <div>
    <Child>
      <h4>이름 : 스벨트(Svelte)</h4>
      <p>배포년도 : 2016년</p>
      <img src="https://svelte.dev/_app/immutable/assets/svelte-logo.5c5d7d20.svg" alt="스벨트(Svelte)" height="50" />
    </Child>
    <Child>
      <h4>이름 : 리액트(React)</h4>
      <p>배포년도 : 2013년</p>
      <img src="https://ko.legacy.reactjs.org/favicon.ico" alt="리액트(React)" height="50" />
    </Child>
    <Child/> <!-- 마크업 미전달 -->
    <Child/> <!-- 마크업 미전달 -->
    <Child/> <!-- 마크업 미전달 -->
  <br>
  ```
- Child.svelte
  ```svelte
  <div class="box">
    <slot>
      <p>입력된 데이터가 없습니다.</p>
    </slot>
  </div>
  <style>
    .box{
      width: 300px; padding: 10px;
      border: 2px solid black; margin-bottom: 20px;
    }
  </style>
  ```

### 03) named slot - slot 이름 설정
자식 컴포넌트에 여러 slot영역이 존재할 경우 각 slot에 이름 부여 후   
부모 컴포넌트에서 전달하려는 dom 요소를 원하는 위치에 배치하기 위해 사용하는 기능이다.  

자식 컴포넌트의 slot 태그에서 vue와 동일하게 `name='이름'` 형태로 name 속성에 이름을 부여한다.  
부모 컴포넌트에서는 `slot="이름"` 형태로 사용하며 vue의 `v-slot:이름`(혹은 `#이름`) 문법과 동일한 의미를 갖는다.  

#### 예제)
- Parent.svelte
  ```svelte
  <script>
    import Child from "./Child.svelte";
  </script>
  <div>
    <Child>
      <h4 slot="name">스벨트(Svelte)</h4>
      <p slot="release">2016</p>
      <img slot="img" src="https://svelte.dev/_app/immutable/assets/svelte-logo.5c5d7d20.svg" alt="스벨트(Svelte)" height="50" />
    </Child>
    <Child>
      <h4 slot="name">리액트(React)</h4>
      <p slot="release">2013</p>
      <img slot="img" src="https://ko.legacy.reactjs.org/favicon.ico" alt="리액트(React)" height="50" />
    </Child>
    <Child/> <!-- 마크업 미전달 -->
    <Child/> <!-- 마크업 미전달 -->
    <Child/> <!-- 마크업 미전달 -->
  </div>
  ```
- Child.svelte
  ```svelte
  <div class="box">
    <h4>이름 : <slot name="name">전달받은 이름이 없습니다.</slot></h4>
    <p>배포년도 : <slot name="release">전달받은 배포년도가 없습니다.</slot></p>
    <slot name="img">전달받은 이미지가 없습니다.</slot>
  </div>
  <style>
    .box{
      width: 300px; padding: 10px;
      border: 2px solid black; margin-bottom: 20px;
    }
  </style>
  ```


</details>
