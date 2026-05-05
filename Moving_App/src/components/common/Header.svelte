<script>
  import { links } from "svelte-routing"
  import Icon from "@iconify/svelte"
</script>
<header>
  <h1><a href="/"><img src="./img/moving_logo.svg" alt="무빙로고"></a></h1>
  <ul use:links>
    <li>
      <Icon icon="ic:round-live-tv" color="white" height="28" />
      <a href="/now">현재상영작</a>
    </li>
    <li>
      <a href="/popular">인기영화</a>
    </li>
    <li>
      <a href="/upcoming">개봉예정작</a>
    </li>
    <li>
      <a href="/top">높은평점</a>
    </li>
  </ul>
</header>