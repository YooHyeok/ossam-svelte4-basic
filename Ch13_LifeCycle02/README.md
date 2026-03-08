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
# *Ch13) LifeCycle02: 응용 - elizabot 활용 챗봇, tick*
<details>
<summary>접기/펼치기</summary>
<br>

## tick

### 개념
DOM이 업데이트 되었는지 확실히 보장하고 싶을 때 사용하는 도구이다.  
변경된 상태값이 실제 DOM에 적용되면 다음 단계를 진행할 수 있도록 도와준다.  
예를들어 A로직 후 B 로직을 실행할 때, A로직에 의해 DOM이 업데이트 되는데, B로직이 DOM이 업데이트 된 후 실행될 수 있게 기다려주는 기능을 제공한다.  
변경된 내용이 있다면 변경된 내용이 DOM에 반영된 직후 바로 호출되거나, 변경된 내용이 없어도 바로 호출된다.  

변경된 내용이 없어도 바로 호출된다는 것은, 사실 Tick을 안써도 되는 상황이지 않을까?  
특정 로직이 실행되었을 때 상태 변경이 없거나 혹은 상태 변경 후 DOM이 변경되지 않더라도 DOM이 업데이트 되었는지 확실히 **보장**하고 싶을 때 사용한다.  
Vue의 nextTick과 동일한 역할을 수행한다.  

### 기본 문법
Promise 기반으로 체이닝방식 혹은 async/await방식 모두 사용 가능하다.  

- 체이닝 방식
  ```svelte
  <script>
    import { tick } from 'svelte'
    const tickExample = async () => {
      /* 1. 로직 실행 */
      tick().then(() => {
      /* 2. DOM 반영 후 실행할 로직 */
    })
    }
    
  </script>
  ```
- async/await 방식
  ```svelte
  <script>
    import { tick } from 'svelte'
    const tickExample = async () => {
      /* 1. 로직 실행 */
      await tick() // DOM 반영 대기
      /* 2. DOM 반영 후 실행할 로직 */
    }
  </script>
  ```

### 예제) input 활성화 후 포커싱
상태값에 의해 dom이 생성되고, 생성된 dom에 접근하기위해 Tick을 통해 대기하는 예제이다.  
- 체이닝 방식
  ```svelte
  <script>
      import { tick } from "svelte";

    let active;
    let input;
    const handleCilck = (param) => {
      active = param
      tick().then(() => {
      if (active) {
          input.focus()
        }
      })
    };
  </script>
  <div>
    <h1>Tick</h1>
    <button on:click={() => handleCilck(true)}>input 활성화</button>
    <button on:click={() => handleCilck(false)}>input 비활성화</button>
    {#if active}
    <div>
      <input type="text" bind:this={input} />
    </div>
    {/if}
  </div>
  ```
- async/await 방식
  ```svelte
  <script>
      import { tick } from "svelte";

    let active;
    let input;
    const handleCilck = async (param) => {
      active = param
      await tick()
      if (active) {
        input.focus()
      }
    };
  </script>
  <div>
    <h1>Tick</h1>
    <button on:click={() => handleCilck(true)}>input 활성화</button>
    <button on:click={() => handleCilck(false)}>input 비활성화</button>
    {#if active}
    <div>
      <input type="text" bind:this={input} />
    </div>
    {/if}
  </div>
  ```

### 번외 - Tick의 원리 (MicroTask)
<details>
<summary>접기/펼치기</summary>
<br>

Svelte는 상태가 업데이트 되면 즉시 업데이트 되지 않는다.  
정해진 시간 동안 변경된 내용을 한번에 업데이트 한다.  
변경된 내용들은 Microtask Queue에 적재된다.

자바스크립트 이벤트 루프 구조를 살펴본다.  
```
Call Stack (현재 실행중인 코드)
↓
Microtask Queue
↓
Render (DOM paint)
↓
Macrotask Queue
```

#### `_task Queue가 필요한 이유`
자바스크립트는 기본적으로 싱글 스레드다.  
즉, 동시에 한가지 일만 처리할 수 있다.  
```js
console.log("A")
console.log("B")
console.log("C")
```
위 코드는 동기 실행이다.  

문제는 아래와 같은 작업이다.  
- 네트워크 요청
- 파일 읽기
- 타이머
- 사용자 클릭 이벤트  
위와 같은 작업들은 시간이 오래걸린다.  
예를들어 `fetch("/data")` 와 같은 api 호출을 자바스크립트가 동기적으로 기다리면 브라우저와 UI가 멈춘다.  
그래서 자바스크립트는 비동기 구조를 사용한다.  

