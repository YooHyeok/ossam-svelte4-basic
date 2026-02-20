<script>
  let langs = [
    {
        id: 1,
        name: '스벨트(Svelte)',
        release: 2016,
        src: 'https://svelte.dev/_app/immutable/assets/svelte-logo.5c5d7d20.svg',
    },
    {
        id: 2,
        name: '리액트(React)',
        release: 2013,
        src: 'https://ko.legacy.reactjs.org/favicon.ico',
    },
    {
        id: 3,
        name: '뷰(Vue.js)',
        release: 2013,
        src: 'https://v2.ko.vuejs.org/images/logo.png',
    }
  ];
</script>
<div>
  <h1>03) 객체 배열</h1>
  <h3>웹 프론트엔드 언어</h3>
  {#each langs as lang (lang.id)}
    <div style="bolder: 2px solid black; width: 200px; padding: 10px;">
      <h4>이름 : {lang.name}</h4>
      <h4>배포년도 : {lang.release}</h4>
      <img src={lang.src} alt={lang.name} height="50">
    </div>
  {/each}
  {#each langs as {id, name, release, src} (id)}
    <div style="bolder: 2px solid black; width: 200px; padding: 10px;">
      <h4>이름 : {name}</h4>
      <h4>배포년도 : {release}</h4>
      <img src={src} alt={name} height="50">
    </div>
  {/each}
</div>