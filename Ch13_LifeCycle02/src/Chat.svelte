<script>
  import Eliza from 'elizabot'
  import { beforeUpdate, afterUpdate } from 'svelte';

  let div;
  let autoscroll;
  /**
   * offsetHeight: 요소 전체 높이
   * scrollTop: 요소 내 스크롤 된 수직 거리(최상단 ~ 스크롤 출력 시작 위치)
   * scrollHeight: 스크롤 양(스크롤바 내부 콘텐츠 전체 높이)
   * 20: 여유값(버퍼)
  */
  beforeUpdate(() => {
    autoscroll = div && div.offsetHeight + div.scrollTop > div.scrollHeight - 20;
  })
  afterUpdate(() => {
    if (autoscroll) {
      div.scrollTop = div.scrollHeight;
    }
  })


  const eliza = new Eliza()
  let comments = [{ author: 'eliza', text: eliza.getInitial() }]
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const text = e.target.value;
      if (!text) return;
      comments = comments.concat({
        author: 'user',
        text
      });

      e.target.value = '';
      const reply = eliza.transform(text);

      setTimeout(() => {
        comments = comments.concat({
          author: 'eliza',
          text: '...',
          placeholder: true
        });
        setTimeout(() => {
          comments = comments
          .filter((comment) => !comment.placeholder)
          .concat({
              author: 'eliza',
              text: reply
          });
        }, 500 + Math.random() * 500);
      }, 200 + Math.random() * 200);
    }
  }
</script>

<div class="chat">
  <h1>Eliza</h1>
  <div class="scrollable" bind:this={div}>
    #{#each comments as comment}
      <article class={comment.author}>
        <span>{comment.text}</span>
      </article>
    {/each}
  </div>
  <input type="text" on:keydown={handleKeyDown} />
</div>

<style>
  .chat {
    display: flex; flex-direction: column;
    height: 100%; max-width: 320px;
  }
  .scrollable {
    flex: 1 1 auto; border-top: 1px solid #ccc;
    margin: 0 0 0.5em 0; overflow-y: auto;
  }
  article { margin: 0.5em 0; }
  .user { text-align: right; }
  span { 
    color: black; padding: 0.5em 1em; 
    display: inline-block; 
  }
  .eliza span {
    background-color: #eee;
    border-radius: 1em 1em 1em 0;
  }
  .user span {
    background-color: #0074d9;
    color: white; border-radius: 1em 1em 0 1em;
  }
</style>