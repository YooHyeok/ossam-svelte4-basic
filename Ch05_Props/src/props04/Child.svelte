<script>
  export let name = "홍길동";
  export let age = 20;
  export let hobby = "독서하기";
  export let location
  export let onPlus
  export let onMinus
</script>

<h3>이름: {name}</h3>
<h3>나이: {age}</h3>
<h3>취미: {hobby}</h3>
<h3>지역: {location}</h3>
<hr>
<button on:click={onPlus}>나이증가 +</button>
<button on:click={onMinus}>나이감소 -</button>
