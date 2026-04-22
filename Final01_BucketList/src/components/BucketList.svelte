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

  const blink = (node, value) => {
    let prev = value;
    return {
      update: (newValue) => {
        if (prev !== newValue) {
          node.animate([
            { opacity: 1 },
            { opacity: 0.3 },
            { opacity: 1 }
          ], { duration: 300 });
        }
        prev = newValue;
      }
    }
  }
</script>
<div class="bucketlist">
  {#each buckets as bucket (bucket.id)}
  <!-- <div in:fade out:slide animate:flip> --> <!-- key가 bucket이고 체크 토글시 map으로 재할당할 경우 -->
  <div in:fade out:slide use:blink={bucket.chk}> <!-- key가 bucket.id인 경우 flip 작동 안함 -->
      <BucketItem 
        
        {bucket} {onToggle} {onRemove}
        {editMode} {onEditMode} {onEditKeyup}
      />
  </div>
{/each}
</div>