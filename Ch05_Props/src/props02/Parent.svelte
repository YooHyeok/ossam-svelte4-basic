<script>
import Child from "./Child.svelte"
</script>
<div>
  <h1>01) Props export let 기본값</h1>
  <Child name={'김철수'} age={20} hobby={'축구하기'} />
  <Child name="이영희" age="21" hobby="넷플릭스보기" />
  <Child />
  <Child name="차은우" />
</div>