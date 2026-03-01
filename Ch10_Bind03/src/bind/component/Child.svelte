<script>
    export let childValue;
    const double = () => childValue *= 2;
</script>

<p>자손 값 : {childValue}</p>
<button on:click={double}>두배구하기</button>