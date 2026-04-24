<script>
  import { fade, slide } from "svelte/transition"
  import { flip } from "svelte/animate";

  import BucketItem from "./BucketItem.svelte";

  export let buckets;
  export let onToggle;
  export let onRemove;

  export let editMode;
  export let onEditMode;
  export let onEditKeyup;
</script>
<div class="bucketlist">
  {#each buckets as bucket, index(bucket)} <!-- key를 bucket으로 지정할경우 불필요한 리랜더링 발생 -->
  <div in:fade out:slide animate:flip> <!-- key가 bucket이고 체크 토글시 map으로 재할당할 경우 -->
      <BucketItem 
        {bucket} {onToggle} {onRemove}
        {editMode} {onEditMode} {onEditKeyup}
      />
  </div>
{/each}
</div>