<script>
  import { fade, slide } from "svelte/transition"
  import { flip } from "svelte/animate";

  import BucketItem from "./BucketItem.svelte";
  import { buckets  } from './store'

 

</script>
<div class="bucketlist">
  {#each $buckets.buckets as bucket (bucket)}
  <div in:fade out:slide animate:flip> <!-- key가 bucket이고 체크 토글시 map으로 재할당할 경우 -->
    <BucketItem {bucket} />
  </div>
  {/each}
</div>