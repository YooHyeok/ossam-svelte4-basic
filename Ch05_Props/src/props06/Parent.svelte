<script>
  import Child from "./Child.svelte"
  const allData01 = {
    name: '김철수',
    age: 20,
    hobby: '축구하기'
  }
  const allData02 = {
    name: '김영희',
    age: 21,
    hobby: '넷플릭스보기'
  }
</script>
<div>
  <h1>06) Props export let spread</h1>
  <Child {...allData01}/>
  <Child {...allData02}/>
</div>