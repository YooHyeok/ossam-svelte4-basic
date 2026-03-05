<script>
    import { onMount } from "svelte";
  let comments = [];
  const fetchComments = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    comments = await response.json();
  }
  onMount(async () => {
    await fetchComments()
  })
  
</script>
<div>
  <h1>01) onMount - 댓글 조회</h1>
  <!-- <h4>F12를 눌러 개발자도구 콘솔을 확인하세요.</h4> -->
   <button on:click={() => comments = []}>댓글 비활성화</button>
   <button on:click={fetchComments}>댓글 재조회</button>
  {#if comments.length > 0}
    <div class="comments">
      {#each comments as comment}
        <article>
          <h4>이름: {comment.name}</h4>
          <h4>이메일: {comment.email}</h4>
        </article>
      {/each}
    </div>
  {/if}

</div>
<style>
  .comments {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
  }
</style>