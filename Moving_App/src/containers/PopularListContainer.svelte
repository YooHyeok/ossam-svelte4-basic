<script>
  import Error from "../components/common/Error.svelte";
  import LoadingList from "../components/common/LoadingList.svelte";
  import PopularList from "../components/sub/PopularList.svelte";
  import { populars } from "../libs/store"
  const promise = $populars
</script>

{#await promise}
  <LoadingList/>
{:then value}
  <PopularList datas={value.data.results}/>
{:catch error}
  <Error/>
{/await}