자바스크립트 엔진이 비동기를 처리하기 위한 구조는 다음과 같다.  
```
Call Stack
↓
Web APIs
↓
Task Queue
↓
Event Loop
```
<br>

#### `Call Stack`
현재 실행중인 함수들이 쌓이는 공간이다.  
자바스크립트 엔진이 직접 관리하며, 함수 실행이 완료되면 자동으로 pop(제거) 한다.  
```js
function a() {
  b()
}
function b() {
  console.log()
}
a()
```
위 코드가 Call Stack에 쌓이면 아래와 같이 쌓이고, 각 함수들이 실행되면서 stack이 비워진다.다.  
```
[Call Stack]

a()
└ b()
  └ console.log()
```
<br>

#### `Web APIs`
브라우저는 자바스크립트 엔진 외 비동기 작업을 처리하는 API를 제공한다.
- setTimeout
- fetch
- DOM events

```js
setTimeout(() => {
  console.log("1초 지남")
}, 1000)
```
setTimeout의 실행과정은 아래와 같다.  
```
[실행 과정]

setTimeout 등록
↓
Web API timer 처리
↓
1초 후 callback 준비
```
이때 callback은 Task Queue로 이동한다.

#### `Task Queue`
Task Queue는 나중에 실행할 작업을 저장하는 대기열이다.  
```
[Task Queue]
task1
task2
task3
```
Event Loop는 Call Stack이 비어있으면 Task Queue에서 Task 하나를 꺼내 실행한다.  

#### `Event Loop`
자바스크립트 실행을 관리하는 루프이다.  
Call Stack이 비어있는지 감시하고, 비어있다면 Task Queue 에서 Task 하나를 꺼내 Call Stack에 쌓는다.  
```js
while(true) {
  if (!callStack || callstack.length === 0) {
    // taskQueue에서 task 실행
  }
}
```

자바스크립트에는 2가지 종류의 TaskQueue가 있다.  
- Microtask Queue
- Macrotask Queue
이 둘은 우선순위가 다르다.  

#### `Macrotask Queue`
일반적인 비동기 작업이다.  
- setTimeout
- setInterval
- DOM events
- postMessage  

```js
setTimeout(()=> {},1000)
```
위 코드에서 callback이 Mackrotask Queue에 들어간다.  
(공통 패턴은 등록해둔 콜백/핸들러가 큐에 들어가게 된다.)  

#### `Microtask Queue`
Macrotask 보다 더 높은 우선순위를 가진 task로, 더 먼저 실행된다.  
- Prmomise.then
- queueMicrotask
- MutationObserver  
```js
Promise.resolve().then(() => {
  console.log("Promise")
})
```
then에 작성한 callback은 Microtask Queue에 들어간다.  
실행 순서는 아래와 같다.  
```
[JS 이벤트 루프 순서]
Call Stack
↓
Microtask Queue
↓
Redner
↓
Macrotask Queue
```

```js
console.log("A") // 1. (Call Stack)
setTimeout(()=>{
  console.log("B") // 4. (Macrotask)
}, 1000)
Promise.resolve().then(() => {
  console.log("C") // 3. (Microtask)
})
console.log("D") // 2. (Call Stack)
```

```
[실행 흐름]

Call Stack
 ├ console.log(A)
 ├ setTimeout
 ├ Promise.then
 └ console.log(D)

Call Stack 비워짐 (순차적으로 실행)

Microtask Queue
Call Stack
 └ console.log(B) (setTimeout)

Call Stack 비워짐

Macrotask Queue
Call Stack
 └ console.log(C) (Promise.then())

 Call Stack 비워짐
```

자바스크립트 엔진에 의해 1번과 2번 그리고 3번과 4번의 Web APIs들이 Call Stack에 쌓이고  
3번과 4번의 콜백이 각각 Microtask와 Macrotask Queue(Task Queue)에 쌓인다.  
Call Stack에서 1, 2, 3, 4가 모두 호출 완료된 후 Call Stack이 비워진다.  
이벤트 루프는 Call Stack이 비워진것을 감지하고, 우선순위가 높은 Microtask Queue를 확인하여 3번을 Call Stack에 넣은 후 호출한다.  
Call Stack이 비워지면 다시 이벤트 루프가 Macrotask Queue를 확인하여 4번을 Call Stack에 넣은 후 호출하고 Call Stack이 비워진다.  

브라우저는 보통 Microstack 이후 render를 수행한다.  
```
JS 실행
↓
Microtask
↓
DOM render
```

#### Svelte 구조로 이해
Svelte는 state 변경시 앞서 말한대로 DOM 업데이트를 바로 하지 않는다.  

