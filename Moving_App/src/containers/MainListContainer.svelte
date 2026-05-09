<script>
  import Error from "../components/common/Error.svelte";
  import MainLoading from "../components/common/MainLoading.svelte";
  import MainList from "../components/main/MainList.svelte";
  import { nows } from "../libs/store"
  const promise = $nows
</script>

{#await promise}
  <MainLoading/>
{:then value}
  <MainList datas={value.data.results}/>
{:catch error}
  <Error/>
{/await}