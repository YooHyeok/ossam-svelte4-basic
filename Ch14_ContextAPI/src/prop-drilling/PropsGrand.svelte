<script>
    import PropsFather from "./PropsFather.svelte";
    let num = 1;
</script>

<div>
    <h1>01)Prop Drilling</h1>
    <h4>Grand 구역</h4>
    <button on:click={() => num++}>1씩 증가</button>
    <p>기본 숫자 : {num}</p>
    <hr />
    <PropsFather {num} />
</div>