```
state 변경
↓
dirty mark
↓
schedule_update()
↓
microtask
↓
flush
↓
DOM update
```


```js
import {onMount} from 'svelte'

let count = 0;

onMount(() => {
  count = 1
  count = 2
  count = 3
})
```
```js
import {onMount} from 'svelte'

let count = 0;
let num = 0;

onMount(() => {
  count = 1
  num = 1
  count = 2
  num = 2
  count = 3
})
```
예를들어 위와같이 상태변수를 3번 변경할 경우 DOM update는 3번이 된다.  
하지만 Svelte 입장에서는 비용적인 측면에서 브라우저 렌더링 비용을 줄여주기 위해 중간 DOM 업데이트를 생략함으로써 DOM 업데이트 횟수를 1번으로 처리한다.  
```
[state 변경]
→ DOM update 예약
→ microtask에서 DOM 업데이트
```
그런 이유로 Svelte는 위와 같은 구조를 사용한다.
이 과정을 더 상세하게 나누면 아래와 같다.  
```
사용자 정의 함수 실행
↓
state 변경
↓
dirty mark
↓
schedule_update()
↓
Promise.resolve().then(flush) → microtask queue 적재 및 대기
↓
사용자 정의 함수 종료
↓
microtask queue → pop(flush)
↓
Call Stack → add(flush)
↓
flush 호출 → Call stack pop(flush)

DOM update
```

각 흐름의 상세 내용은 다음과 같다.  
- #### drity mark  
  → 어떤 state가 변경되었는지 표시 (Dom 업데이트시 전체 DOM을 다시 계산하지 않기 위해)
- #### schedule_update()  
  → DOM update (flush) `예약` (flush 작업을 Microtask queue에 등록)  
- #### flush (배치)
  → dirty component 확인
  → component update 실행
  → DOM patch

최종적으로 flush가 Microtask의 Queue에 들어가게 된다.  
```
Microtask Queue
└ flush
```

Svelte scheduler 때문에 같은 tick에서는 Microtask queue에 2개의 flush가 추가될 수 없다.  
```js
let update_scheduled = false
function scheduled_update() {
  if (!update_scheduled) {
    update_scheduled = true
    Promise.resolve().then(flush)
  }
}
```

Svelte에서 tick을 사용할 경우 하나의 상태 변경 흐름을 두 개의 flush 사이클로 분리할 수 있다.

먼저 tick 이전의 상태 변경이 발생하면 Svelte scheduler에 의해 flush가
microtask queue에 예약된다.

이후 await tick()을 만나면 현재 실행 중인 함수(test)의 실행이 일시 중단되고,
Call Stack이 비워진 뒤 microtask queue에 있던 flush가 실행된다.

flush 실행 과정에서 DOM Patch가 수행되어 tick 이전 상태 변경이 실제 DOM에 반영된다.

flush가 완료되면 tick의 Promise가 resolve되고,
일시 중단되었던 함수(test)가 다시 실행된다.

그 후 tick 이후의 상태 변경이 발생하면 새로운 flush가 다시 microtask queue에
예약되고, 동일한 절차를 통해 한 번 더 DOM Patch가 수행된다.

이는 마치 두개의 상태변경 코드를 tick 기준으로 두개의 flush로 나누어 각각을 동기적으로 처리하는것처럼 처리할 수 있다.

```svelte
<script>
  import { tick } from 'svelte'

  let loading = false;
  let count = 0;
  async function test() {
    loading = true   // flushA 예약

    await tick()     // flushA 실행 대기

    count = 10       // flushB 예약
  }
  onMount(() => {
    test();
  })
</script>
```

```
Call Stack → add(onMount, test)
↓
loading = true
↓
microtask queue → add(flushA)
↓
await tick() → test 실행 일시 중지 (Promise pending)
↓
Call Stack → pop(test)
↓
microtask queue → pop(flushA)
↓
Call Stack → add(flushA)
↓
flush 호출 → Call stack pop(flushA)
↓
<DOM update>
↓
tick Promise resolve
↓
microtask queue → add(test resume)
↓
microtask queue → pop(test resume)
↓
Call Stack → add(test resume)
↓
count = 10
↓
microtask queue → add(flushB)
↓
Call Stack → pop(test resume)
↓
microtask queue → pop(flushB)
↓
Call Stack → add(flushB)
↓
flush 호출 → Call stack pop(flushB)
↓
<DOM update>
```

***React, Vue, Svelte 3개 모두 상태변경 Batch 처리는 중간 로직과 flush 전략의 차이가 있을 뿐 Microtask에 의한 핵심적 내용은 모두 동일하다. ***
</details>
<br>

</details>
<br>