<script>
  import { onMount } from 'svelte';

  let comments = [];

  const callFetch = async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=21`);
      comments = await res.json();
    } catch (error) {
      throw new Error(error)
    }
  }
  onMount(async () => {
    await callFetch();
  });
  
</script>
<div>
  <h2>Fetch Each Else Block</h2>
  {#each comments as comment}
      <article>
          <h4>이름 : {comment.name}</h4>
          <h4>이메일 주소 : {comment.email}</h4>
      </article>
  {:else}
      <p>loading...</p>
  {/each}
</div>