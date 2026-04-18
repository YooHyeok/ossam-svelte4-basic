<script>
  import axios from 'axios'

  const callAxios = async () => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=21`);
    return res.data;
  } catch (error) {
    throw new Error(error);
  }
}

let promise = callAxios();
  
</script>

<div>
  <h2>Axios Await Block</h2>
  {#await promise}
  <p>loading...</p>
  {:then value}
  {#each value as comment}
  <article>
    <h4>이름 : {comment.name}</h4>
    <h4>이메일 주소 : {comment.email}</h4>
  </article>
  {/each}
  {:catch error}
  <p>{error.message} : 에러가 발생되었습니다.</p>
  {/await}
</div>