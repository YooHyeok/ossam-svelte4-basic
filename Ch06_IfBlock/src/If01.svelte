<script>
  let user = { loggedState: false }
  const onToggle = () => user.loggedState = !user.loggedState
</script>
<div>
  <h1>01) If Block 버튼전환 예제</h1>
  {#if user.loggedState}
    <button on:click={onToggle}>로그아웃</button>
    <p>현재 로그인 상태입니다.</p>
  {/if}
  {#if !user.loggedState}
    <button on:click={onToggle}>로그인</button>
    <p>현재 로그아웃 상태입니다.</p>
  {/if}
</div>