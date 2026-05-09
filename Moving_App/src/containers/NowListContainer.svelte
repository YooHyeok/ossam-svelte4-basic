<script>
  import Error from "../components/common/Error.svelte";
  import LoadingList from "../components/common/LoadingList.svelte";
  import NowList from "../components/sub/NowList.svelte";
  import { nows } from "../libs/store"
  const promise = $nows
</script>

{#await promise}
  <LoadingList/>
{:then value}
  <NowList datas={value.data.results}/>
{:catch error}
  <Error/>
{/await}