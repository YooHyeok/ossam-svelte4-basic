<script>
  import { fade, slide } from "svelte/transition"

  import BucketItem from "./BucketItem.svelte";

  export let buckets;
  export let onToggle;
  export let onRemove;

  export let editMode;
  export let onEditMode;
  export let onEditKeyup;

  const blink = (node, value) => {
    let prev = value;
    node.style.position = 'relative';
    node.style.overflow = 'hidden';
    return {
      update: (newValue) => {
        if (prev !== newValue) {
          const overlay = document.createElement('div');
          overlay.style.cssText = `
            position:absolute; left:0; right:0; bottom:0;
            height:100%; pointer-events:none;
            background: rgba(255,255,255,0.65);
          `;
          node.appendChild(overlay);
          overlay.animate([
            { transform: 'translateY(0)' },
            { transform: 'translateY(-100%)' }
          ], { duration: 300, easing: 'ease-out' }).onfinish = () => overlay.remove();
        }
        prev = newValue;
      }
    }
  }
</script>
<div class="bucketlist">
  {#each buckets as bucket (bucket.id)}
  <div in:fade out:slide use:blink={bucket.chk}>
      <BucketItem 
        {bucket} {onToggle} {onRemove}
        {editMode} {onEditMode} {onEditKeyup}
      />
  </div>
{/each}
</div>